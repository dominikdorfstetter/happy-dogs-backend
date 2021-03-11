import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsUUID("all")
    @IsNotEmpty()
    public uuid: string;
}
