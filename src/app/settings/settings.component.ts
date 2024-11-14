import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from '../services/settings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Toastify from 'toastify-js'; // Import Toastify

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  userInfo: any;
  changePasswordForm: FormGroup;
  deleteAccountForm: FormGroup;
  showPasswordForm = false;
  showDeleteForm = false;

  constructor(private fb: FormBuilder, private settingsService: SettingsService, public dialog: MatDialog) {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      this.userInfo = JSON.parse(userInfoString);
    }
    
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    });

    this.deleteAccountForm = this.fb.group({
      password: ['', Validators.required]
    });
  }

  showChangePassword(): void {
    this.showPasswordForm = true;
    this.showDeleteForm = false; // Hide delete account form
  }

  showDeleteAccount(): void {
    this.showDeleteForm = true;
    this.showPasswordForm = false; // Hide change password form
  }

  closeForms(): void {
    this.showPasswordForm = false;
    this.showDeleteForm = false;
  }

  onChangePassword(): void {
    const email = this.userInfo.emailOrMobile; // Get email from userInfo
    const currentPassword = this.changePasswordForm.value.currentPassword;
    const newPassword = this.changePasswordForm.value.newPassword;

    if (newPassword !== this.changePasswordForm.value.confirmNewPassword) {
      console.error('New passwords do not match');
      return; // Prevent form submission if passwords do not match
    }

    this.settingsService.changePassword(email, currentPassword, newPassword).subscribe(
      response => {
        console.log(response.message);
        this.showToast('Password changed successfully!'); // Show success notification
        this.logout(); // Logout after password change
      },
      error => {
        console.error(error.error.message);
      }
    );
  }

  onDeleteAccount(): void {
    const email = this.userInfo.emailOrMobile; // Get email from userInfo
    const password = this.deleteAccountForm.value.password;

    this.settingsService.deleteUser(email, password).subscribe(
      response => {
        console.log(response.message);
        this.showToast('Account deleted successfully!'); // Show success notification
        this.logout(); // Logout after account deletion
      },
      error => {
        console.error(error.error.message);
      }
    );
  }

  showToast(message: string): void {
    Toastify({
      text: message,
      duration: 3000, // Duration in milliseconds
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)', // Custom background color
    }).showToast();
  }

  logout(): void {
    // Clear local storage
    localStorage.removeItem('userInfo');
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    
    // Redirect to login page
    window.location.href = '/login'; // Adjust the path to your login page
  }
}
