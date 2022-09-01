import {
  ActivityType,
  Client,
  GatewayIntentBits,
  MessageType,
} from 'discord.js';
import { InteractionFactory } from './interactions/interaction.factory';
import { Setup } from './start/setup.start';
require('dotenv').config();

class Main {
  private readonly client: Client;

  constructor() {
    this.client = new Client({
      intents: Array.from(Object.values(GatewayIntentBits)) as number[],
      rest: {
        offset: 0,
      },
    });
  }

  async run(): Promise<void> {
    this.client.on('ready', async () => {
      this.client.user?.setActivity('Loading...');

      await Setup.assignmentsPanelSetup(this.client);

      this.client.user?.setActivity('Jacksons uppgifter', {
        type: ActivityType.Watching,
      });
      console.log(`Ready! Running on account ${this.client.user?.tag}`);
    });

    this.client.on('interactionCreate', async (interaction) => {
      await new InteractionFactory().run(interaction);
    });

    this.client.on('messageCreate', (message) => {
      if (message.type === MessageType.ChannelPinnedMessage) {
        message.delete();
      }
    });

    this.client.login(process.env.TOKEN).catch((error) => {
      console.error('Shit went wrong:', error);
    });
  }
}

(async () => {
  await new Main().run();
})();
