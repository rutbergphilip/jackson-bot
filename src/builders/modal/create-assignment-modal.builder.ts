import {
  ActionRowBuilder,
  ModalBuilder,
  SelectMenuInteraction,
  TextInputBuilder,
  TextInputStyle,
} from 'discord.js';

export class CreateAssignmentModal {
  async build({
    interaction,
    title,
    modalId,
    inputLabel,
    inputId,
    inputPlaceholder,
    inputMinLength,
  }: {
    interaction: SelectMenuInteraction;
    title: string;
    modalId: string;
    inputLabel?: string;
    inputId: string;
    inputPlaceholder?: string;
    inputMinLength?: number;
  }): Promise<void> {
    const modal = new ModalBuilder()
      .setTitle(title)
      .setCustomId(modalId)
      .addComponents(<ActionRowBuilder<TextInputBuilder>[]>[
        new ActionRowBuilder().addComponents([
          new TextInputBuilder()
            .setLabel(inputLabel ?? 'Uppgift')
            .setCustomId(inputId)
            .setPlaceholder(
              inputPlaceholder ?? 'Beskriv din uppgift kortfattat'
            )
            .setRequired(true)
            .setMinLength(inputMinLength ?? 1)
            .setStyle(TextInputStyle.Short),
        ]),
      ]);

    return await interaction.showModal(modal);
  }
}
