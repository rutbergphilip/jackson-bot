import { CreateAssignmentEntity } from './../persistence/entities/panels/create-assignment.entity';
import { CreateAssignmentMenu } from '../interactions/menu/misc/create-assignment.menu';
import { CreateAssignmentPanelEmbedBuilder } from '../builders/embeds/create-assignment-panel.embed';
import { Channels } from '../constants/channels.enum';
import {
  APIActionRowComponent,
  APIMessageActionRowComponent,
  Client,
  Message,
  TextChannel,
} from 'discord.js';
import { GlobalRepository } from '../persistence/repositories/global.repository';

export class Setup {
  private static repository = new GlobalRepository();
  private static message: Message;

  static async applicationsPanelSetup(client: Client) {
    const createAssignmentPanel = (await this.repository.getByName(
      'createAssignmentPanel'
    )) as CreateAssignmentEntity;

    try {
      const channel =
        <TextChannel>client.channels.cache.get(Channels.CREATE_ASSIGNMENTS) ||
        <TextChannel>await client.channels.fetch(Channels.CREATE_ASSIGNMENTS);

      const message = createAssignmentPanel?.messageId
        ? channel.messages.cache.get(createAssignmentPanel.messageId) ||
          (await channel.messages
            .fetch(createAssignmentPanel.messageId)
            .catch(() => null))
        : null;

      this.message = !message
        ? await channel.send({
            embeds: [new CreateAssignmentPanelEmbedBuilder().build()],
            components: [
              new CreateAssignmentMenu().build() as unknown as APIActionRowComponent<APIMessageActionRowComponent>,
            ],
          })
        : await message.edit({
            embeds: [new CreateAssignmentPanelEmbedBuilder().build()],
            components: [
              new CreateAssignmentMenu().build() as unknown as APIActionRowComponent<APIMessageActionRowComponent>,
            ],
          });

      return createAssignmentPanel
        ? await this.repository.updatePanel({
            ...createAssignmentPanel,
            ...{ messageId: this.message.id },
          })
        : await this.repository.insertPanel({
            name: 'createAssignmentPanel',
            messageId: this.message.id,
          });
    } catch (error) {
      console.error(error);
    }
  }
}
