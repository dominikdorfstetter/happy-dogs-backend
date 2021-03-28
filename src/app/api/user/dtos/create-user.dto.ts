import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

/**
 * @author: Dominik Dorfstetter
 * DTO to create a new user / first-login / register
 */
export class CreateUserDto {

    @ApiProperty()
    @IsUUID('all')
    @IsNotEmpty()
    readonly uuid: string;

}
