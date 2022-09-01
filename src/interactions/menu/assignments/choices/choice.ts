import { SelectMenuInteraction } from 'discord.js';
import { CreateAssignmentModal } from '../../../../builders/modal/create-assignment-modal.builder';
import { AssignmentChoices } from '../../../../constants/assignments.enum';
import { formatAssignmentWord } from '../../../../utils/string.utils';

export class AssignmentChoice {
  async run(interaction: SelectMenuInteraction) {
    const [value] = interaction.values;
    const [assignment, choice] = value.split('-');
    return await new CreateAssignmentModal().build({
      interaction,
      inputId: choice,
      modalId: assignment,
      title: `${formatAssignmentWord(choice as AssignmentChoices)}-uppgift`,
    });
  }

  getValueName(): string {
    return 'assignment';
  }
}
