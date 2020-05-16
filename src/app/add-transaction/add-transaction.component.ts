import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../shared/transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../shared/customer.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
transactionForm = this.fb.group({
  customerId: ['', Validators.required],
  debt: ['true', Validators.required],
  amount: [null, Validators.required]
});
customersList = [];
filteredCustomerList: Observable<any[]>;
  constructor(private fb: FormBuilder, private service: TransactionService, private snack: MatSnackBar,
              private customer: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
    this.filteredCustomerList = this.transactionForm.get('customerId').valueChanges.pipe(
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
  saveTransaction() {
    if (this.transactionForm.valid) {
      const data = this.transactionForm.value;
      if (data) {
        data.customerId = data.customerId._id;
      }
      this.service.addTransaction(data).subscribe(Response => {
        this.snack.open('Transaction Saved Successfully', '', {duration: 600});
      }, error => {
        console.log(error);
        this.snack.open('Something went wrong!', '', {duration: 600});
      });
    }
  }
  // get customers
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
