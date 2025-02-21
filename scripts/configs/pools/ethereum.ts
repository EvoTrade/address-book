import {ChainId} from '@bgd-labs/rpc-env';
import {PoolConfig} from '../types';

export const sepoliaProtoV3: PoolConfig = {
  name: 'Sepolia',
  chainId: ChainId.sepolia,
  POOL_ADDRESSES_PROVIDER: '0xb15f57A3fc61c56CFDBBda904E8366A9244387ae',
  additionalAddresses: {
    FAUCET: '0xBE40EBB3d2F424443A3D299466f014e62aDfc58F',
    UI_INCENTIVE_DATA_PROVIDER: '0xFF73A10D4E3bc679ee1434Ab6C9a0E18f978Ac79',
    UI_POOL_DATA_PROVIDER: '0x4bf099cfa6e081707b287B5F97a4982995d16f5d',
    WALLET_BALANCE_PROVIDER: '0x3d02cc698eF5AcE5aA191d93C3BCa459e9268C7e',
    WETH_GATEWAY: '0xfc6E0407a6eBaf1C74E617BDE3b8B764E58c5ac3',
  },
};

export const mainnetProtoV3Pool: PoolConfig = {
  name: 'Ethereum',
  chainId: ChainId.mainnet,
  POOL_ADDRESSES_PROVIDER: '0xF78064812cf5cb4F77aCdB3C887D9275d9c38d9d',
  additionalAddresses: {
    CAPS_PLUS_RISK_STEWARD: '0x82dcCF206Ae2Ab46E2099e663F70DeE77caE7778',
    RISK_STEWARD: '0x7C7143f4bE189928A6a98D8686c5e84c893c59c7',
    FREEZING_STEWARD: '0x2eE68ACb6A1319de1b49DC139894644E424fefD6',
    DEBT_SWAP_ADAPTER: '0x1728B83a862c99aFf02DD412b3058C2028E69c03',
    CONFIG_ENGINE: '0x616f6E1cB7620860973051FeF7000c22154cb8fa',
    POOL_ADDRESSES_PROVIDER_REGISTRY: '0xBb1527b03AE4C90960169855081c5973497c360C',
    STATIC_A_TOKEN_FACTORY: '0xB90c2D7fA877FAdb125922dE8EEa255220E9b075',
    REPAY_WITH_COLLATERAL_ADAPTER: '0x1728B83a862c99aFf02DD412b3058C2028E69c03',
    SWAP_COLLATERAL_ADAPTER: '0x806DCe7290f12e69628C693eBcaFAba0E7B99eE9',
    UI_INCENTIVE_DATA_PROVIDER: '0xC60e4898F744411b1Cc87167190DA492e383a35a',
    UI_POOL_DATA_PROVIDER: '0xE3365D6f330F8465A768aABEe4c2863265D1D862',
    WALLET_BALANCE_PROVIDER: '0xBE40EBB3d2F424443A3D299466f014e62aDfc58F',
    WETH_GATEWAY: '0xFE4A6bc973071e057273De208897119EC50d18Ca',
    WITHDRAW_SWAP_ADAPTER: '0xE11791f536F02458877EE9A32893e26708A87Ed6',
    DELEGATION_AWARE_A_TOKEN_IMPL_REV_1: '0x9Cfb5013f812F86747cA6e293017dFA63cC5b761',
    // UI_GHO_DATA_PROVIDER: '0x379c1EDD1A41218bdbFf960a9d5AD2818Bf61aE8',
    // SAVINGS_DAI_TOKEN_WRAPPER: '0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034',
  },
};
