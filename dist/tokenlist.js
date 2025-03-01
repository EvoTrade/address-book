// tokenlist.json
var name = "Aave token list";
var logoURI = "ipfs://QmWzL3TSmkMhbqGBEwyeFyWVvLmEo3F44HBMFnmTUiTfp1";
var keywords = ["audited", "verified", "aave"];
var tags = {
  underlying: {
    name: "underlyingAsset",
    description: "Tokens that are used as underlying assets in the Aave protocol"
  },
  aaveV2: { name: "Aave V2", description: "Tokens related to aave v2" },
  aaveV3: { name: "Aave V3", description: "Tokens related to aave v3" },
  aTokenV2: {
    name: "aToken V2",
    description: "Tokens that earn interest on the Aave Protocol V2"
  },
  aTokenV3: {
    name: "aToken V3",
    description: "Tokens that earn interest on the Aave Protocol V3"
  },
  stataToken: {
    name: "stata token",
    description: "Tokens that are wrapped into a 4626 Vault"
  },
  staticAT: {
    name: "static a token",
    description: "Tokens that are wrapped into a 4626 Vault"
  }
};
var tokens = [
  {
    chainId: 56,
    address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    name: "Dai Token",
    decimals: 18,
    symbol: "DAI",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/dai.svg"
  },
  {
    chainId: 56,
    address: "0x3116a040165CD5D10a58F630594e571E766cc8E4",
    name: "Aqualoan aq DAI",
    decimals: 18,
    symbol: "aaqDAI",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/adai.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"
    }
  },
  {
    chainId: 56,
    address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
    name: "ChainLink Token",
    decimals: 18,
    symbol: "LINK",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/link.svg"
  },
  {
    chainId: 56,
    address: "0xDBF5Aa22233E108a1705697fA93bf0cC8a32AB38",
    name: "Aqualoan aq LINK",
    decimals: 18,
    symbol: "aaqLINK",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/alink.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD"
    }
  },
  {
    chainId: 56,
    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    name: "USD Coin",
    decimals: 18,
    symbol: "USDC",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/usdc.svg"
  },
  {
    chainId: 56,
    address: "0x7FAB4CB5785aB5191d5e5E2C0DD20e57E8070D28",
    name: "Aqualoan aq USDC",
    decimals: 18,
    symbol: "aaqUSDC",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/ausdc.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
    }
  },
  {
    chainId: 56,
    address: "0x3906cDdfb781f02B21f21BD81ed7Fd8DC37075E1",
    name: "Static Aave BNB Smart Chain USDC",
    decimals: 18,
    symbol: "stataBnbUSDC",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statausdc.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      underlyingAToken: "0x7FAB4CB5785aB5191d5e5E2C0DD20e57E8070D28"
    }
  },
  {
    chainId: 56,
    address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
    name: "Wrapped BTC",
    decimals: 8,
    symbol: "WBTC",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/wbtc.svg"
  },
  {
    chainId: 56,
    address: "0x302132C7C45FB8f990867E0d0e315B1AE4bd8b15",
    name: "Aqualoan aq WBTC",
    decimals: 8,
    symbol: "aaqWBTC",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/awbtc.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c"
    }
  },
  {
    chainId: 56,
    address: "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA",
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/weth.svg"
  },
  {
    chainId: 56,
    address: "0xD044004F1b56fE4221FDD0A901419aaC6E4f5483",
    name: "Aqualoan aq WETH",
    decimals: 18,
    symbol: "aaqWETH",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aweth.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA"
    }
  },
  {
    chainId: 56,
    address: "0x55d398326f99059fF775485246999027B3197955",
    name: "Tether USD",
    decimals: 18,
    symbol: "USDT",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/usdt.svg"
  },
  {
    chainId: 56,
    address: "0xE8a2F7a16Fe345A66E42fe0b5C3cf3d8EA001875",
    name: "Aqualoan aq USDT",
    decimals: 18,
    symbol: "aaqUSDT",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/ausdt.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x55d398326f99059fF775485246999027B3197955"
    }
  },
  {
    chainId: 56,
    address: "0x0471D185cc7Be61E154277cAB2396cD397663da6",
    name: "Static Aave BNB Smart Chain USDT",
    decimals: 18,
    symbol: "stataBnbUSDT",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statausdt.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x55d398326f99059fF775485246999027B3197955",
      underlyingAToken: "0xE8a2F7a16Fe345A66E42fe0b5C3cf3d8EA001875"
    }
  },
  {
    chainId: 56,
    address: "0xfb6115445Bff7b52FeB98650C87f44907E58f802",
    name: "Aave Token",
    decimals: 18,
    symbol: "AAVE",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aave.svg"
  },
  {
    chainId: 56,
    address: "0x5FCCaCE44c3e6F6CE16815B1b1D1c9399f0aFF1C",
    name: "Aqualoan aq AAVE",
    decimals: 18,
    symbol: "aaqAAVE",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aaave.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0xfb6115445Bff7b52FeB98650C87f44907E58f802"
    }
  },
  {
    chainId: 56,
    address: "0x12f31B73D812C6Bb0d735a218c086d44D5fe5f89",
    name: "EURA (previously agEUR)",
    decimals: 18,
    symbol: "EURA",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/eura.svg"
  },
  {
    chainId: 56,
    address: "0x98Bfbb2cC39b6F3A18cB3597EE89FC3Ed6B120B7",
    name: "Aqualoan Aq EURS",
    decimals: 18,
    symbol: "aAqEURS",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aeura.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x12f31B73D812C6Bb0d735a218c086d44D5fe5f89"
    }
  },
  {
    chainId: 56,
    address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    name: "Ethereum Token",
    decimals: 18,
    symbol: "ETH",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/eth.svg"
  },
  {
    chainId: 56,
    address: "0xCc52B2db0c021677C7C9A8C4bE0fC184481E1564",
    name: "Aqualoan Aq ETH",
    decimals: 18,
    symbol: "aAqETH",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aeth.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
    }
  },
  {
    chainId: 56,
    address: "0x52077433fB7053D747E2846aD0C18ff5015C368E",
    name: "Static Aave BNB Smart Chain ETH",
    decimals: 18,
    symbol: "stataBnbETH",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/stataeth.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      underlyingAToken: "0xCc52B2db0c021677C7C9A8C4bE0fC184481E1564"
    }
  },
  {
    chainId: 56,
    address: "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409",
    name: "First Digital USD",
    decimals: 18,
    symbol: "FDUSD",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/fdusd.svg"
  },
  {
    chainId: 56,
    address: "0x23dcb2647c58650f3C00F761c7D31eE98C8ed86E",
    name: "Aqualoan Aq FDUSD",
    decimals: 18,
    symbol: "aAqFDUSD",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/afdusd.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409"
    }
  },
  {
    chainId: 56,
    address: "0x4d074aAa0821073dA827f7bf6a02cF905b394ed0",
    name: "Static Aave BNB Smart Chain FDUSD",
    decimals: 18,
    symbol: "stataBnbFDUSD",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statafdusd.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409",
      underlyingAToken: "0x23dcb2647c58650f3C00F761c7D31eE98C8ed86E"
    }
  },
  {
    chainId: 56,
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    name: "Wrapped BNB",
    decimals: 18,
    symbol: "WBNB",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/wbnb.svg"
  },
  {
    chainId: 56,
    address: "0x2ED671186a86eEF55E7573466a10Da684bA1ca63",
    name: "Aqualoan Aq WBNB",
    decimals: 18,
    symbol: "aAqWBNB",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/awbnb.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
    }
  },
  {
    chainId: 56,
    address: "0x436baCb4C66583de4Cb16e13a1A0D9A3075DE425",
    name: "Static Aave BNB Smart Chain WBNB",
    decimals: 18,
    symbol: "stataBnbWBNB",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statawbnb.svg",
    extensions: {
      pool: "0x751107834436ad0d08a4c6D9Cc82031D5088999C",
      underlying: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      underlyingAToken: "0x2ED671186a86eEF55E7573466a10Da684bA1ca63"
    }
  },
  {
    chainId: 1,
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    name: "Dai Stablecoin",
    decimals: 18,
    symbol: "DAI",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/dai.svg"
  },
  {
    chainId: 1,
    address: "0xA31a5C3739C8ef1B2eEec5240B1F2b83AdEd8D3B",
    name: "Aqualoan Aq DAI",
    decimals: 18,
    symbol: "aAqDAI",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/adai.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
    }
  },
  {
    chainId: 1,
    address: "0x4972cD62882E837dB885367311cC75A62F47fdfF",
    name: "Static Aave Ethereum DAI",
    decimals: 18,
    symbol: "stataEthDAI",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statadai.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      underlyingAToken: "0xA31a5C3739C8ef1B2eEec5240B1F2b83AdEd8D3B"
    }
  },
  {
    chainId: 1,
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    name: "ChainLink Token",
    decimals: 18,
    symbol: "LINK",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/link.svg"
  },
  {
    chainId: 1,
    address: "0x5e2A65Ac70B5D38C53Cb40aB5494dD4920CeEc17",
    name: "Aqualoan Aq LINK",
    decimals: 18,
    symbol: "aAqLINK",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/alink.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0x514910771AF9Ca656af840dff83E8264EcF986CA"
    }
  },
  {
    chainId: 1,
    address: "0xaCD5D8e1897EE284AB0710f9bB693476b59d95F0",
    name: "Static Aave Ethereum LINK",
    decimals: 18,
    symbol: "stataEthLINK",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statalink.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      underlyingAToken: "0x5e2A65Ac70B5D38C53Cb40aB5494dD4920CeEc17"
    }
  },
  {
    chainId: 1,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    name: "USD Coin",
    decimals: 6,
    symbol: "USDC",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/usdc.svg"
  },
  {
    chainId: 1,
    address: "0xef281E47Ee59dE62Df36AE535DA54dE54ea316CC",
    name: "Aqualoan Aq USDC",
    decimals: 6,
    symbol: "aAqUSDC",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/ausdc.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    }
  },
  {
    chainId: 1,
    address: "0x15896439Ad225b9800328cDD8592638355FD5067",
    name: "Static Aave Ethereum USDC",
    decimals: 6,
    symbol: "stataEthUSDC",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statausdc.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      underlyingAToken: "0xef281E47Ee59dE62Df36AE535DA54dE54ea316CC"
    }
  },
  {
    chainId: 1,
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    name: "Wrapped BTC",
    decimals: 8,
    symbol: "WBTC",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/wbtc.svg"
  },
  {
    chainId: 1,
    address: "0x26a885cA661Fb364C76457C18B257888C7564ADA",
    name: "Aqualoan Aq WBTC",
    decimals: 8,
    symbol: "aAqWBTC",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/awbtc.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
    }
  },
  {
    chainId: 1,
    address: "0x19802f5CcF85545454E094601fAd4F8FA0B1F9d3",
    name: "Static Aave Ethereum WBTC",
    decimals: 8,
    symbol: "stataEthWBTC",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statawbtc.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      underlyingAToken: "0x26a885cA661Fb364C76457C18B257888C7564ADA"
    }
  },
  {
    chainId: 1,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    name: "Wrapped Ether",
    decimals: 18,
    symbol: "WETH",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/weth.svg"
  },
  {
    chainId: 1,
    address: "0x140F9fE366734855C3cEE1cf8BC0b18faf8Cc807",
    name: "Aqualoan Aq WETH",
    decimals: 18,
    symbol: "aAqWETH",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aweth.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    }
  },
  {
    chainId: 1,
    address: "0x622D44F60d85F36bf535958dee871AF76388BC7B",
    name: "Static Aave Ethereum WETH",
    decimals: 18,
    symbol: "stataEthWETH",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/stataweth.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      underlyingAToken: "0x140F9fE366734855C3cEE1cf8BC0b18faf8Cc807"
    }
  },
  {
    chainId: 1,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    name: "Tether USD",
    decimals: 6,
    symbol: "USDT",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/usdt.svg"
  },
  {
    chainId: 1,
    address: "0xcb5B804744283FA7b8060B5DcEaB2dDE106F43B9",
    name: "Aqualoan Aq USDT",
    decimals: 6,
    symbol: "aAqUSDT",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/ausdt.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    }
  },
  {
    chainId: 1,
    address: "0xc6CA48FDc1Cd2374688A800806f6A7D124929817",
    name: "Static Aave Ethereum USDT",
    decimals: 6,
    symbol: "stataEthUSDT",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/statausdt.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      underlyingAToken: "0xcb5B804744283FA7b8060B5DcEaB2dDE106F43B9"
    }
  },
  {
    chainId: 1,
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    name: "Aave Token",
    decimals: 18,
    symbol: "AAVE",
    tags: ["underlying"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aave.svg"
  },
  {
    chainId: 1,
    address: "0x41e59497F07B58eBc61F78bEb4c93bb9b7Fe5BA2",
    name: "Aqualoan Aq AAVE",
    decimals: 18,
    symbol: "aAqAAVE",
    tags: ["aTokenV3", "aaveV3"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/aaave.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
    }
  },
  {
    chainId: 1,
    address: "0xbBc7aEd919e3B26009a93850c9e8Ab10b4163879",
    name: "Static Aave Ethereum AAVE",
    decimals: 18,
    symbol: "stataEthAAVE",
    tags: ["aaveV3", "staticAT"],
    logoURI: "https://raw.githubusercontent.com/bgd-labs/web3-icons/main/icons/full/stataaave.svg",
    extensions: {
      pool: "0xB858409691F6223D61281b68891883527f0832db",
      underlying: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      underlyingAToken: "0x41e59497F07B58eBc61F78bEb4c93bb9b7Fe5BA2"
    }
  }
];
var version = { major: 3, minor: 0, patch: 63 };
var timestamp = "2024-12-03T12:23:00.175Z";
var tokenlist_default = {
  name,
  logoURI,
  keywords,
  tags,
  tokens,
  version,
  timestamp
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  keywords,
  logoURI,
  name,
  tags,
  timestamp,
  tokens,
  version
});
//# sourceMappingURL=tokenlist.js.map