import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MusicFactory } from './factories/MusicFactory';

export class MusicSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    new MusicFactory(em).make(20);
  }

}
