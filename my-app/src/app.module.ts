import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [AppController],
    imports: [UserModule,
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: 'Diep1312#',
              database: 'nestjs',
              entities: [User],
              synchronize: true,
            }),
            AuthModule,
          ], // add child module in root module
})
export class AppModule {

}