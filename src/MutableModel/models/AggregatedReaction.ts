import { Base, Type } from '../types'
import { Reaction } from './Reaction'

export interface AggregatedReaction extends Base {
  readonly type: Type.AggregatedReaction
  readonly target: Reaction.Target
  readonly details: readonly AggregatedReaction.Detail[]
}

export namespace AggregatedReaction {
  export interface Detail {
    readonly symbol: Reaction.Symbol
    readonly count: number
  }
}
