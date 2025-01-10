export class User {
    name: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    consentGiven: boolean | undefined;

    constructor(name:string, lastName:string, phoneNumber: string, address:string) {
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}