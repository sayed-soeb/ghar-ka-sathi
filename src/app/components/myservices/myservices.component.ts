import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../../services/myservices.service';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyServicesComponent implements OnInit {
  email: any = '';
  upcomingServices: any[] = [];
  pastServices: any[] = [];
  errorMessage: string | null = null;

  constructor(private myServicesService: MyServicesService) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('user') ? localStorage.getItem('user') : '';
    this.fetchServices();
  }

  fetchServices() {
    this.myServicesService.getServicesByEmail(this.email).subscribe(
      (services) => {
        const currentDate = new Date();
        this.upcomingServices = services.filter((service: { date: string | number | Date; }) => new Date(service.date) >= currentDate);
        this.pastServices = services.filter((service: { date: string | number | Date; }) => new Date(service.date) < currentDate);
      },
      (error) => {
        this.errorMessage = 'Error fetching services. Please try again.';
      }
    );
  }

  cancelBooking(serviceId: string) {
    this.myServicesService.deleteService(serviceId).subscribe(
      () => {
        // Update the lists after successful deletion
        this.upcomingServices = this.upcomingServices.filter(service => service._id !== serviceId);
        alert('Booking cancelled successfully.');
      },
      (error) => {
        alert('Failed to cancel booking. Please try again.');
      }
    );
  }
}
