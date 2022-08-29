import { SelectMenuInteraction } from 'discord.js';
import menuHub from './menu.hub';

export class SelectMenuFactory {
  async run(interaction: SelectMenuInteraction) {
    menuHub
      .find((menu) => menu.getCustomId() === interaction.customId)
      ?.run(interaction);
  }
}
