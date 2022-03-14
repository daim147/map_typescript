import faker from '@faker-js/faker';
//! NO need to install type definition file for , you should when there ris warning that type there is no type declaration it is is use to tell typescript that types of function and we are using in that library
//! Avoid using default export just a community convention
export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      long: +faker.address.latitude(),
      lat: +faker.address.longitude(),
    };
  }
}
