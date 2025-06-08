import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  imports: [CommonModule],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  productId:any;
  constructor(private activatedRoute:ActivatedRoute){}

    ngOnInit(){
      this.activatedRoute.params.subscribe({
        next:(value)=>this.productId=value['productId']
      })
    }
  
}
