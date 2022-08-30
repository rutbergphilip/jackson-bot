import { SelectMenuInteraction } from 'discord.js';
import choiceHub from './choice.hub';

export class ChoiceFactory {
  async run(interaction: SelectMenuInteraction) {
    const [value] = interaction.values;
    const [assignment] = value.split('-');
    choiceHub
      .find((choice) => choice.getValueName() === assignment)
      ?.run(interaction);
  }
}
