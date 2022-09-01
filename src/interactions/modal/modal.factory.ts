import { ModalSubmitInteraction } from 'discord.js';
import modalHub from './modal.hub';

export class ModalFactory {
  async run(interaction: ModalSubmitInteraction) {
    modalHub
      .find((modal) => modal.getCustomId() === interaction.customId)
      ?.run(interaction);
  }
}
