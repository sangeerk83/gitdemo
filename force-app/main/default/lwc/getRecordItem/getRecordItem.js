import { LightningElement,api,wire } from 'lwc';
import Account_Name from "@salesforce/schema/Account.Name";
import Account_Revenue from "@salesforce/schema/Account.AnnualRevenue";
import { getRecord } from "lightning/uiRecordApi";

export default class GetRecordForm extends LightningElement {
   accname;
   accrevenue;
    @api recordId;
  @wire(getRecord, {
    recordId: "$recordId",
    fields: [Account_Name,Account_Revenue]
 })
  wiredAccount({data,error}){
    if(data){
        console.log("data", data);
         this.accname = data.fields.Name.value;
         this.accrevenue = data.fields.AnnualRevenue.value;
    } else if (error){
         console.log("error", error);
    }
 }
}