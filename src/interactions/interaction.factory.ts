import {
  ComponentType,
  Interaction,
  InteractionType,
  SelectMenuInteraction,
} from 'discord.js';
import { SelectMenuFactory } from './menu/menu.factory';

export class InteractionFactory {
  async run(interaction: Interaction) {
    switch (interaction.type) {
      case InteractionType.MessageComponent:
        switch (interaction.componentType) {
          case ComponentType.Button:
            break;
          case ComponentType.SelectMenu:
            new SelectMenuFactory().run(interaction as SelectMenuInteraction);
            break;
        }
        break;
    }
  }
}
