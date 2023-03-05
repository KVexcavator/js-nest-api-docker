import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.models';
import { User } from './users.models';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles])
  ]
})
export class UsersModule {}
