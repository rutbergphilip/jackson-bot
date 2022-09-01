import { ModalSubmitInteraction } from 'discord.js';

export interface IModalSubmitInteraction {
  run(interaction: ModalSubmitInteraction): Promise<unknown>;
  getCustomId(): string;
}
