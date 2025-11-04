trigger LeadTrigger on Lead__c (after update) {
    List<Task> tasksToInsert = new List<Task>();
    for (Lead__c lead : Trigger.new) {
        Lead__c oldLead = Trigger.oldMap.get(lead.Id);
        if (lead.Status__c == 'Converted' && oldLead.Status__c != 'Converted') {
            Task t = new Task(
                Subject = 'Follow up with converted lead',
                WhatId = lead.Id,
                Status = 'Not Started'
            );
            tasksToInsert.add(t);
        }
    }
    if (!tasksToInsert.isEmpty()) insert tasksToInsert;
}
