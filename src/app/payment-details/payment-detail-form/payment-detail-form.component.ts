import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  imports: [
    FormsModule
  ],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {

  constructor(public service: PaymentDetailService){
      
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail()
    .subscribe({
      next: res=> {
        console.log(res);
        this.service.resetForm(form)
      },
      error: err => {console.log(err)}
    })
  }
  
}
