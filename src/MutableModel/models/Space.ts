import { Id } from '@zettelooo/commons'
import { Base, Type } from '../types'
import { TokenGateRule } from '../types/TokenGateRule'
import { SpaceMember } from './SpaceMember'

export interface Space extends Base {
  readonly type: Type.Space
  readonly catalystUserId: Id
  readonly name: string
  readonly description: string
  readonly iconEmoji: string
  readonly color: string
  readonly avatarFileId: Id | null
  readonly acceptsGuests: boolean
  readonly tokenGateRules: readonly Space.SpaceTokenGateRule[]
}

export namespace Space {
  export interface SpaceTokenGateRule {
    readonly rule: TokenGateRule
    readonly role: SpaceMember.Role
  }
}
