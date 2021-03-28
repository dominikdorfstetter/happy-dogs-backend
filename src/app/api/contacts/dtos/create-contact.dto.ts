import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString, IsUrl
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from '@app/api/contacts/dtos/create-address.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * @author: Dominik Dorfstetter
 * DTO to create a new contact
 */
export class CreateContactDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsEmail()
    email: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsPhoneNumber()
    phone: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    website: string;

    @ApiPropertyOptional()
    @IsOptional()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;

}
