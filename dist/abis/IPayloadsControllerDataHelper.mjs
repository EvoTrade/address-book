// src/ts/abis/IPayloadsControllerDataHelper.ts
var IPayloadsControllerDataHelper_ABI = [
  {
    type: "function",
    name: "getExecutorConfigs",
    inputs: [
      {
        name: "payloadsController",
        type: "address",
        internalType: "contract IPayloadsController"
      },
      {
        name: "accessLevels",
        type: "uint8[]",
        internalType: "enum PayloadsControllerUtils.AccessControl[]"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IPayloadsControllerDataHelper.ExecutorConfig[]",
        components: [
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "config",
            type: "tuple",
            internalType: "struct IPayloadsControllerCore.ExecutorConfig",
            components: [
              {
                name: "executor",
                type: "address",
                internalType: "address"
              },
              {
                name: "delay",
                type: "uint40",
                internalType: "uint40"
              }
            ]
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPayloadsData",
    inputs: [
      {
        name: "payloadsController",
        type: "address",
        internalType: "contract IPayloadsController"
      },
      {
        name: "payloadsIds",
        type: "uint40[]",
        internalType: "uint40[]"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IPayloadsControllerDataHelper.Payload[]",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "data",
            type: "tuple",
            internalType: "struct IPayloadsControllerCore.Payload",
            components: [
              {
                name: "creator",
                type: "address",
                internalType: "address"
              },
              {
                name: "maximumAccessLevelRequired",
                type: "uint8",
                internalType: "enum PayloadsControllerUtils.AccessControl"
              },
              {
                name: "state",
                type: "uint8",
                internalType: "enum IPayloadsControllerCore.PayloadState"
              },
              {
                name: "createdAt",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "queuedAt",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "executedAt",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "cancelledAt",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "expirationTime",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "delay",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "gracePeriod",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "actions",
                type: "tuple[]",
                internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
                components: [
                  {
                    name: "target",
                    type: "address",
                    internalType: "address"
                  },
                  {
                    name: "withDelegateCall",
                    type: "bool",
                    internalType: "bool"
                  },
                  {
                    name: "accessLevel",
                    type: "uint8",
                    internalType: "enum PayloadsControllerUtils.AccessControl"
                  },
                  {
                    name: "value",
                    type: "uint256",
                    internalType: "uint256"
                  },
                  {
                    name: "signature",
                    type: "string",
                    internalType: "string"
                  },
                  {
                    name: "callData",
                    type: "bytes",
                    internalType: "bytes"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    stateMutability: "view"
  }
];
export {
  IPayloadsControllerDataHelper_ABI
};
//# sourceMappingURL=IPayloadsControllerDataHelper.mjs.map