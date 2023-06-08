import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { CreatePetInput } from "./dto/create-pet.input";
import { Pet } from "./pet.entity";

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}

  createPet(createPetInput: CreatePetInput): Observable<Pet> {
    const newPet: Pet = this.petRepository.create(createPetInput);
    return from(this.petRepository.save(newPet));
  }

  findPet(id: number): Observable<Pet> {
    return from(this.petRepository.findOneOrFail({ where: { id } }));
  }

  findAll(): Observable<Pet[]> {
    return from(this.petRepository.find());
  }
}
