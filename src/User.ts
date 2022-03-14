import faker from '@faker-js/faker';
import { Mappable } from './CustomMap';

//! NO need to install type definition file for , you should when there ris warning that type there is no type declaration it is is use to tell typescript that types of function and we are using in that library
//! Avoid using default export just a community convention
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  gender: string;
  constructor() {
    this.name = faker.name.firstName();
    this.gender = faker.name.gender(true);
    this.location = {
      lng: +faker.address.latitude(),
      lat: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>User Name : ${this.name}</h1>
    <h3>User Gender : ${this.gender}</h3>
    </div>
    `;
  }
}
