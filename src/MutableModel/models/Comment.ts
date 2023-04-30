import { Id } from '@zettelyay/commons'
import { Base, Type } from '../types'
import { Block } from '../types/Block'

export interface Comment extends Base {
  readonly type: Type.Comment
  readonly userId: Id
  readonly target: Comment.Target
  readonly sequence: string
  readonly blocks: readonly Block[]
}

export namespace Comment {
  export type Target<T extends Target.Type = Target.Type> = {
    [Target.Type.Card]: {
      readonly type: Target.Type.Card
      readonly cardId: Id
    }
    [Target.Type.CardBlock]: {
      readonly type: Target.Type.CardBlock
      readonly cardId: Id
      readonly blockId: Id
    }
    [Target.Type.Comment]: {
      readonly type: Target.Type.Comment
      readonly commentId: Id
    }
  }[T]

  export namespace Target {
    export enum Type {
      Card = 'CARD',
      CardBlock = 'CARD_BLOCK',
      Comment = 'COMMENT',
    }
  }
}
