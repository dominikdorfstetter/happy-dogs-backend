import { BaseEntityService } from '@app/api/base/base-service.interface';
import { Observable, of } from 'rxjs';

export class BaseEntityServiceMock<T> implements BaseEntityService<T> {

  public create(entity: T): Observable<T> {
    return of(entity);
  }

  public delete(): Observable<number> {
    return of(0);
  }

  public findOne(uuid = ''): Observable<T> {
    return of({
      uuid
    } as unknown as T);
  }

  public findAll(): Observable<T[]> {
    return of([] as T[]);
  }

  public update(entity: T): Observable<T> {
    return of(entity);
  }

}
