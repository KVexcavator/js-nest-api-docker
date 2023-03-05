import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
  @ApiProperty({example: 'example@email.com' , description: 'uniq Email'})
  readonly email: string
  @ApiProperty({example: '12345678' , description: 'password'})
  readonly password: string
}
