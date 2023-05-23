import { Id } from '@zettelooo/commons'
import { Base, Type } from '../types'
import { PageMember } from './PageMember'
import { ExtensionData } from '../types/ExtensionData'

export interface Page extends Base {
  readonly type: Type.Page
  readonly ownerUserId: Id
  readonly name: string
  readonly description: string
  readonly spaceId: Id | null
  readonly iconEmoji: string
  readonly color: string
  readonly avatarFileId: Id | null
  readonly view: Page.View
  readonly public: boolean
  readonly maximumAutomaticallyAssignedRole: PageMember.Role | null
  readonly extensionIds: readonly Id[]
  readonly extensionData: ExtensionData
}

export namespace Page {
  export enum View {
    List = 'LIST',
    Gallery = 'GALLERY',
  }
}
