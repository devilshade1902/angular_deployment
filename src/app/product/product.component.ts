import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private router:Router){}

  goToHome(){
    this.router.navigate(['/'])
  }

  goToProductDetail()
  {
    this.router.navigate(['/products/details/56'])
  }
}
