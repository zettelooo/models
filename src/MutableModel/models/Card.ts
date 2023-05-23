import { Id } from '@zettelooo/commons'
import { Base, Type } from '../types'
import { Block } from '../types/Block'
import { ExtensionData } from '../types/ExtensionData'

export interface Card extends Base {
  readonly type: Type.Card
  readonly ownerUserId: Id
  readonly editorUserId: Id | null
  readonly color: string
  readonly pageId: Id
  readonly sequence: string
  readonly blocks: readonly Block[]
  readonly extensionData: ExtensionData
}
