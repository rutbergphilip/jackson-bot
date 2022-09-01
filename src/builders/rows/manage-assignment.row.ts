import {
  ActionRowBuilder,
  APIActionRowComponent,
  APIMessageActionRowComponent,
  ButtonBuilder,
  ButtonStyle,
} from 'discord.js';
import { Emojis } from '../../constants/emojis.enum';

export class CreateManageAssignmentRow {
  build() {
    return new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId('archive-assignment')
        .setLabel('Arkivera')
        .setStyle(ButtonStyle.Secondary)
        .setEmoji(Emojis.ARCHIVE),
    ]) as unknown as APIActionRowComponent<APIMessageActionRowComponent>;
  }
}
