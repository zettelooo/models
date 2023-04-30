import { Id } from '@zettelyay/commons'
import { Base, Type } from '../types'
import { PageMember } from './PageMember'

export interface SpaceMember extends Base {
  readonly type: Type.SpaceMember
  readonly catalystUserId: Id
  readonly spaceId: Id
  readonly userId: Id
  readonly role: SpaceMember.Role
  readonly defaultPageMemberRole: PageMember.Role | null
  readonly spaceSequence: string
}

export namespace SpaceMember {
  export enum Role {
    Owner = 'OWNER',
    Admin = 'ADMIN',
    Viewer = 'VIEWER',
    Guest = 'GUEST',
  }
}
