import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { LoadingService } from '../../services/loading.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router,private loadingService: LoadingService, private http: HttpClient) {}

  ngOnInit() {
    // Google Identity Services Callback
    (window as any).handleCredentialResponse = (response: any) => {
      const googleToken = response.credential; // Google JWT Token
      console.log('Google Token:', googleToken);

      // Backend par token bhejna
      this.http
        .post('http://backend-gharkasathi.onrender.com/api/google', { token: googleToken })
        .subscribe(
          (data: any) => {
            console.log('Backend Response:', data);

            if (data.success) {
              // LocalStorage me save karein
              localStorage.setItem('authToken', data.token);
              localStorage.setItem('user', data.email);

              // Redirect to home page
              window.location.href = '/home';
            } else {
              alert('Google Login Failed');
            }
          },
          (error) => {
            console.error('Error:', error);
            alert('Login failed, please try again.');
          }
        );
    };
  }

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

}
