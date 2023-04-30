import { Id, ReadonlyRecord, Timestamp } from '@zettelyay/commons'
import { Base, Type } from '../types'

export interface Account extends Base {
  readonly type: Type.Account
  readonly name: string
  readonly userName: string
  readonly email: string
  readonly isEmailVerified: boolean
  readonly backgroundColor: string
  readonly avatarFileId: string | null
  readonly invisible: boolean
  readonly banned: boolean
  readonly lastActiveTimestamp: Timestamp
  readonly role: Account.Role
  readonly extensionIds: readonly Id[]
  readonly isOnboarded: boolean
  readonly subscription: Account.Subscription
  readonly usageStatus: Account.UsageStatus
  readonly walletAddress: string | null
  readonly pageTemplateUpvotes: ReadonlyRecord<Id, number> | undefined
}

export namespace Account {
  export enum Role {
    Admin = 'ADMIN',
    Guest = 'GUEST',
    User = 'USER',
    System = 'SYSTEM',
  }

  export interface Subscription {
    readonly plan: Subscription.Plan
    readonly isYearly: boolean
  }

  export namespace Subscription {
    export enum Plan {
      Free = 'FREE',
      Pro = 'PRO',
      Believer = 'BELIEVER',
    }
  }

  export interface UsageStatus {
    readonly createdCardsCount: number
    readonly createdCardsCountFreePlanMaximum: number // TODO: These kind of metadata-like information should be fetched from somewhere else, not as a part of the account entity
  }
}
