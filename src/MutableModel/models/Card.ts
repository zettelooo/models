import { Id } from '@zettelyay/commons'
import { Base, Type } from '../types'
import { Block } from '../types/Block'
import { ExtensionManagedData } from '../types/ExtensionManagedData'

export interface Card extends Base {
  readonly type: Type.Card
  readonly catalystUserId: Id
  readonly ownerId: Id
  readonly cardType: Card.Type
  readonly color: string
  readonly pageId: Id
  readonly sequence: string
  readonly blocks: readonly Block[]
  readonly extensionManagedData: ExtensionManagedData
}

export namespace Card {
  export enum Type {
    Regular = 'REGULAR',
  }
}
