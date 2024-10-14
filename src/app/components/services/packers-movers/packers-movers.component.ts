import { Component } from '@angular/core';

@Component({
  selector: 'app-packers-movers',
  templateUrl: './packers-movers.component.html',
  styleUrl: './packers-movers.component.css'
})
export class PackersMoversComponent {
  isFormOpen: boolean = false;
  bookingData: any = {
    serviceType: 'Packers & Movers', // Default value
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
      serviceType: 'Packers & Movers', // Keep default value
      name: '',
      address: '',
      date: '',
      time: '',
      mobile: ''
    };
    this.isFormOpen = false; // Close the form after submission
  }
}
