import { Id, Timestamp } from '@zettelooo/commons'

export type Block<T extends Block.Type = Block.Type> = {
  [Block.Type.Paragraph]: Block.Paragraph
  [Block.Type.Header]: Block.Header
  [Block.Type.Quote]: Block.Quote
  [Block.Type.Code]: Block.Code
  [Block.Type.ListItem]: Block.ListItem
  [Block.Type.Task]: Block.Task
  [Block.Type.Attachment]: Block.Attachment
  // [Block.Type.ExtensionManaged]: Block.ExtensionManaged
}[T]

export namespace Block {
  export enum Type {
    Paragraph = 'PARAGRAPH',
    Header = 'HEADER',
    Quote = 'QUOTE',
    Code = 'CODE',
    ListItem = 'LIST_ITEM',
    Task = 'TASK',
    Attachment = 'ATTACHMENT',
    // ExtensionManaged = 'EXTENSION_MANAGED',
  }

  export interface Base {
    readonly type: Type
    readonly id: Id
    // readonly extensionManagedData: ExtensionManagedData | null
  }

  export interface Paragraph extends Base {
    readonly type: Type.Paragraph
    readonly styledText: StyledText
  }

  export interface Header extends Base {
    readonly type: Type.Header
    readonly styledText: StyledText
    readonly level: 1 | 2 | 3 | 4 | 5 | 6
  }

  export interface Quote extends Base {
    readonly type: Type.Quote
    readonly innerId: Id
    readonly styledText: StyledText
  }

  export interface Code extends Base {
    readonly type: Type.Code
    readonly text: string
    readonly programmingLanguage: string | null
    readonly caption: string | null
  }

  export interface ListItem extends Base {
    readonly type: Type.ListItem
    readonly innerId: Id
    readonly styledText: StyledText
    readonly ordered: boolean
  }

  export interface Task extends Base {
    readonly type: Type.Task
    readonly innerId: Id
    readonly styledText: StyledText
    readonly dueDate: Timestamp | null
    readonly isChecked: boolean
    readonly checkedByUserId: Id | null
    readonly checkedAt: Timestamp | null
  }

  export interface Attachment extends Base {
    readonly type: Type.Attachment
    readonly name: string | null
    readonly files: readonly Attachment.File[]
  }

  export namespace Attachment {
    export interface File {
      readonly id: Id
      readonly name: string
      readonly mimeType: string
      readonly size: number
    }
  }

  // export interface ExtensionManaged extends Base {
  //   readonly type: Type.ExtensionManaged
  //   readonly extensionId: string
  // }

  export interface StyledText {
    readonly text: string
    readonly styleGroups: readonly StyledText.StyleGroup[]
    readonly annotations: readonly StyledText.Annotation[]
  }

  export namespace StyledText {
    export interface StyleGroup {
      readonly from: number
      readonly to: number
      // readonly extensionManagedData: ExtensionManagedData | null
      readonly styles: readonly Style[]
    }

    export type Style<T extends Style.Type = Style.Type> = {
      [Style.Type.Strong]: Style.Strong
      [Style.Type.Emphasis]: Style.Emphasis
      [Style.Type.Code]: Style.Code
      [Style.Type.LineThrough]: Style.LineThrough
      [Style.Type.UnderLine]: Style.UnderLine
      // [Style.Type.ExtensionManaged]: Style.ExtensionManaged
    }[T]

    export namespace Style {
      export enum Type {
        Strong = 'STRONG',
        Emphasis = 'EMPHASIS',
        Code = 'CODE',
        LineThrough = 'LINE_THROUGH',
        UnderLine = 'UNDER_LINE',
        // ExtensionManaged = 'EXTENSION_MANAGED',
      }

      export interface Base {
        readonly type: Type
      }

      export interface Strong extends Base {
        readonly type: Type.Strong
      }

      export interface Emphasis extends Base {
        readonly type: Type.Emphasis
      }

      export interface Code extends Base {
        readonly type: Type.Code
      }

      export interface LineThrough extends Base {
        readonly type: Type.LineThrough
      }

      export interface UnderLine extends Base {
        readonly type: Type.UnderLine
      }

      // export interface ExtensionManaged extends Base {
      //   readonly type: Type.ExtensionManaged
      //   readonly extensionId: string
      // }
    }

    export type Annotation<T extends Annotation.Type = Annotation.Type> = {
      [Annotation.Type.HyperLink]: Annotation.HyperLink
      [Annotation.Type.PlainLink]: Annotation.PlainLink
      [Annotation.Type.ReferencedUser]: Annotation.ReferencedUser
      [Annotation.Type.ReferencedCard]: Annotation.ReferencedCard
      [Annotation.Type.ReferencedPage]: Annotation.ReferencedPage
      // [Annotation.Type.ExtensionManaged]: Annotation.ExtensionManaged
    }[T]

    export namespace Annotation {
      export enum Type {
        HyperLink = 'HYPER_LINK',
        PlainLink = 'PLAIN_LINK',
        ReferencedUser = 'REFERENCED_USER',
        ReferencedCard = 'REFERENCED_CARD',
        ReferencedPage = 'REFERENCED_PAGE',
        // ExtensionManaged = 'EXTENSION_MANAGED',
      }

      export interface Base {
        readonly type: Type
        readonly id: Id
        readonly from: number
        readonly to: number
        // readonly extensionManagedData?: ExtensionManagedData
      }

      export interface HyperLink extends Base {
        readonly type: Type.HyperLink
        readonly url: string
        readonly iconUrl?: string
      }

      export interface PlainLink extends Base {
        readonly type: Type.PlainLink
        readonly url: string
      }

      export interface ReferencedUser extends Base {
        readonly type: Type.ReferencedUser
        readonly referencedUserId: Id
      }

      export interface ReferencedCard extends Base {
        readonly type: Type.ReferencedCard
        readonly referencedCardId: Id
      }

      export interface ReferencedPage extends Base {
        readonly type: Type.ReferencedPage
        readonly referencedPageId: Id
      }

      // export interface ExtensionManaged extends Base {
      //   readonly type: Type.ExtensionManaged
      //   readonly extensionId: Id
      // }
    }
  }
}
