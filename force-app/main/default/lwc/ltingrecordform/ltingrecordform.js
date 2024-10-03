import { LightningElement, api } from 'lwc';
import Account_name from '@salesforce/schema/Account.Name';
import Account_Industry from '@salesforce/schema/Account.Industry';
export default class Ltingrecordform extends LightningElement {
   @api recordId;
   @api objectApiName;
   fields =[Account_name ,Account_Industry];

   handleSuccess(){
    alert('success called');
}

}