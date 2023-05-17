import { Id } from '@zettelooo/commons'
import { Base, Type } from '../types'

export interface Reaction extends Base {
  readonly type: Type.Reaction
  readonly userId: Id
  readonly target: Reaction.Target
  readonly symbols: readonly Reaction.Symbol[]
}

export namespace Reaction {
  export interface Target {
    readonly type: Target.Type
    readonly id: Id
  }

  export namespace Target {
    export enum Type {
      Card = 'CARD',
      Page = 'PAGE',
      Comment = 'COMMENT',
    }
  }

  export enum Symbol {
    Upvote = 'UPVOTE',
  }
}
