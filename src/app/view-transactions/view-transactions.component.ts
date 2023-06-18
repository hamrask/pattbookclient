import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../shared/transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../shared/customer.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss']
})
export class ViewTransactionsComponent implements OnInit {
transactions = [];
customersList = [];
filteredCustomerList: Observable<any[]>;
customerId = new FormControl('');
total;
  constructor(private service: TransactionService, private snack: MatSnackBar, private customer: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
    this.filteredCustomerList = this.customerId.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    if (typeof(value) === 'string') {
      const filterValue = value.toLowerCase();
      if (Option.name) {
        return this.customersList.filter(option => option.name.toLowerCase().includes(filterValue));
      }
    }
  }
  searchTransaction() {
    if (typeof this.customerId.value == 'object') {
      this.getTransactions(this.customerId.value._id);
    }
  }
  getTransactions(customerId) {
    const body = {
      customerId
    };
    this.service.filterTransactions(body).subscribe(Response => {
      this.transactions = (Response as any).list;
      this.total = (Response as any).total;
    }, error => {
      console.log(error);
      this.snack.open('Something went wrong', '', {duration: 600});
    });
  }
  getCustomers() {
    this.customer.getCustomers();
    this.customer.customerList.subscribe(Response => {
      this.customersList = Response;
    }, error => {
      this.snack.open('Something went wrong', '', {duration: 600});
    });
  }
  displayFn(value) {
    if (value) {
      return `${value.name}(${value.mobile})`;
    }
  }
}
