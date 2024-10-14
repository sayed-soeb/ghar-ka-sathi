import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-sell-rent',
  templateUrl: './buy-sell-rent.component.html',
  styleUrl: './buy-sell-rent.component.css'
})
export class BuySellRentComponent {
  searchText: string = ''; // Property for search input
  selectedType: string = ''; // Property for type filter
  selectedPriceRange: string = ''; // Property for price range filter
  selectedLocation: string = ''; // Property for location filter

  selectedSection: string = 'buy'; // Default section is 'buy'
  selectedListingType: string = 'buy'; // buy or rent

  properties = [ // Dummy property data
    {
      name: 'Luxury Apartment',
      image: 'assets/property1.jpg',
      price: '75,000',
      location: 'New York',
      details: 'Spacious 3 BHK with stunning city views.',
      bedrooms: 3,
      bathrooms: 2,
      type: 'Apartment',
      listingType: 'buy'
    },
    {
      name: 'Modern House',
      image: 'assets/property2.jpg',
      price: '1,25,000',
      location: 'Los Angeles',
      details: '4 BHK house with a garden and pool.',
      bedrooms: 4,
      bathrooms: 3,
      type: 'House',
      listingType: 'buy'
    },
    {
      name: 'Commercial Office Space',
      image: 'assets/property3.jpg',
      price: '95,000',
      location: 'Chicago',
      details: 'Prime office space in downtown area.',
      bedrooms: 0,
      bathrooms: 2,
      type: 'Commercial',
      listingType: 'rent'
    },
    {
      name: 'Suburban Apartment',
      image: 'assets/property4.jpg',
      price: '40,000',
      location: 'Houston',
      details: 'Affordable 2 BHK apartment.',
      bedrooms: 2,
      bathrooms: 1,
      type: 'Apartment',
      listingType: 'rent'
    },
    // Add more dummy data as needed
  ];

  filteredProperties = [...this.properties]; // Copy of properties to apply filters

  propertyData = {
    name: '',
    image: '',
    location: '',
    type: '',
    price: '',
    details: ''
  }; // Data model for the sell form

  constructor() {}

  ngOnInit(): void {}

  // Method to filter properties based on search, filters, and type (buy or rent)
  filterProperties(): void {
    this.filteredProperties = this.properties.filter(property => {
      const matchesSearch = !this.searchText || 
        property.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
        property.location.toLowerCase().includes(this.searchText.toLowerCase()) || 
        property.price.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesType = !this.selectedType || property.type === this.selectedType;

      const matchesPrice = !this.selectedPriceRange || this.isWithinPriceRange(property.price);

      const matchesLocation = !this.selectedLocation || property.location === this.selectedLocation;

      const matchesListingType = property.listingType === this.selectedListingType;

      return matchesSearch && matchesType && matchesPrice && matchesLocation && matchesListingType;
    });
  }

  // Helper method to check if property price is within the selected range
  isWithinPriceRange(price: string): boolean {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (this.selectedPriceRange === '0-50000') {
      return numericPrice <= 50000;
    } else if (this.selectedPriceRange === '50000-100000') {
      return numericPrice > 50000 && numericPrice <= 100000;
    } else if (this.selectedPriceRange === '100000+') {
      return numericPrice > 100000;
    }
    return true;
  }

  // Method to switch between buy, rent, and sell sections
  selectSection(section: string): void {
    this.selectedSection = section;
    if (section === 'sell') {
      this.filteredProperties = []; // No properties to show when selling
    } else {
      this.selectedListingType = section; // Set the selected type as buy or rent
      this.filterProperties(); // Apply filters when switching sections
    }
  }

  // Method to handle form submission (Sell)
  onSubmit(): void {
    alert('Property listed for ' + this.propertyData.type);
    // Logic for saving the property data or submitting to a backend can go here
  }

  // Handle image file selection for the sell form
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.propertyData.image = file.name;
    }
  }
}
