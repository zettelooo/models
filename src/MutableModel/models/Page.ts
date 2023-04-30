import { Id } from '@zettelyay/commons'
import { Base, Type } from '../types'
import { ExtensionManagedData } from '../types/ExtensionManagedData'
import { TokenGateRule } from '../types/TokenGateRule'
import { PageMember } from './PageMember'

export interface Page extends Base {
  readonly type: Type.Page
  readonly catalystUserId: Id
  readonly name: string
  readonly description: string
  readonly ownerId: Id
  readonly spaceId: Id | null
  readonly pageType: Page.Type
  readonly iconEmoji: string
  readonly color: string
  readonly avatarFileId: Id | null
  readonly view: Page.View
  readonly shareOnWebMode: Page.ShareOnWebMode | null
  readonly maximumAutomaticallyAssignedRole: PageMember.Role | null
  readonly tokenGateRules: readonly Page.PageTokenGateRule[]
  readonly extensionIds: readonly Id[]
  readonly extensionManagedData: ExtensionManagedData
}

export namespace Page {
  export enum Type {
    Personal = 'PERSONAL',
    Chat = 'CHAT',
    Feedback = 'FEEDBACK',
    AllCards = 'ALL_CARDS',
  }

  export type View<M extends View.Mode = View.Mode> = {
    [View.Mode.List]: View.List
    [View.Mode.Gallery]: View.Gallery
    [View.Mode.ExtensionManaged]: View.ExtensionManaged
  }[M]

  export namespace View {
    export enum Mode {
      List = 'LIST',
      Gallery = 'GALLERY',
      ExtensionManaged = 'EXTENSION_MANAGED',
    }

    export interface Base {
      readonly mode: Mode
    }

    export interface List extends Base {
      readonly mode: Mode.List
    }
    export interface Gallery extends Base {
      readonly mode: Mode.Gallery
    }
    export interface ExtensionManaged extends Base {
      readonly mode: Mode.ExtensionManaged
      readonly extensionId: Id
    }
  }

  export enum ShareOnWebMode {
    CanView = 'CAN_VIEW',
    CanComment = 'CAN_COMMENT',
    CanEdit = 'CAN_EDIT',
  }

  export interface PageTokenGateRule {
    readonly rule: TokenGateRule
    readonly role: PageMember.Role
  }
}
