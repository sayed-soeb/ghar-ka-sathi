import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    mobile: '',
    password: ''
  };

  onSubmit() {
    console.log('Register Data:', this.registerData);
    // Handle registration logic here
  }
}
