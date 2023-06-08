import { Module } from "@nestjs/common";
import { OwnersService } from "./owners.service";
import { OwnersResolver } from "./owners.resolver";
import { Owner } from "./entities/owner.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PetsModule } from "src/pets/pets.module";

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnersResolver, OwnersService, PetsModule],
})
export class OwnersModule {}
