import { ActionRowBuilder, SelectMenuBuilder } from 'discord.js';
import { Emojis } from '../../constants/emojis.enum';

export class CreateAssignmentRow {
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
              value: 'assignment-html',
              emoji: Emojis.HTML,
            },
            {
              label: 'CSS',
              value: 'assignment-css',
              emoji: Emojis.CSS,
            },
            {
              label: 'JavaScript',
              value: 'assignment-javascript',
              emoji: Emojis.JAVASCRIPT,
            },
            {
              label: 'TypeScript',
              value: 'assignment-typescript',
              emoji: Emojis.TYPESCRIPT,
            },
            {
              label: 'React',
              value: 'assignment-react',
              emoji: Emojis.REACT,
            },
            {
              label: 'Vue',
              value: 'assignment-vue',
              emoji: Emojis.VUE,
            },
            {
              label: 'Github',
              value: 'assignment-github',
              emoji: Emojis.GITHUB,
            },
            {
              label: 'MongoDB',
              value: 'assignment-mongodb',
              emoji: Emojis.MONGODB,
            },
            {
              label: 'Firebase',
              value: 'assignment-firebase',
              emoji: Emojis.FIREBASE,
            },
            {
              label: 'DynamoDB',
              value: 'assignment-dynamodb',
              emoji: Emojis.DYNAMODB,
            },
            {
              label: 'MySQL',
              value: 'assignment-mysql',
              emoji: Emojis.MYSQL,
            },
            {
              label: 'PostgreSQL',
              value: 'assignment-postgresql',
              emoji: Emojis.POSTGRESQL,
            },
            {
              label: 'Docker',
              value: 'assignment-docker',
              emoji: Emojis.DOCKER,
            },
            {
              label: 'Kubernetes',
              value: 'assignment-kubernetes',
              emoji: Emojis.KUBERNETES,
            },
          ]),
      ])
      .toJSON();
  }
}
