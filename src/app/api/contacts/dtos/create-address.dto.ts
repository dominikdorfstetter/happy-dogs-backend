import { IsAlphanumeric, IsISO31661Alpha2, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class CreateAddressDto {

    @IsNotEmpty()
    @IsAlphanumeric()
    zipCode: string;

    @IsNotEmpty()
    @IsString()
    street: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    houseNumber: string;

    @IsOptional()
    @IsAlphanumeric()
    floor: string;

    @IsOptional()
    @IsAlphanumeric()
    door: string;

    @IsNotEmpty()
    @IsISO31661Alpha2()
    countryCode: string;

}
