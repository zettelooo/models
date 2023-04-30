import { Id } from '@zettelyay/commons'
import { Base, Type } from '../types'

export interface PageMember extends Base {
  readonly type: Type.PageMember
  readonly catalystUserId: Id
  readonly pageId: Id
  readonly userId: Id
  readonly role: PageMember.Role | null
}

export namespace PageMember {
  export enum Role {
    Owner = 'OWNER',
    Admin = 'ADMIN',
    Editor = 'EDITOR',
    Viewer = 'VIEWER',
  }
}
