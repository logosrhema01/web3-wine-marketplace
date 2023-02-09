# WiV Marketplace (wiv-marketplace)
The WiV Marketplace is a web application which allows customers to trade their NFT wines using Opensea's Seaport Protocol.

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev
```

### Lint the files
```bash
yarn lint
# or
npm run lint
```

### Build the app for production
```bash
quasar build
```

# ENV File Variables
```
# BASEURL
MARKETPLACE_API_URL=http://localhost:8080/api

# NFT Microservice
RETRIEVE_FILTERS_URL=http://localhost:8080/api/nfts/filters
RETRIEVE_FILTERED_NFTS_URL=http://localhost:8080/api/nfts
RETRIEVE_NEWLY_MINTED_NFTS_URL=http://localhost:8080/api/release/newlyMinted
BURN_NFT_URL=http://localhost:8080/api/market/nft/burn

# Transactions Microservice
CREATE_ORDER_URL=http://localhost:8080/api/market/order/listing/order.list
FULFILL_ORDER_URL=http://localhost:8080/api/market/order/fulfill/order.fulfill
CANCEL_ORDER_URL=http://localhost:8080/api/market/order/cancel/order.cancel
RETRIEVE_ORDER_URL=http://localhost:8080/api/market/single/getOrderParameters

# Orders Microservice
RETRIEVE_LISTINGS_URL=http://localhost:8080/api/orders/listings
RETRIEVE_INCOMING_OFFERS_URL=http://localhost:8080/api/orders/incoming
RETRIEVE_OUTGOING_OFFERS_URL=http://localhost:8080/api/orders/outgoing
RETRIEVE_TRANSACTIONS_URL=http://localhost:8080/api/orders/allTransactions

# Users Microservice
MARKETPLACE_USERS_API=http://0.0.0.0:8080/api/users

# Seaport Constants
WIV_FEE=250
WIV_FEE_RECEIVER=0xF0377dF3235e4F5B3e38DB494e601Edf3567eF9A

# SMART CONTRACTS
MARKETPLACE_CURRENCY=0xC1d6EF502Ac5410B3F3706beb6a0808131337Fb6
# USDC_CONTRACT=0xfe4f5145f6e09952a5ba9e956ed0c25e3fa4c7f1
# USDC_CONTRACT=0x0FA8781a83E46826621b3BC094Ea2A0212e71B23

# Blockchain
MUMBAI_SCAN_API_URL=https://api-testnet.polygonscan.com/api
POLYGON_SCAN_API_URL=https://api.polygonscan.com/api
POLYGON_SCAN_API_KEY=3ZRAMP4CSAQD28PVSQJI6NTD5J88HY8K36

LOGS_TOPIC_0_ERC1155=0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62
LOGS_TOPIC_0_ERC721=0x4099424f1d46c603584f23b5ff4f55e546a2b73e73393085c1c8953ba3213f13

ERC1155_CONTRACT_ADDRESS_MUMBAI=0x1458DAb28F3e94F8e4Ae3fCb03De803e53Dd443D
ERC721_CONTRACT_ADDRESS_POLYGON=0x57a8D59eFF06381a9B0D709271871187Ee1b418C
ERC721_CONTRACT_ADDRESS_MUMBAI=0x4e6Bb36DAcb0Af7fB2d5240BfB2c72b63c890A18
SEAPORT_CONTRACT_ADDRESS=0x00000000006c3852cbEf3e08E8dF289169EdE581

RINKEBY_PROVIDER_URL=https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
MUMBAI_PROVIDER_URL=https://rpc-mumbai.maticvigil.com
POLYGON_PROVIDER_URL=https://polygon-rpc.com

FROM_BLOCK=0
TO_BLOCK=99999999

# TRANSAK
TRANSAK_API_KEY=


```
