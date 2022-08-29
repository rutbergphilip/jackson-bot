import { HyperLinks } from '../../constants/hyperlinks.enum';
import { Colors } from '../../constants/colors.enum';
import { EmbedBuilder, APIEmbed } from 'discord.js';

export class CreateAssignmentPanelEmbedBuilder {
  build(): APIEmbed {
    return new EmbedBuilder()
      .setColor(Colors.PRIMARY_BLUE)
      .setTitle('Information')
      .setDescription(
        `
[W3Schools](${HyperLinks.W3SCHOOLS}) - Grundläggande information för HTML, CSS, Javascript m.m.

Välj nedan vad du behöver hjälp med.
    `
      )
      .toJSON();
  }
}
