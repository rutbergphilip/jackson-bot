import {
  APIActionRowComponent,
  APIButtonComponent,
  APISelectMenuComponent,
  APITextInputComponent,
  SelectMenuInteraction,
} from 'discord.js';

export interface ISelectMenuInteraction {
  run(interaction: SelectMenuInteraction): Promise<unknown>;
  build(): APIActionRowComponent<
    APIButtonComponent | APISelectMenuComponent | APITextInputComponent
  >;
  getCustomId(): string;
}
