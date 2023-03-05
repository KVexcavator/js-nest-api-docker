import { UserRoles } from './user-roles.model';
import { User } from 'src/users/users.models';
import { Role } from './roles.models';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ]
})
export class RolesModule {}
