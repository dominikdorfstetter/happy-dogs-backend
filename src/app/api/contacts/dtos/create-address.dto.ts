import { IsAlphanumeric, IsISO31661Alpha2, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * @author: Dominik Dorfstetter
 * DTO to create a new address
 */
export class CreateAddressDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
    readonly zipCode: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly street: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
    readonly houseNumber: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsISO31661Alpha2()
    readonly countryCode: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsAlphanumeric()
    readonly floor: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsAlphanumeric()
    readonly door: string;

}
