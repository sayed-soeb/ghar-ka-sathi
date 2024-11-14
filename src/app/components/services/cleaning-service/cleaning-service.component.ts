import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-cleaning-service',
  templateUrl: './cleaning-service.component.html',
  styleUrls: ['./cleaning-service.component.css']
})
export class CleaningServiceComponent {
  isFormOpen: boolean = false;
  bookingData: any = {
    serviceType: 'Cleaning Service', // Default value
    name: '',
    email: '', // Added email field
    location: '', // Added location field
    date: '',
    time: '',
    mobile: ''
  };

  constructor(private router: Router) {}

  openForm(): void {
    const authToken = localStorage.getItem('authToken'); // Check if auth token exists

    if (authToken) {
      this.isFormOpen = !this.isFormOpen; // Toggle form visibility
    } else {
      alert('You must be logged in to book a service.');
      this.router.navigate(['/login']); // Redirect to login page
    }
  }

  async onSubmit(): Promise<void> {
    const authToken = localStorage.getItem('authToken'); // Get auth token from local storage

    if (!authToken) {
      alert('You must be logged in to book a service.');
      this.router.navigate(['/login']); // Redirect to login page
      return;
    }

    // Fetch the user's email from local storage
    const userEmail = localStorage.getItem('user'); // Assuming 'user' contains the email

    if (userEmail) {
      this.bookingData.email = userEmail; // Assign email to email field
    } else {
      alert('User email not found in local storage.');
      return;
    }

    console.log('Booking Data:', this.bookingData);
    try {
      const response = await axios.post('http://localhost:5000/api/services', this.bookingData, {
        headers: {
          Authorization: `Bearer ${authToken}` // Include auth token in the request header
        }
      });
      console.log('Booking successful:', response.data);

      // Reset the form after submission
      this.resetForm();
      this.isFormOpen = false; // Close the form after submission
    } catch (error) {
      console.error('Error booking service:', error);
      alert('Failed to book the service. Please try again.');
    }
  }

  resetForm(): void {
    this.bookingData = {
      serviceType: 'Cleaning Service', // Keep default value
      name: '',
      email: '', // Reset email
      location: '', // Reset location
      date: '',
      time: '',
      mobile: ''
    };
  }
}
