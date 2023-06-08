import { InputType, Int, Field } from "@nestjs/graphql";
import { Pet } from "src/pets/pet.entity";

@InputType()
export class CreateOwnerInput {
  @Field(() => Int, { description: "owner's id" })
  id: number;

  @Field({ description: "Owner's name" })
  name: string;

  @Field({ description: "Owner's pet(s)" })
  pet: Pet[];
}
