import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    username: '',
    emailOrMobile: '',  // Changed field to capture both email or mobile
    password: ''
  };

  errorMessage: string | null = null;
  successMessage: string | null = null;

  private readonly registerApiUrl = 'https://backend-gharkasathi.onrender.com/api/auth/register'; // Update with your backend URL

  onSubmit() {
    // Clear previous messages
    this.errorMessage = null;
    this.successMessage = null;

    // Validate required fields before making API call
    if (!this.registerData.username || !this.registerData.emailOrMobile || !this.registerData.password) {
      this.errorMessage = 'All fields are required';
      return;
    }

    // Send POST request to the backend using Axios
    axios.post(this.registerApiUrl, this.registerData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        this.successMessage = 'Registration successful! You can now log in.';
      })
      .catch((error) => {
        console.error('There was an error during registration:', error.response?.data || error.message);
        this.errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
      });
  }
}
