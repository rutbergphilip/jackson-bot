import { ButtonInteraction } from 'discord.js';
import buttonHub from './button.hub';

export class ButtonFactory {
  async run(interaction: ButtonInteraction) {
    buttonHub
      .find((button) => button.getCustomId() === interaction.customId)
      ?.run(interaction);
  }
}
