import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import axios from 'axios';
import { ethers, utils } from 'ethers';
import { generateRandomColor } from 'src/utils';
import { UserModel } from 'src/components/models';

export const useUserStore = defineStore(
	'userStore',
	() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const walletAddress: Ref<string> = ref('');
		// const nftStorage = useNFTStore();
		const user: Ref<UserModel | null> = ref<UserModel | null>(null);

		const connectWallet = async () => {
			// this.showConnectWallet = true;
			// // this.showMyWallet = true;
			// document.body.classList.add('no-scroll');
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
			walletAddress.value = utils.getAddress(accounts[0]);
			// await nftStorage.fetchNFTs(accounts[0]);

			const getUser = await axios.get(
				process.env.MARKETPLACE_API_URL + '/market/users/' + walletAddress.value
			);
			if (!!getUser.data) return (user.value = getUser.data);

			try {
				const getColors = [
					generateRandomColor(),
					generateRandomColor(),
					generateRandomColor(),
				].join(',');
				const newUser = await axios.post(
					process.env.MARKETPLACE_API_URL + '/market/users',
					{
						walletAddress: walletAddress.value,
						avatar: `https://source.boringavatars.com/beam/40/${walletAddress.value}?colors=${getColors}`,
					}
				);
				user.value = newUser.data;
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				throw error;
			}
		};

		const checkConnection = async () => {
			const connectedAccounts: string[] = await window.ethereum.request({
				method: 'eth_accounts',
			});
			if (connectedAccounts.length == 0) {
				walletAddress.value = '';
			}
		};

		//TODO: detect network feature
		// const checkNetwork = async () => {
		// 	const connectedAccounts: string[] = await window.ethereum.request({
		// 		method: 'eth_accounts',
		// 	});
		// 	if (connectedAccounts.length == 0) {
		// 		walletAddress.value = '';
		// 	}
		// };

		const getWalletBalance = async () => {
			if (!window.ethereum) return 0;
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const balance = await provider.getBalance(walletAddress.value);
			const balanceInETH = ethers.utils.formatEther(balance);

			// Convert Matic to USDC
			const maticToUsdc = await axios.get(
				'https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd'
			);
			const maticToUsdcRate = maticToUsdc.data['matic-network'].usd;
			return Number(balanceInETH) * maticToUsdcRate;
		};

		const $reset = () => {
			(walletAddress.value = ''), (user.value = null);
		};

		return {
			// provider,
			walletAddress,
			connectWallet,
			getWalletBalance,
			checkConnection,
			user,
			// isConnected,
			// walletBalance,
			// connect,
			// logout,
			$reset,
		};
	},
	{ persist: true }
);
