import { LightningElement } from 'lwc';

export default class Getterexpression extends LightningElement {
    firstname = '';
    Lastname  = '';
    handlechange(event) {
        const field = event.target.name;
        if (field === 'firstname') {
            this.firstname = event.target.value;
         }
         else if(field === 'Lastname') {
            this.Lastname = event.target.value;
         }
    }     
    get uppercaseName() {
        return `${this.firstname} ${this.Lastname}`.toUpperCase();
    }
    
      
}