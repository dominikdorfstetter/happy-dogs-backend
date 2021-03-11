import { BaseEntityService } from '@app/base/base-service.interface';
import { Observable, of } from 'rxjs';

export class BaseEntityServiceMock<T> implements BaseEntityService<T> {

  public create(entity: any): Observable<string> {
    return of('');
  }

  public delete(uuid: string): Observable<number> {
    return of(0);
  }

  public get(uuid: string): Observable<T> {
    return of({} as T);
  }

  public getAll(): Observable<T[]> {
    return of([] as T[]);
  }

  public update(entity: any): Observable<T> {
    return of({} as T);
  }

}
