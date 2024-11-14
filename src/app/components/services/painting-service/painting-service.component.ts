import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painting-service',
  templateUrl: './painting-service.component.html',
  styleUrls: ['./painting-service.component.css']
})
export class PaintingServiceComponent {
  isFormOpen: boolean = false;
  bookingData: any = {
    serviceType: 'Painting Service',
    name: '',
    email: '',
    location: '',
    date: '',
    time: '',
    mobile: ''
  };

  constructor(private router: Router) {}

  openForm(): void {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.isFormOpen = !this.isFormOpen;
    } else {
      alert('You must be logged in to book a service.');
      this.router.navigate(['/login']);
    }
  }

  async onSubmit(): Promise<void> {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      alert('You must be logged in to book a service.');
      this.router.navigate(['/login']);
      return;
    }

    const userEmail = localStorage.getItem('user');
    if (userEmail) {
      this.bookingData.email = userEmail;
    } else {
      alert('User email not found in local storage.');
      return;
    }

    console.log('Booking Data:', this.bookingData);
    try {
      const response = await axios.post('http://localhost:5000/api/services', this.bookingData, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      console.log('Booking successful:', response.data);
      this.resetForm();
      this.isFormOpen = false;
    } catch (error) {
      console.error('Error booking service:', error);
      alert('Failed to book the service. Please try again.');
    }
  }

  resetForm(): void {
    this.bookingData = {
      serviceType: 'Painting Service',
      name: '',
      email: '',
      location: '',
      date: '',
      time: '',
      mobile: ''
    };
  }
}
