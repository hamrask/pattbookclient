import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {
customers = [];
  constructor(private service: CustomerService, private snack: MatSnackBar) { }

  ngOnInit() {
    this.getCustomers();
  }
  // get all customers
  getCustomers() {
    this.service.getCustomers().subscribe(Response => {
      this.customers = Response;
    }, error => {
      console.log(error);
    });
  }

}
