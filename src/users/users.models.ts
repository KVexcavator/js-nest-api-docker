import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs{
  email: string,
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: 1 , description: 'uniq ID'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number
  @ApiProperty({example: 'example@email.com' , description: 'uniq Email'})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email: string
  @ApiProperty({example: '12345678' , description: 'password'})
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string
  @ApiProperty({example: 'true' , description: 'baned or not'})
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  banned: boolean
  @ApiProperty({example: "breacher" , description: 'cause of ban'})
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  banReason: string
}
