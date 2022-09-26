import {
  ActionRowBuilder,
  APIActionRowComponent,
  APIMessageActionRowComponent,
  ButtonBuilder,
  ButtonStyle,
} from 'discord.js';
import { Emojis } from '../../constants/emojis.enum';

export class CreateArchiveAssignmentRow {
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

export class CreateUnArchiveAssignmentRow {
  build() {
    return new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId('un-archive-assignment')
        .setLabel('Av-Arkivera')
        .setStyle(ButtonStyle.Secondary)
        .setEmoji(Emojis.UN_ARCHIVE),
    ]) as unknown as APIActionRowComponent<APIMessageActionRowComponent>;
  }
}
