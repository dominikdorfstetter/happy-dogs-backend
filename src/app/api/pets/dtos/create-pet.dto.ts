/**
 * @author: Dominik Dorfstetter
 * DTO to create a new user / first-login / register
 */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  IsAlphanumeric,
  IsArray,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength, ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { List } from 'immutable';
import { CreateContactDto } from '@app/api/contacts/dtos/create-contact.dto';
import { CreateDocumentDto } from '@app/api/documents/dtos/create-document.dto';
import { IsNonPrimitiveArray } from '@app/utils/isNotPrimitiveArray.validator';

/**
 * @author: Dominik Dorfstetter
 * DTO to create a new pet
 */
export class CreatePetDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    readonly name: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsAlphanumeric()
    @MinLength(6)
    @MaxLength(20)
    readonly animaldataRegNumber: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDate()
    readonly birthDate: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @Type(() => CreateContactDto)
    readonly vet: CreateContactDto;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNonPrimitiveArray()
    @ArrayMaxSize(5)
    @ValidateNested({ each: true })
    @Type(() => CreateDocumentDto)
    readonly documents: List<CreateDocumentDto>;

}
