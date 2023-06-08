import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Pet } from "src/pets/pet.entity";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: "Owner's Id" })
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  pets: Pet[];
}
