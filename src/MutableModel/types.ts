import { Id, Timestamp } from '@zettelooo/commons'
import { Account } from './models/Account'
import { Badge } from './models/Badge'
import { Card } from './models/Card'
import { Comment } from './models/Comment'
import { Page } from './models/Page'
import { PageMember } from './models/PageMember'
import { Space } from './models/Space'
import { SpaceMember } from './models/SpaceMember'
import { User } from './models/User'

export enum Type {
  Account = 'ACCOUNT',
  User = 'USER',
  Space = 'SPACE',
  SpaceMember = 'SPACE_MEMBER',
  Page = 'PAGE',
  PageMember = 'PAGE_MEMBER',
  Card = 'CARD',
  Comment = 'COMMENT',
  Badge = 'BADGE',
}

export type Model<T extends Type = Type> = {
  [Type.Account]: Account
  [Type.User]: User
  [Type.Space]: Space
  [Type.SpaceMember]: SpaceMember
  [Type.Page]: Page
  [Type.PageMember]: PageMember
  [Type.Card]: Card
  [Type.Comment]: Comment
  [Type.Badge]: Badge
}[T]

export type Entity<T extends Type = Type> = Metadata & Model<T>

export namespace Entity {
  export type Account = Entity<Type.Account>
  export type User = Entity<Type.User>
  export type Space = Entity<Type.Space>
  export type SpaceMember = Entity<Type.SpaceMember>
  export type Page = Entity<Type.Page>
  export type PageMember = Entity<Type.PageMember>
  export type Card = Entity<Type.Card>
  export type Comment = Entity<Type.Comment>
  export type Badge = Entity<Type.Badge>
}

export type Updates<T extends Type = Type> = Base & Partial<Model<T>>

export interface Base {
  readonly type: Type
  readonly id: Id
}

export interface Metadata {
  readonly version: number
  readonly createdAt: Timestamp
  readonly updatedAt: Timestamp
  readonly isDeleted: boolean
}
