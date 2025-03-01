// src/ts/abis/IWrappedTokenGatewayV3.ts
var IWrappedTokenGatewayV3_ABI = [
  {
    type: "function",
    name: "borrowETH",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "depositETH",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "repayETH",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "withdrawETH",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "withdrawETHWithPermit",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "permitV",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "permitR",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "permitS",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  }
];
export {
  IWrappedTokenGatewayV3_ABI
};
//# sourceMappingURL=IWrappedTokenGatewayV3.mjs.map