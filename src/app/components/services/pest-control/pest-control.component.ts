import { Component } from '@angular/core';

@Component({
  selector: 'app-pest-control',
  templateUrl: './pest-control.component.html',
  styleUrl: './pest-control.component.css'
})
export class PestControlComponent {
  isFormOpen: boolean = false;
  bookingData: any = {
    serviceType: 'Pest Control & Disinfection', // Default value
    name: '',
    address: '',
    date: '',
    time: '',
    mobile: ''
  };

  openForm(): void {
    this.isFormOpen = !this.isFormOpen; // Toggle form visibility
  }

  onSubmit(): void {
    console.log('Booking Data:', this.bookingData);
    // Implement your logic to send this data to your backend or API
    // Reset the form after submission
    this.bookingData = {
      serviceType: 'Pest Control & Disinfection', // Keep default value
      name: '',
      address: '',
      date: '',
      time: '',
      mobile: ''
    };
    this.isFormOpen = false; // Close the form after submission
  }
}
