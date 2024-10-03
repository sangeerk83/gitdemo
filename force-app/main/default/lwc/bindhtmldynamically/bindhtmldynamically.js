import { LightningElement } from 'lwc';

export default class Bindhtmldynamically extends LightningElement {
    myvalue = "sangeetha salesforce";
    handlechange(event) {
    this.myvalue = event.target.value;
    }
}