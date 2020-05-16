import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customerForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^([+]\d{2})?\d{10}$/)]],
      address: [''],
      createdDate: [null]
  });
  constructor(private fb: FormBuilder, private service: CustomerService, private snack: MatSnackBar) { }

  ngOnInit() {
  }
  addCustomer() {
    if (this.customerForm.valid) {
      this.service.addCustomer(this.customerForm.value).subscribe(Response => {
        this.snack.open('Customer Saved Successfully', '', {duration: 600});
        this.service.getCustomers();
        this.customerForm.reset();
        this.customerForm.markAsUntouched();
        this.customerForm.markAsPristine();
        this.customerForm.updateValueAndValidity();
      }, error => {
        let message = null;
        if (error) {
          if (error.error) {
            if (error.error.message) {
              message = error.error.message;
            }
          }
        }
        if (!message) {
          message = 'Something went wrong.please try again';
        }
        this.snack.open(message, '', {duration: 600});
      });
    }
  }
}
