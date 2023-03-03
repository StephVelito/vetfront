export class UserModel {
  constructor(
 
    name = null,
    lastName = null,
    email = null,
    petname = null,
    petage = null,
    pet = null,
    distrito = null,
    pass = null,
    createdAt = null,
    id = null
  ) {

    this.name =name;
    this.lastName =lastName;
    this.email =email;
    this.petname =petname;
    this.petage =petage;
    this.pet =pet;
    this.distrito =distrito;
    this.pass =pass;
    this.id =id;
    this.createdAt = !createdAt ? new Date() : new Date(createdAt);
  }

  getFullname() {
    return `${this.name} ${this.lastName}`;
  }

  getFullDetails() {
    return `${this.getFullname()} > ${this.createdAt.toDateString()}`;
  }
}