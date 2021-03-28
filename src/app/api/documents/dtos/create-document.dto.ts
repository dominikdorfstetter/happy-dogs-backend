import { FileType } from '@app/api/documents/entities/document.entity';
import {
  IsBase64,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * @author: Dominik Dorfstetter
 * DTO to create a new document
 */
export class CreateDocumentDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    readonly title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly fileName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(40)
    readonly fileSize: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(FileType)
    readonly fileType: FileType;

    @ApiProperty()
    @IsNotEmpty()
    @IsBase64()
    readonly data: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID('all')
    readonly petId: string;

}
