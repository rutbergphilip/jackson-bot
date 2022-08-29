import {
  ActivityType,
  Client,
  ClientUser,
  GatewayIntentBits,
} from 'discord.js';
import { InteractionFactory } from './interactions/interaction.factory';
import { Setup } from './start/setup.start';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class Main {
  private readonly client: Client;
  private user: ClientUser;

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
      this.user.setActivity('Loading...');

      await Setup.applicationsPanelSetup(this.client);

      this.user.setActivity('Jacksons uppgifter', {
        type: ActivityType.Watching,
      });
      console.log(`Ready! Running on account ${this.user.tag}`);
    });

    this.client.on('interactionCreate', async (interaction) => {
      await new InteractionFactory().run(interaction);
    });

    this.client.login(process.env.TOKEN).catch((error) => {
      console.error('Shit went wrong:', error);
    });
  }
}

(async () => {
  await new Main().run();
})();
