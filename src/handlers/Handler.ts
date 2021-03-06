import { Client, Message } from 'discord.js'
import messageHelper from '../helpers/messageHelper.js'

export default abstract class Handler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(client: Client, msg: Message): boolean {
    return messageHelper.ignoreSelfMessage(client, msg)
  }
  abstract async process(client: Client, msg: Message): Promise<boolean>
}
