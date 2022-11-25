import axios, { AxiosResponse } from 'axios';
import {
	DynamicKeyWithCount,
	ListingWithPricingAndImage,
	ResultAndCountResponse,
} from '../models/Response.models';

const GETParams = {
	params: {
		t: new Date().getTime(),
	},
};

async function RetrieveAllNFTs(): Promise<ResultAndCountResponse> {
	let nfts: ListingWithPricingAndImage[] = [];
	let counts: DynamicKeyWithCount = {};
	const url = <string>process.env.RETRIEVE_FILTERED_NFTS_URL;

	await axios.get(url).then((data: AxiosResponse<ResultAndCountResponse>) => {
		nfts = data.data.result;
		counts = data.data.counts;
	});

	return {
		result: nfts,
		counts: counts,
	};
}

async function RetrieveFilteredNFTs(
	queryParams: string
): Promise<ResultAndCountResponse> {
	let nfts: ListingWithPricingAndImage[] = [];
	let counts: DynamicKeyWithCount = {};
	const url = <string>process.env.RETRIEVE_FILTERED_NFTS_URL;

	await axios
		.get(url + queryParams)
		.then((res: AxiosResponse<ResultAndCountResponse>) => {
			nfts = res.data.result;
			counts = res.data.counts;
		});

	return {
		result: nfts,
		counts: counts,
	};
}

async function RetrieveFavoredNFTs(
	queryParams: string
): Promise<ResultAndCountResponse> {
	let nfts: ListingWithPricingAndImage[] = [];
	let counts: DynamicKeyWithCount = {};
	const url = 'http://localhost:3400/wivmkt-nft-service/retrieveFilteredNFTs';

	await axios
		.get(url + queryParams)
		.then((res: AxiosResponse<ResultAndCountResponse>) => {
			nfts = res.data.result;
			counts = res.data.counts;
		});

	return {
		result: nfts,
		counts: counts,
	};
}

export { RetrieveAllNFTs, RetrieveFilteredNFTs, RetrieveFavoredNFTs };
