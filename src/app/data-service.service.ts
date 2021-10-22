import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url = "https://localhost:5001/api/Query/query/all/enumerable";

  constructor(private http: HttpClient) {
  }

  getData(): Observable<DataList[]> {
    return this.http.get(this.url).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable)
    )
  }

  getDataWithPromise(): Promise<DataList> {
    return this.http.get(this.url).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: any) {
    return res;
  }

  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}

export interface DataList {
  dimensionId: string;
  key: string;
  value: number;
  fund: string;
  strategy: string;
  desk: string;
}
