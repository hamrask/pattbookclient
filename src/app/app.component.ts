import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pattubook-client';
  fgDetails;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.fgDetails  = this.fb.group({
      radio: ['one']
    });
  }
  showValue() {
    console.log(this.fgDetails.value);
  }
}
