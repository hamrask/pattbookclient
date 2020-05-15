import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../shared/transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss']
})
export class ViewTransactionsComponent implements OnInit {
transactions = [];
  constructor(private service: TransactionService, private snack: MatSnackBar) { }

  ngOnInit() {
    this.getTransactions();
  }
  getTransactions() {
    this.service.getTransactions().subscribe(Response => {
      this.transactions = Response;
    }, error => {
      console.log(error);
      this.snack.open('Something went wrong', '', {duration: 600});
    });
  }
}
