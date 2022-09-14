import { Address } from "./address.model";

export interface User {
  _id: String;
  name: String;
  age: Number;
  address: Address;
}
