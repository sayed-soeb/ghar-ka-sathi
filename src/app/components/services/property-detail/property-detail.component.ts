import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

interface Property {
  name: string;
  _id: string;
  price: number;
  location: string;
  detail: string;
  images: string[];
}

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: Property;
  isPopupOpen = false;
  enquiryData = { name: '', Mobile: '', email: '' };

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.property = (nav?.extras?.state?.['property']) as Property;
  }

  ngOnInit(): void {}

  openEnquiryPopup() {
    this.isPopupOpen = true;
  }

  closeEnquiryPopup() {
    this.isPopupOpen = false;
    this.enquiryData = { name: '', Mobile: '', email: '' }; // Reset form data
  }

  async submitEnquiry(event: Event) {
    event.preventDefault(); // Prevent page refresh on form submit

    const enquiryPayload = {
      ...this.enquiryData,
      id: this.property._id
    };

    try {
      const response = await axios.post('http://localhost:5000/api/properties/enquire', enquiryPayload);
      console.log('Enquiry submitted:', response.data);
      this.closeEnquiryPopup();
      alert('Your enquiry has been submitted successfully!');
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('There was an issue submitting your enquiry. Please try again later.');
    }
  }
}
