import { Factory } from '@mikro-orm/seeder';
import { faker } from '@faker-js/faker/locale/en_AU';
import { Music } from "../../music/entities/music.entity"

export class MusicFactory extends Factory<Music> {
  model = Music;

  protected definition(): Partial<Music> {
    return {
        title: faker.music.songName(),
        artist: faker.person.fullName(),
        genre: faker.music.genre(),
        length: faker.number.int({ min: 1, max: 5 }),
    };
  }
}