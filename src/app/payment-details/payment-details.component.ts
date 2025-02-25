import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent {
  
  constructor(public service: PaymentDetailService){
    
  }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
