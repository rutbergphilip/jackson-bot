import { SelectMenuInteraction } from 'discord.js';
import { ISelectMenuInteraction } from '../../../interfaces/select-menu.interface';
import { ChoiceFactory } from './choices/choice.factory';
import { CreateAssignmentRow } from '../../../builders/rows/create-assignment.row';

export class CreateAssignmentMenu implements ISelectMenuInteraction {
  async run(interaction: SelectMenuInteraction): Promise<unknown> {
    return new ChoiceFactory().run(interaction);
  }

  build() {
    return new CreateAssignmentRow().build();
  }

  getCustomId() {
    return 'create-assignment-menu';
  }
}
