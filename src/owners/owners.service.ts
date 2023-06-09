import { Injectable } from "@nestjs/common";
import { CreateOwnerInput } from "./dto/create-owner.input";

@Injectable()
export class OwnersService {
  create(createOwnerInput: CreateOwnerInput) {
    return "This action adds a new owner";
  }

  findAll() {
    return `This action returns all owners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
