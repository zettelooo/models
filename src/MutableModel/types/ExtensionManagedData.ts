import { Id } from '@zettelooo/commons'

export interface ExtensionManagedData {
  readonly [extensionId: Id]: unknown
}
