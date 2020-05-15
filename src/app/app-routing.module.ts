import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ViewUserTransactionComponent } from './view-user-transaction/view-user-transaction.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


const routes: Routes = [
  {
    path: '',
    component: ViewTransactionsComponent
  },
  {
    path: 'add',
    component: AddTransactionComponent
  },
  {
    path: 'users/:userId',
    component: ViewUserTransactionComponent
  },
  {
    path: 'users',
    component: ViewCustomerComponent
  },
  {
    path: 'users/add',
    component: AddCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
