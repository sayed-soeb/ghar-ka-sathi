import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  title = 'Ghar Ka Sathi';
  introduction = `Welcome to Ghar Ka Sathi, your premier destination for all real estate and home services. 
  We believe in providing a seamless experience for our clients, whether they are buying their first home, renting, or 
  looking for reliable services to maintain their property.`;

  mission = `Our mission is to simplify your life by connecting you with trusted professionals in various 
  service sectors. We aim to bridge the gap between service providers and customers, ensuring 
  transparency and satisfaction.`;

  vision = `At Ghar Ka Sathi, our vision is to become the leading platform for real estate and home services 
  in India. We strive to build lasting relationships with our clients by consistently delivering high-quality 
  services that meet their needs.`;

  reasonsToChooseUs = [
    'Expert Professionals: Our team consists of experienced and certified professionals who are dedicated to providing high-quality services.',
    'Wide Range of Services: From real estate to home maintenance, we offer a comprehensive list of services to cater to all your needs.',
    'Online Booking: Convenient online booking ensures hassle-free service scheduling and management.',
    'Affordable Pricing: We believe in quality services at competitive prices, ensuring value for your money.',
    'Customer Satisfaction: Our top priority is customer satisfaction, and we work tirelessly to ensure our clients are happy with our services.',
    'Trusted Network: We vet all service providers to ensure they meet our high standards for reliability and professionalism.',
  ];

  extraPoints = [
    'We provide 24/7 customer support to assist you with any queries or concerns.',
    'Our services are fully insured and guaranteed for your peace of mind, so you can trust us with your property.',
    'We use eco-friendly products wherever possible to ensure a sustainable environment and promote health.',
    'Regular promotions and discounts for our loyal customers to make our services even more affordable.',
    'A user-friendly platform that allows you to easily browse services, book appointments, and manage your requests.',
    'Community Engagement: We actively participate in community initiatives and strive to give back to society.',
  ];

  callToAction = `Join us on this journey and experience the best in real estate and home services. 
  Let us be your trusted partner, ensuring that your home is always a safe and comfortable place for you and your loved ones.`;
}
