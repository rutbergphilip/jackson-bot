import { SelectMenuInteraction } from 'discord.js';
import { CreateAssignmentModal } from '../../../../builders/modal/create-assignment-modal.builder';
import { AssignmentChoices } from '../../../../constants/assignments.enum';
import { formatWord } from '../../../../utils/format-word.utils';

export class AssignmentChoice {
  async run(interaction: SelectMenuInteraction) {
    const [value] = interaction.values;
    const [, choice] = value.split('-');
    return await new CreateAssignmentModal().build({
      interaction,
      inputId: choice,
      modalId: choice,
      title: `${formatWord(choice as AssignmentChoices)}-uppgift`,
    });
  }

  getValueName(): string {
    return 'assignment';
  }
}
