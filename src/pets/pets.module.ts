import { Module } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { PetsResolver } from "./pets.resolver";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { Pet } from "./pet.entity";
import { OwnersModule } from "src/owners/owners.module";

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService, PetsResolver, OwnersModule],
})
export class PetsModule {}
