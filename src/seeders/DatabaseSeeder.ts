import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MusicSeeder } from './MusicSeeder';

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    return this.call(em, [
      MusicSeeder,
    ])
  }

}
