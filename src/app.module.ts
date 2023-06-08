import { ApolloDriver } from "@nestjs/apollo";
import { ApolloDriverConfig } from "@nestjs/apollo/dist/interfaces";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { PetsModule } from "./pets/pets.module";
import { OwnersModule } from "./owners/owners.module";

@Module({
  imports: [
    PetsModule,
    OwnersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "schema.gql"),
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: ":memory:",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
