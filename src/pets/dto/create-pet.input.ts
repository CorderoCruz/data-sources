import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ description: "Owner's id referencing this pet" })
  ownerId: number;
}
