import {
  IsEmail,
  IsNotEmpty, IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from '@app/api/contacts/dtos/create-address.dto';

export class CreateContactDto {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsPhoneNumber()
    @IsOptional()
    phone: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;
}
