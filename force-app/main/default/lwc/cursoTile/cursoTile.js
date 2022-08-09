import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class CursoTile extends NavigationMixin(LightningElement) {
    @api curso;

    //curso.Location__c = "Online";
    //curso.Location__c = "Grabado";
    //curso.Location__c = "Online, Grabado";

    get isOnline(){
        return this.curso.Location__c.includes("Online");
    }

    get isGrabado(){
        return this.curso.Location__c.includes("Grabado");
    }


    navigateToRecordViewPage() {
        // Navigate to the View PAge 
        this[NavigationMixin.Navigate]({
            type: 'standard__RecordPage',
            attributes: {
                RecordId: this.curso.Id,
                objectApiName: 'Curso__c', //objectApiName is optional
                actionName: 'view',
            },
        });
    }
}