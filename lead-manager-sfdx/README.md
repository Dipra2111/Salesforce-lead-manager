# Lead Management App (Salesforce DX)

**Description**
A small Salesforce app to manage leads (custom object `Lead__c`) with a Lightning Web Component (`leadManager`), an Apex controller, and an Apex trigger that logs a Task when a lead is converted.

**Contents**
- Apex Class: `LeadController.cls`
- Apex Trigger: `LeadTrigger.trigger`
- LWC: `leadManager` (HTML, JS, meta)
- Custom Object: `Lead__c` with fields Email__c, Phone__c, Status__c
- package.xml for convenient metadata deployments

**Setup (using Salesforce CLI)**
1. Authenticate to your org:
   ```
   sfdx auth:web:login -a MyOrg
   ```
2. Deploy source:
   ```
   sfdx force:source:deploy -p force-app -u MyOrg
   ```
3. Alternatively, push to a scratch org:
   ```
   sfdx force:org:create -s -f config/project-scratch-def.json -a scratch
   sfdx force:source:push
   sfdx force:org:open
   ```

**Usage**
- Add the `leadManager` component to an App Page / Home Page via Lightning App Builder.
- Use the form to add leads and the datatable to convert leads.
- When a lead's status changes to "Converted", a Task is automatically created.

**Notes**
- This is a simple demo project. For production use add input validation, unit tests (Apex tests), and security checks.
- API version used: 58.0

**Author**
Dipra Banerjee
