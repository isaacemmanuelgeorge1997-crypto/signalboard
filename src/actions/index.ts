import type { ActionHandler } from 'deepspace/worker'
import type { Env } from '../../worker'

import { documentsFindInviteeAction } from './documents-find-invitee'

export const actions: Record<string, ActionHandler<Env>> = {
  'documents-find-invitee': documentsFindInviteeAction,}
