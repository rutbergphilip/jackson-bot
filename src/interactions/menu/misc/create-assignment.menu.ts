import { Emojis } from '../../../constants/emojis.enum';
import {
  ActionRowBuilder,
  SelectMenuBuilder,
  SelectMenuInteraction,
} from 'discord.js';
import { ISelectMenuInteraction } from '../../../interfaces/select-menu.interface';
import { ChoiceFactory } from './choices/choice.factory';

export class CreateAssignmentMenu implements ISelectMenuInteraction {
  async run(interaction: SelectMenuInteraction): Promise<unknown> {
    return new ChoiceFactory().run(interaction);
  }

  build() {
    return new ActionRowBuilder()
      .addComponents([
        new SelectMenuBuilder()
          .setCustomId('create-assignment-menu')
          .setPlaceholder('Vad behöver du hjälp med?')
          .setMaxValues(1)
          .addOptions([
            {
              label: 'HTML',
              value: 'html',
              emoji: Emojis.HTML,
            },
            {
              label: 'CSS',
              value: 'css',
              emoji: Emojis.CSS,
            },
            {
              label: 'JavaScript',
              value: 'javascript',
              emoji: Emojis.JAVASCRIPT,
            },
            {
              label: 'TypeScript',
              value: 'typescript',
              emoji: Emojis.TYPESCRIPT,
            },
            {
              label: 'React',
              value: 'react',
              emoji: Emojis.REACT,
            },
            {
              label: 'Vue',
              value: 'vue',
              emoji: Emojis.VUE,
            },
            {
              label: 'Github',
              value: 'guthub',
              emoji: Emojis.GITHUB,
            },
          ]),
      ])
      .toJSON();
  }

  getCustomId() {
    return 'applications-menu';
  }
}
