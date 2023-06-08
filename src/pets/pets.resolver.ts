import { Args, ID, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { CreatePetInput } from "./dto/create-pet.input";
import { Pet } from "./pet.entity";
import { PetsService } from "./pets.service";

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petService: PetsService) {}

  @Query(() => [Pet])
  pets(): Observable<Pet[]> {
    return this.petService.findAll();
  }

  @Query(() => Pet)
  findPet(@Args("id", { type: () => ID }) id: number): Observable<Pet> {
    return this.petService.findPet(id);
  }

  @Mutation(() => Pet)
  createPet(
    @Args("createPetInput") createPetInput: CreatePetInput
  ): Observable<Pet> {
    return this.petService.createPet(createPetInput);
  }
}
