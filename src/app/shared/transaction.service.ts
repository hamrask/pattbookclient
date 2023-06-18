import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filter } from '../models/filter';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  // add transaction
  addTransaction(body: Transaction) {
    const url = environment.transactionUrl;
    return this.http.post(url, body);
  }
  // get all transactions
  getTransactions() {
    const url = environment.transactionUrl;
    return this.http.get<any>(url);
  }
  // filter transactions
  filterTransactions(body: Filter) {
    const url = environment.transactionUrl + '/filter';
    return this.http.post(url, body);
  }
}
