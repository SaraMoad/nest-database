import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: 'songs' })
    
export class Music {

    @PrimaryKey()
    id: number;

    @Property()
    title: string;
    
    @Property()
    artist: string;

    @Property()
    genre: string;

    @Property()
    length: number;

    
}