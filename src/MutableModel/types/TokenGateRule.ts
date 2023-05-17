import { Id } from '@zettelooo/commons'

export interface TokenGateRule {
  readonly id: Id
  readonly name: string
  readonly description: string
  readonly network: TokenGateRule.Network
  readonly gate: TokenGateRule.Gate
}

export namespace TokenGateRule {
  export enum Network {
    EthereumMainNetwork = 'ETHEREUM_MAIN_NETWORK',
  }

  export type Gate<T extends Gate.Type = Gate.Type> = {
    [Gate.Type.Value]: {
      readonly type: Gate.Type.Value
      readonly minimumValue: string
    }
    [Gate.Type.ERC20]: {
      readonly type: Gate.Type.ERC20
      readonly contractAddress: string
      readonly minimumValue: string | null
    }
    [Gate.Type.ERC721]: {
      readonly type: Gate.Type.ERC721
      readonly contractAddress: string
      readonly tokenId: Id | null
      readonly minimumValue: string | null
    }
    [Gate.Type.ERC1155]: {
      readonly type: Gate.Type.ERC1155
      readonly contractAddress: string
      readonly tokenId: Id | null
      readonly minimumValue: string | null
    }
  }[T]

  export namespace Gate {
    export enum Type {
      Value = 'VALUE',
      ERC20 = 'ERC_20',
      ERC721 = 'ERC_721',
      ERC1155 = 'ERC_1155',
    }
  }
}
