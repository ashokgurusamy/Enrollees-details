import { EnrolleeDetail } from './enrollee-table.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeTableService {

  constructor(private http: HttpClient) { }

  /**Get Enrollees list from API */
  getEnrollees() {
    return this.http.get(environment.apiURL + 'enrollees');
  }

  /**Update the selected Enrollee detail */
  updateEnrolleeDetail(value: EnrolleeDetail) {
    return this.http.put(`${environment.apiURL}enrollees/${value.id}`, value)
  }
}
