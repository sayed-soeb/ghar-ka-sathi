import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  mobile: string = '';
  query: string = '';

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      query: this.query,
    });
  }
}
