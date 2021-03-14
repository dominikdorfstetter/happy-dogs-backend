import { Observable } from 'rxjs';

export interface BaseEntityService<T> {
    findAll(): Observable<T[]>;
    findOne(uuid: string): Observable<T | undefined>;
    update(entity: T): Observable<T>;
    create(payload: any): Observable<T>;
    delete(uuid: string): Observable<any>;
}
