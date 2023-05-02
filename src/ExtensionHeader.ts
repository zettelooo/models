import { Id, ReadonlyRecord } from '@zettelyay/commons'
import { ExtensionScope } from './ExtensionScope'

export interface ExtensionHeader {
  readonly id: Id
  readonly version: string | null
  readonly author: {
    readonly id: Id
    readonly name: string
    readonly email: string
  }
  readonly name: string
  readonly description: string
  readonly avatar: {
    readonly file?: string
    readonly dataUrl?: string
  }
  readonly documentationMarkdownFile?: string
  readonly scopes: readonly ExtensionScope[]
  readonly officialDependencies: ReadonlyRecord<string, string>
  readonly extensionDependencies?: readonly Id[]
}
