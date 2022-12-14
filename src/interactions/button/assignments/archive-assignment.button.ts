import { CreateUnArchiveAssignmentRow } from '../../../builders/rows/manage-assignment.row';
import { ButtonInteraction, EmbedBuilder } from 'discord.js';
import { Categories } from '../../../constants/channels.enum';
import { Colors } from '../../../constants/colors.enum';
import { IButtonInteraction } from '../../../interfaces/button.interface';

export class ArchiveAssignmentButton implements IButtonInteraction {
  async run(interaction: ButtonInteraction) {
    await interaction.deferReply({ ephemeral: true });
    const channel =
      interaction.guild?.channels.cache.get(interaction.channelId) ||
      (await interaction.guild.channels.fetch(interaction.channelId));

    await channel?.edit({
      parent: Categories.ARCHIVED_ASSIGNMENTS,
      permissionOverwrites: [],
    });

    const { embeds } = interaction.message;
    await interaction.message.edit({
      embeds: [...embeds],
      components: [new CreateUnArchiveAssignmentRow().build()],
    });

    interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setTitle(interaction.message.embeds[0].title)
          .setDescription('Uppgiften har arkiverats')
          .setColor(Colors.PRIMARY_GREEN)
          .toJSON(),
      ],
    });
  }

  getCustomId() {
    return 'archive-assignment';
  }
}
