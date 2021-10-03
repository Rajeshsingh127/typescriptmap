import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
// console.log(company);
// console.log(user);

const gmap = new CustomMap();

gmap.addMarker(user);
gmap.addMarker(company);
