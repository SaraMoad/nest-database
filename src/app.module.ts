import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';
import { MusicModule } from './music/music.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({}),
    ConfigModule.forRoot({cache: true}),
    MusicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
