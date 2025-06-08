import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  category:any;
  constructor(private activatedRouter:ActivatedRoute){}

  ngOnInit(){
    this.activatedRouter.queryParams.subscribe({
      next:(value)=>{
        this.category=value['category']
      }
    })
  }
}
