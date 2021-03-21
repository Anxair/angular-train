import {Injectable} from '@angular/core';
import {DataForm} from '../app/main/forms/first/first.component';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataService {


  dataStorage: Map<string, any> = new Map<string, any>();


  saveData(data: DataForm): Observable<DataForm> {
    this.dataStorage.set(data.email, JSON.stringify(data));
    return of(data).pipe(delay(3000));
  }

  getData(email: string): any {
    return this.dataStorage.get(email);
  }

}



