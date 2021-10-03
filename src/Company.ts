import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<div>
              <h1>Company name is: ${this.companyName}</h1>
              <h2>Company phrase is: ${this.catchPhrase}</h2>
            </div>`;
  }
}
