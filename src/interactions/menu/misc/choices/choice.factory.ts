import { SelectMenuInteraction } from 'discord.js';
import choiceHub from './choice.hub';

export class ChoiceFactory {
  async run(interaction: SelectMenuInteraction) {
    const [value] = interaction.values;
    choiceHub
      .find((choice) => choice.getValueName() === value)
      ?.run(interaction);
  }
}
