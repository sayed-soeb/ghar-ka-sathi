import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { emailOrMobile: '', password: '' };
  resetData = { email: '', otp: '', newPassword: '' };
  isResetMode = false;
  otpSent = false;
  errorMessage: string | null = null;
  isReloading: boolean = false;

  constructor(private router: Router,private loadingService: LoadingService) {}

  async onSubmit() {
    this.loadingService.show();
    this.errorMessage = null;
    this.isReloading = false; // Additional flag to handle loading during reload
  
    try {
      const response = await axios.post('https://backend-gharkasathi.onrender.com/api/auth/login', this.loginData);
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user',response.data.emailOrMobile);
      localStorage.setItem('userInfo',JSON.stringify(response.data));
  
      Toastify({
        text: "Login successful!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast();
  
      // Keep loading until reload completes
      this.isReloading = true;
  
      // Reload the page
      // window.location.reload();
      this.router.navigate(['/']); 
     
    } catch (error: any) {
      this.errorMessage = error.response?.data.message || 'Login failed. Please try again.';
  
      Toastify({
        text: this.errorMessage ? this.errorMessage : '',
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast();
    } finally {
      this.loadingService.hide();
    }
  }

  toggleResetMode() {
    this.isResetMode = !this.isResetMode;
    this.errorMessage = null;
  }

  async onResetPassword() {
    if (!this.otpSent) {
      try {
        await axios.post('https://backend-gharkasathi.onrender.com/api/auth/send-otp', { email: this.resetData.email });
        
        Toastify({
          text: "OTP sent to your email. Enter it below to reset your password.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "blue",
        }).showToast();

        this.otpSent = true;
      } catch (error) {
        this.errorMessage = 'Error sending OTP. Please try again.';
        Toastify({
          text: this.errorMessage,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "red",
        }).showToast();
      }
    } else {
      try {
        await axios.post('https://backend-gharkasathi.onrender.com/api/auth/reset-password', {
          email: this.resetData.email,
          otp: this.resetData.otp,
          newPassword: this.resetData.newPassword
        });
        
        Toastify({
          text: "Password reset successful. You can now log in with your new password.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "green",
        }).showToast();

        this.toggleResetMode();
        this.otpSent = false;
      } catch (error) {
        this.errorMessage = 'Failed to reset password. Check OTP or try again.';
        Toastify({
          text: this.errorMessage,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "red",
        }).showToast();
      }
    }
  }

  loginWithGoogle() {
    console.log('Login with Google clicked');
    // Implement Google OAuth and redirect to the dashboard on success
  }
}
