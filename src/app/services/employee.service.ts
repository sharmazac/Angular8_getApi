import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class EmployeeService {

  constructor( private httpClient:HttpClient) {  }
 

  getemployeeList(): Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }
}
