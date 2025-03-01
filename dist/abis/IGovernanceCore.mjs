// src/ts/abis/IGovernanceCore.ts
var IGovernanceCore_ABI = [
  {
    type: "function",
    name: "ACHIEVABLE_VOTING_PARTICIPATION",
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
    name: "CANCELLATION_FEE_COLLECTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "COOLDOWN_PERIOD",
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
    name: "MIN_VOTING_DURATION",
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
    name: "NAME",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PRECISION_DIVIDER",
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
    name: "PROPOSAL_EXPIRATION_TIME",
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
    name: "VOTING_TOKENS_CAP",
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
    name: "activateVoting",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "addVotingPortals",
    inputs: [
      {
        name: "votingPortals",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "cancelProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createProposal",
    inputs: [
      {
        name: "payloads",
        type: "tuple[]",
        internalType: "struct PayloadsControllerUtils.Payload[]",
        components: [
          {
            name: "chain",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "payloadsController",
            type: "address",
            internalType: "address"
          },
          {
            name: "payloadId",
            type: "uint40",
            internalType: "uint40"
          }
        ]
      },
      {
        name: "votingPortal",
        type: "address",
        internalType: "address"
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "executeProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getCancellationFee",
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
    name: "getPowerStrategy",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IGovernancePowerStrategy"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IGovernanceCore.Proposal",
        components: [
          {
            name: "state",
            type: "uint8",
            internalType: "enum IGovernanceCore.State"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "creationTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingActivationTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "queuingTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "cancelTimestamp",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "creator",
            type: "address",
            internalType: "address"
          },
          {
            name: "votingPortal",
            type: "address",
            internalType: "address"
          },
          {
            name: "snapshotBlockHash",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "ipfsHash",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "forVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "againstVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "cancellationFee",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "payloads",
            type: "tuple[]",
            internalType: "struct PayloadsControllerUtils.Payload[]",
            components: [
              {
                name: "chain",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "accessLevel",
                type: "uint8",
                internalType: "enum PayloadsControllerUtils.AccessControl"
              },
              {
                name: "payloadsController",
                type: "address",
                internalType: "address"
              },
              {
                name: "payloadId",
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
    name: "getProposalState",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IGovernanceCore.State"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalsCount",
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
    name: "getRepresentativeByChain",
    inputs: [
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getRepresentedVotersByChain",
    inputs: [
      {
        name: "representative",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
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
    type: "function",
    name: "getVotingConfig",
    inputs: [
      {
        name: "accessLevel",
        type: "uint8",
        internalType: "enum PayloadsControllerUtils.AccessControl"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IGovernanceCore.VotingConfig",
        components: [
          {
            name: "coolDownBeforeVotingStart",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "yesThreshold",
            type: "uint56",
            internalType: "uint56"
          },
          {
            name: "yesNoDifferential",
            type: "uint56",
            internalType: "uint56"
          },
          {
            name: "minPropositionPower",
            type: "uint56",
            internalType: "uint56"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingPortalsCount",
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
    name: "isVotingPortalApproved",
    inputs: [
      {
        name: "votingPortal",
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
    name: "queueProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "forVotes",
        type: "uint128",
        internalType: "uint128"
      },
      {
        name: "againstVotes",
        type: "uint128",
        internalType: "uint128"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "redeemCancellationFee",
    inputs: [
      {
        name: "proposalIds",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "removeVotingPortals",
    inputs: [
      {
        name: "votingPortals",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rescueVotingPortal",
    inputs: [
      {
        name: "votingPortal",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPowerStrategy",
    inputs: [
      {
        name: "newPowerStrategy",
        type: "address",
        internalType: "contract IGovernancePowerStrategy"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setVotingConfigs",
    inputs: [
      {
        name: "votingConfigs",
        type: "tuple[]",
        internalType: "struct IGovernanceCore.SetVotingConfigInput[]",
        components: [
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "coolDownBeforeVotingStart",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "yesThreshold",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "yesNoDifferential",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "minPropositionPower",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateCancellationFee",
    inputs: [
      {
        name: "cancellationFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateRepresentativesForChain",
    inputs: [
      {
        name: "representatives",
        type: "tuple[]",
        internalType: "struct IGovernanceCore.RepresentativeInput[]",
        components: [
          {
            name: "representative",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "CancellationFeeRedeemed",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "cancellationFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "success",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "CancellationFeeUpdated",
    inputs: [
      {
        name: "cancellationFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadSent",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      },
      {
        name: "payloadsController",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "payloadNumberOnProposal",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "numberOfPayloadsOnProposal",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PowerStrategyUpdated",
    inputs: [
      {
        name: "newPowerStrategy",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalCanceled",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalCreated",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "accessLevel",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalExecuted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalFailed",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "votesFor",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      },
      {
        name: "votesAgainst",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalQueued",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "votesFor",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      },
      {
        name: "votesAgainst",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RepresentativeUpdated",
    inputs: [
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "representative",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteForwarded",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "votingAssetsWithSlot",
        type: "address[]",
        indexed: false,
        internalType: "address[]"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingActivated",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "snapshotBlockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingConfigUpdated",
    inputs: [
      {
        name: "accessLevel",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "coolDownBeforeVotingStart",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "yesThreshold",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "yesNoDifferential",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "minPropositionPower",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingPortalUpdated",
    inputs: [
      {
        name: "votingPortal",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "approved",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  }
];
export {
  IGovernanceCore_ABI
};
//# sourceMappingURL=IGovernanceCore.mjs.map