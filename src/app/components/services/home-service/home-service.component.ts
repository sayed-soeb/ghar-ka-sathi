import { Component } from '@angular/core';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrl: './home-service.component.css'
})
export class HomeServiceComponent {
  isFormOpen: boolean = false;
  bookingData: any = {
    serviceType: 'Home Renovation', // Default value
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
      serviceType: 'Home Renovation', // Keep default value
      name: '',
      address: '',
      date: '',
      time: '',
      mobile: ''
    };
    this.isFormOpen = false; // Close the form after submission
  }
}
