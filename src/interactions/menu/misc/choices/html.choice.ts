import { SelectMenuInteraction } from 'discord.js';
import { CreateAssignmentModal } from '../../../../builders/modal/create-assignment-modal.builder';

export class HTMLChoice {
  async run(interaction: SelectMenuInteraction) {
    return await new CreateAssignmentModal().build({
      interaction,
      inputId: 'html',
      modalId: 'html',
      title: 'HTML-uppgift',
    });
  }

  getValueName(): string {
    return 'html';
  }
}
