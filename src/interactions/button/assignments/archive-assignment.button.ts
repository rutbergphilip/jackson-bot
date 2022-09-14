import { ButtonInteraction, EmbedBuilder } from 'discord.js';
import { Categories } from '../../../constants/channels.enum';
import { Colors } from '../../../constants/colors.enum';
import { IButtonInteraction } from '../../../interfaces/button.interface';

export class ArchiveAssignmentButton implements IButtonInteraction {
  async run(interaction: ButtonInteraction) {
    await interaction.deferReply({ ephemeral: true });
    await interaction.guild?.channels.cache.get(interaction.channelId)?.edit({
      parent: Categories.ARCHIVED_ASSIGNMENTS,
      permissionOverwrites: [
        
      ]
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
