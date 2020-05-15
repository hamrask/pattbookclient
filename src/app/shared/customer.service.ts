import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  // add transaction
  addCustomer(body: Customer) {
    const url = environment.customerUrl;
    return this.http.post(url, body);
  }
  // get all transactions
  getCustomers() {
    const url = environment.customerUrl;
    return this.http.get<any>(url);
  }
}
