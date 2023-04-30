import { Id } from '@zettelyay/commons'

export interface ExtensionManagedData {
  readonly [extensionId: Id]: unknown
}
