/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
const user = new User();
const company = new Company();
const map = new CustomMap('#map', {
  lat: 0,
  lng: 0,
});
//! there should at least same property in object as define in some of interface but can be more
map.addMarker(user);
map.addMarker(company);
