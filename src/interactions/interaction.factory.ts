import {
  ComponentType,
  Interaction,
  InteractionType,
  SelectMenuInteraction,
  ModalSubmitInteraction,
  ButtonInteraction,
} from 'discord.js';
import { ButtonFactory } from './button/button.factory';
import { SelectMenuFactory } from './menu/menu.factory';
import { ModalFactory } from './modal/modal.factory';

export class InteractionFactory {
  async run(interaction: Interaction) {
    switch (interaction.type) {
      case InteractionType.MessageComponent:
        switch (interaction.componentType) {
          case ComponentType.Button:
            new ButtonFactory().run(interaction as ButtonInteraction);
            break;
          case ComponentType.SelectMenu:
            new SelectMenuFactory().run(interaction as SelectMenuInteraction);
            break;
        }
        break;
      case InteractionType.ModalSubmit:
        new ModalFactory().run(interaction as ModalSubmitInteraction);
        break;
    }
  }
}
