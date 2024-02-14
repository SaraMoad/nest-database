import { Migration } from '@mikro-orm/migrations';

export class Migration20240214014416 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `songs` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `artist` varchar(255) not null, `genre` varchar(255) not null, `length` int not null) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `songs`;');
  }

}
