import { ButtonInteraction } from 'discord.js';

export interface IButtonInteraction {
  run(interaction: ButtonInteraction): Promise<unknown>;
  getCustomId(): string;
}
