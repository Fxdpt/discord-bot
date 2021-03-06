import { Client, Message, TextChannel } from 'discord.js'
import { parse, UrlWithStringQuery } from 'url'
import { extname } from 'path'

export default {
  /**
   * Function to add security and ignore self message sent by the bot
   * @param client The bot client
   * @param msg The message to react with
   */
  ignoreSelfMessage (client: Client, msg: Message): boolean {
    return (msg.author.id !== client.user.id)
  },
  /**
   * Check if a message is an url
   * @param msg The message to analyse
   */
  isUrl (msg: Message): boolean {
    const parsedUrl: UrlWithStringQuery = parse(msg.content)

    return (parsedUrl.protocol && parsedUrl.protocol.includes('http'))
  },
  /**
   * Check if the message is in the meme channel
   * @param msg The message to analyse
   */
  isMemeChannel (msg: Message): boolean {
    if (msg.channel.type === 'text') {
      const channel: TextChannel = msg.channel as TextChannel

      return channel.name.includes('memes')
    }
    return false
  },
  /**
   * Check if the argument is has a valid extension
   * @param msg The message to analyse
   */
  isValidImageFormat(url: string): boolean {
    const authorizedExtension = [
      '.jpg',
      '.jpeg',
      '.gif',
      '.png',
      '.bmp'
    ]
    const parsedUrl: UrlWithStringQuery = parse(url)

    return parsedUrl.pathname && authorizedExtension.includes(extname(parsedUrl.pathname))
  }
}
