import { ChannelType, EmbedBuilder, ModalSubmitInteraction } from 'discord.js';
import { CreateArchiveAssignmentRow } from '../../../builders/rows/manage-assignment.row';
import { AssignmentChoices } from '../../../constants/assignments.enum';
import { Categories } from '../../../constants/channels.enum';
import { Colors } from '../../../constants/colors.enum';
import { Users } from '../../../constants/users.enum';
import { IModalSubmitInteraction } from '../../../interfaces/modal-submit.interface';
import { getCorrespondingImage } from '../../../utils/extract.utils';
import { formatAssignmentWord } from '../../../utils/string.utils';

export class CreateAssignmentModal implements IModalSubmitInteraction {
  async run(interaction: ModalSubmitInteraction) {
    try {
      await interaction.deferReply({ ephemeral: true });
      const { fields } = interaction;
      const { value, customId } = <{ value: string; customId: string }>(
        fields.fields.first()
      );

      const assignmentChannel = await interaction.guild?.channels.create({
        name: `${customId}-uppgift`,
        type: ChannelType.GuildText,
        parent: Categories.ASSIGNMENTS,
        reason: 'New assignment',
      });

      (
        await assignmentChannel?.send({
          content: `<@${Users.Philip}>`,
          embeds: [
            new EmbedBuilder()
              .setTitle(
                `${formatAssignmentWord(customId as AssignmentChoices)} uppgift`
              )
              .setDescription(value)
              .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL() ?? undefined,
              })
              .setColor(Colors.PRIMARY_BLUE)
              .setThumbnail(
                getCorrespondingImage(customId as AssignmentChoices) || null
              )
              .setTimestamp()
              .toJSON(),
          ],
          components: [new CreateArchiveAssignmentRow().build()],
        })
      )?.pin();

      interaction.editReply({
        embeds: [
          new EmbedBuilder()
            .setColor(Colors.PRIMARY_GREEN)
            .setTitle('Ny uppgift skapad')
            .setDescription(
              `Beskriv ditt problem ytterligare [här](${assignmentChannel?.url})`
            )
            .toJSON(),
        ],
      });
    } catch (error) {
      console.error(error);
      interaction.editReply({
        embeds: [
          new EmbedBuilder()
            .setColor('Red')
            .setTitle('Error')
            .setDescription(
              'Something went wrong... Try again later or contact my creator'
            )
            .toJSON(),
        ],
      });
    }
  }

  getCustomId() {
    return 'assignment';
  }
}
