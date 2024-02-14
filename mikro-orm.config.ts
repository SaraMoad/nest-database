import { LoadStrategy, defineConfig } from "@mikro-orm/core";
import { Migrator } from "@mikro-orm/migrations";
import { MySqlDriver } from "@mikro-orm/mysql";
import { SeedManager } from "@mikro-orm/seeder";
import * as dotenv from 'dotenv';

dotenv.config()

export default defineConfig({
    driver: MySqlDriver,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    debug: true,
    entitiesTs: ['src/**/*.entity.ts'],
    entities: ['dist/**/*.entity.js'],
    loadStrategy: LoadStrategy.JOINED,
    migrations: {
        pathTs: 'src/migrations',
        path: 'dist/migrations',
    },
    seeder: {
        pathTs: 'src/seeders',
        path: 'dist/seeders',
    },
    extensions: [Migrator, SeedManager],
})