public with sharing class LeadController {
    @AuraEnabled(cacheable=true)
    public static List<Lead__c> getLeads() {
        return [SELECT Id, Name, Email__c, Phone__c, Status__c FROM Lead__c ORDER BY CreatedDate DESC];
    }

    @AuraEnabled
    public static void addLead(Lead__c newLead) {
        insert newLead;
    }

    @AuraEnabled
    public static void updateStatus(Id leadId, String newStatus) {
        Lead__c l = [SELECT Id, Status__c FROM Lead__c WHERE Id = :leadId LIMIT 1];
        l.Status__c = newStatus;
        update l;
    }
}
