import { LightningElement, track, wire } from 'lwc';
import getLeads from '@salesforce/apex/LeadController.getLeads';
import addLead from '@salesforce/apex/LeadController.addLead';
import updateStatus from '@salesforce/apex/LeadController.updateStatus';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LeadManager extends LightningElement {
    @track leads;
    @track error;
    name = '';
    email = '';
    phone = '';

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Email', fieldName: 'Email__c', type: 'email' },
        { label: 'Phone', fieldName: 'Phone__c', type: 'phone' },
        { label: 'Status', fieldName: 'Status__c' },
        {
            type: 'button',
            typeAttributes: {
                label: 'Convert',
                name: 'convert',
                variant: 'brand'
            }
        }
    ];

    @wire(getLeads)
    wiredLeads({ data, error }) {
        if (data) {
            this.leads = data;
            this.error = undefined;
        } else if (error) {
            this.error = error.body ? error.body.message : error;
            this.leads = undefined;
        }
    }

    handleInput(event) {
        const field = event.target.dataset.id;
        if (field === 'name') this.name = event.target.value;
        else if (field === 'email') this.email = event.target.value;
        else if (field === 'phone') this.phone = event.target.value;
    }

    addLead() {
        const newLead = { Name: this.name, Email__c: this.email, Phone__c: this.phone, Status__c: 'New' };
        addLead({ newLead })
            .then(() => {
                this.dispatchEvent(new ShowToastEvent({ title: 'Success', message: 'Lead added', variant: 'success' }));
                // clear inputs
                this.name = '';
                this.email = '';
                this.phone = '';
                // refresh list by calling imperative wire via refresh - simple approach: reload page
                return getLeads();
            })
            .then(() => { return; })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({ title: 'Error adding lead', message: error.body ? error.body.message : error, variant: 'error' }));
            });
    }

    handleRowAction(event) {
        if (event.detail.action.name === 'convert') {
            const leadId = event.detail.row.Id;
            updateStatus({ leadId, newStatus: 'Converted' })
                .then(() => {
                    this.dispatchEvent(new ShowToastEvent({ title: 'Success', message: 'Lead converted', variant: 'success' }));
                    return getLeads();
                })
                .catch(error => {
                    this.dispatchEvent(new ShowToastEvent({ title: 'Error', message: error.body ? error.body.message : error, variant: 'error' }));
                });
        }
    }
}
