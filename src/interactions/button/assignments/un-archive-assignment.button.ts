import { Users } from './../../../constants/users.enum';
import { CreateArchiveAssignmentRow } from '../../../builders/rows/manage-assignment.row';
import { ButtonInteraction, ChannelType, EmbedBuilder } from 'discord.js';
import { Categories } from '../../../constants/channels.enum';
import { Colors } from '../../../constants/colors.enum';
import { IButtonInteraction } from '../../../interfaces/button.interface';

export class UnArchiveAssignmentButton implements IButtonInteraction {
  async run(interaction: ButtonInteraction) {
    await interaction.deferReply({ ephemeral: true });
    const channel =
      interaction.guild?.channels.cache.get(interaction.channelId) ||
      (await interaction.guild.channels.fetch(interaction.channelId));

    await channel?.edit({
      parent: Categories.ASSIGNMENTS,
      permissionOverwrites: [],
    });

    const { embeds } = interaction.message;
    await interaction.message.edit({
      embeds: [...embeds],
      components: [new CreateArchiveAssignmentRow().build()],
    });

    interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setTitle(interaction.message.embeds[0].title)
          .setDescription('Uppgiften har tagits upp från arkiv')
          .setColor(Colors.PRIMARY_GREEN)
          .toJSON(),
      ],
    });

    channel.type === ChannelType.GuildText &&
      channel.send(`<@${Users.Philip}>`);
  }

  getCustomId() {
    return 'un-archive-assignment';
  }
}
