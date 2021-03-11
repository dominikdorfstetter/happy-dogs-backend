import {
    IsEmail,
    IsNotEmpty, IsObject,
    IsOptional,
    IsPhoneNumber,
    IsString, IsUrl
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from '@app/api/contacts/dtos/create-address.dto';

/**
 * @author: Dominik Dorfstetter
 * DTO to create a new contact
 */
export class CreateContactDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsPhoneNumber()
    @IsOptional()
    phone: string;

    @IsOptional()
    @IsUrl()
    website: string;

    @IsOptional()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;

}
