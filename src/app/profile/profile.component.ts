import { Component } from '@angular/core';
import { CanExit } from '../guards/authdeactivate.guard';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements CanExit {
  isSaved: boolean = false
  toggleIsSaved() {
    this.isSaved = !this.isSaved;
  }
  canDeactivate() {
    return this.isSaved; 
  }
}
