// src/ts/abis/IStaticATokenLM.ts
var IStaticATokenLM_ABI = [
  {
    type: "function",
    name: "aToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "claimRewards",
    inputs: [
      {
        name: "receiver",
        type: "address",
        internalType: "address"
      },
      {
        name: "rewards",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRewardsOnBehalf",
    inputs: [
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address"
      },
      {
        name: "rewards",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRewardsToSelf",
    inputs: [
      {
        name: "rewards",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "collectAndUpdateRewards",
    inputs: [
      {
        name: "reward",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "deposit",
    inputs: [
      {
        name: "assets",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      },
      {
        name: "depositToAave",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getClaimableRewards",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getCurrentRewardsIndex",
    inputs: [
      {
        name: "reward",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTotalClaimableRewards",
    inputs: [
      {
        name: "reward",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getUnclaimedRewards",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "aToken",
        type: "address",
        internalType: "address"
      },
      {
        name: "staticATokenName",
        type: "string",
        internalType: "string"
      },
      {
        name: "staticATokenSymbol",
        type: "string",
        internalType: "string"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "isRegisteredRewardToken",
    inputs: [
      {
        name: "reward",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "metaDeposit",
    inputs: [
      {
        name: "depositor",
        type: "address",
        internalType: "address"
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address"
      },
      {
        name: "assets",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      },
      {
        name: "depositToAave",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "permit",
        type: "tuple",
        internalType: "struct IStaticATokenLM.PermitParams",
        components: [
          {
            name: "owner",
            type: "address",
            internalType: "address"
          },
          {
            name: "spender",
            type: "address",
            internalType: "address"
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "v",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "r",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "s",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      },
      {
        name: "sigParams",
        type: "tuple",
        internalType: "struct IStaticATokenLM.SignatureParams",
        components: [
          {
            name: "v",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "r",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "s",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "metaWithdraw",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address"
      },
      {
        name: "shares",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "assets",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "withdrawFromAave",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "sigParams",
        type: "tuple",
        internalType: "struct IStaticATokenLM.SignatureParams",
        components: [
          {
            name: "v",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "r",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "s",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rate",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "redeem",
    inputs: [
      {
        name: "shares",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address"
      },
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "withdrawFromAave",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "refreshRewardTokens",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rewardTokens",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "aToken",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "staticATokenName",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "staticATokenSymbol",
        type: "string",
        indexed: false,
        internalType: "string"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RewardTokenRegistered",
    inputs: [
      {
        name: "reward",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "startIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];
export {
  IStaticATokenLM_ABI
};
//# sourceMappingURL=IStaticATokenLM.mjs.map