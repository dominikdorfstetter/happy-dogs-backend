import { Type } from '@nestjs/common';
import { DocumentEntity } from '@app/api/documents/entities/document.entity';

export const entities: Type<any>[] = [
  DocumentEntity,
];
