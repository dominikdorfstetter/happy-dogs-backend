import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface BaseEntityService<T> {
    findAll(): Observable<T[]>;
    findOne(uuid: string): Observable<T | undefined>;
    update(entity: any): Observable<UpdateResult>;
    create(payload: any): Observable<T>;
    delete(uuid: string): Observable<DeleteResult>;
}
