import { Component } from '@angular/core';

@Component({
  selector: 'app-electric-service',
  templateUrl: './electric-service.component.html',
  styleUrl: './electric-service.component.css'
})
export class ElectricServiceComponent {
  isFormOpen: boolean = false;
  bookingData: any = {
    serviceType: 'Electric Service', // Default value
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
      serviceType: 'Electric Service', // Keep default value
      name: '',
      address: '',
      date: '',
      time: '',
      mobile: ''
    };
    this.isFormOpen = false; // Close the form after submission
  }
}
