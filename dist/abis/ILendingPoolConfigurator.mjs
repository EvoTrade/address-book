// src/ts/abis/ILendingPoolConfigurator.ts
var ILendingPoolConfigurator_ABI = [
  {
    type: "function",
    name: "activateReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "batchInitReserve",
    inputs: [
      {
        name: "input",
        type: "tuple[]",
        internalType: "struct ConfiguratorInputTypes.InitReserveInput[]",
        components: [
          {
            name: "aTokenImpl",
            type: "address",
            internalType: "address"
          },
          {
            name: "stableDebtTokenImpl",
            type: "address",
            internalType: "address"
          },
          {
            name: "variableDebtTokenImpl",
            type: "address",
            internalType: "address"
          },
          {
            name: "underlyingAssetDecimals",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "interestRateStrategyAddress",
            type: "address",
            internalType: "address"
          },
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "treasury",
            type: "address",
            internalType: "address"
          },
          {
            name: "incentivesController",
            type: "address",
            internalType: "address"
          },
          {
            name: "underlyingAssetName",
            type: "string",
            internalType: "string"
          },
          {
            name: "aTokenName",
            type: "string",
            internalType: "string"
          },
          {
            name: "aTokenSymbol",
            type: "string",
            internalType: "string"
          },
          {
            name: "variableDebtTokenName",
            type: "string",
            internalType: "string"
          },
          {
            name: "variableDebtTokenSymbol",
            type: "string",
            internalType: "string"
          },
          {
            name: "stableDebtTokenName",
            type: "string",
            internalType: "string"
          },
          {
            name: "stableDebtTokenSymbol",
            type: "string",
            internalType: "string"
          },
          {
            name: "params",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "configureReserveAsCollateral",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "ltv",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "liquidationThreshold",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "liquidationBonus",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "deactivateReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "disableBorrowingOnReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "disableReserveStableRate",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "enableBorrowingOnReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "stableBorrowRateEnabled",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "enableReserveStableRate",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "freezeReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "initReserve",
    inputs: [
      {
        name: "aTokenImpl",
        type: "address",
        internalType: "address"
      },
      {
        name: "stableDebtTokenImpl",
        type: "address",
        internalType: "address"
      },
      {
        name: "variableDebtTokenImpl",
        type: "address",
        internalType: "address"
      },
      {
        name: "underlyingAssetDecimals",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "interestRateStrategyAddress",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPoolPause",
    inputs: [
      {
        name: "val",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setReserveFactor",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "reserveFactor",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setReserveInterestRateStrategyAddress",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "rateStrategyAddress",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "unfreezeReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateAToken",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "implementation",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateStableDebtToken",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "implementation",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateVariableDebtToken",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "implementation",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "ATokenUpgraded",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "proxy",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "BorrowingDisabledOnReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "BorrowingEnabledOnReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "stableRateEnabled",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "CollateralConfigurationChanged",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "ltv",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "liquidationThreshold",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "liquidationBonus",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveActivated",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveDeactivated",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveDecimalsChanged",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveFactorChanged",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "factor",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveFrozen",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveInitialized",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "aToken",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "stableDebtToken",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "variableDebtToken",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "interestRateStrategyAddress",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveInterestRateStrategyChanged",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "strategy",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveUnfrozen",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "StableDebtTokenUpgraded",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "proxy",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "StableRateDisabledOnReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "StableRateEnabledOnReserve",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VariableDebtTokenUpgraded",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "proxy",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];
export {
  ILendingPoolConfigurator_ABI
};
//# sourceMappingURL=ILendingPoolConfigurator.mjs.map