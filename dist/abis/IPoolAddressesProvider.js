"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/abis/IPoolAddressesProvider.ts
var IPoolAddressesProvider_exports = {};
__export(IPoolAddressesProvider_exports, {
  IPoolAddressesProvider_ABI: () => IPoolAddressesProvider_ABI
});
module.exports = __toCommonJS(IPoolAddressesProvider_exports);
var IPoolAddressesProvider_ABI = [
  {
    type: "function",
    name: "getACLAdmin",
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
    name: "getACLManager",
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
    name: "getAddress",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        internalType: "bytes32"
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
    name: "getMarketId",
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
    name: "getPool",
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
    name: "getPoolConfigurator",
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
    name: "getPoolDataProvider",
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
    name: "getPriceOracle",
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
    name: "getPriceOracleSentinel",
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
    name: "setACLAdmin",
    inputs: [
      {
        name: "newAclAdmin",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setACLManager",
    inputs: [
      {
        name: "newAclManager",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setAddress",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "newAddress",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setAddressAsProxy",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "newImplementationAddress",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setMarketId",
    inputs: [
      {
        name: "newMarketId",
        type: "string",
        internalType: "string"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPoolConfiguratorImpl",
    inputs: [
      {
        name: "newPoolConfiguratorImpl",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPoolDataProvider",
    inputs: [
      {
        name: "newDataProvider",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPoolImpl",
    inputs: [
      {
        name: "newPoolImpl",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPriceOracle",
    inputs: [
      {
        name: "newPriceOracle",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPriceOracleSentinel",
    inputs: [
      {
        name: "newPriceOracleSentinel",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "ACLAdminUpdated",
    inputs: [
      {
        name: "oldAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ACLManagerUpdated",
    inputs: [
      {
        name: "oldAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "AddressSet",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "oldAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "AddressSetAsProxy",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "proxyAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "oldImplementationAddress",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "newImplementationAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "MarketIdSet",
    inputs: [
      {
        name: "oldMarketId",
        type: "string",
        indexed: true,
        internalType: "string"
      },
      {
        name: "newMarketId",
        type: "string",
        indexed: true,
        internalType: "string"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PoolConfiguratorUpdated",
    inputs: [
      {
        name: "oldAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PoolDataProviderUpdated",
    inputs: [
      {
        name: "oldAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PoolUpdated",
    inputs: [
      {
        name: "oldAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PriceOracleSentinelUpdated",
    inputs: [
      {
        name: "oldAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PriceOracleUpdated",
    inputs: [
      {
        name: "oldAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProxyCreated",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "proxyAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "implementationAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IPoolAddressesProvider_ABI
});
//# sourceMappingURL=IPoolAddressesProvider.js.map