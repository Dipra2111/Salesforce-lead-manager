# ⚡ Salesforce Lead Manager App

A **Salesforce Lightning Web Component (LWC)** project for managing leads efficiently.  
Built with **Apex**, **LWC**, and **Salesforce DX (SFDX)** — this app lets users create, view, and convert leads with automated task creation upon conversion.

---

## 🧩 Features

✅ Add new leads with name, email, and phone  
✅ View all leads in a Lightning Data Table  
✅ Convert leads to update their status  
✅ Automatically log a follow-up task after conversion  
✅ Built using clean Apex controller logic and trigger-based automation  

---

## 🧱 Tech Stack

| Component | Technology |
|------------|-------------|
| Backend | Apex Classes & Triggers |
| Frontend | Lightning Web Components (LWC) |
| Database | Salesforce Custom Object (`Lead__c`) |
| Deployment | Salesforce DX (VS Code) |

---

## 📂 Project Structure

lead-manager-sfdx/
├── force-app/
│ └── main/
│ └── default/
│ ├── classes/
│ │ └── LeadController.cls
│ ├── triggers/
│ │ └── LeadTrigger.trigger
│ ├── lwc/
│ │ └── leadManager/
│ │ ├── leadManager.html
│ │ ├── leadManager.js
│ │ ├── leadManager.js-meta.xml
│ └── objects/
│ └── Lead__c/
│ ├── Lead__c.object-meta.xml
│ └── fields/
│ ├── Email__c.field-meta.xml
│ ├── Phone__c.field-meta.xml
│ └── Status__c.field-meta.xml
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
- [Salesforce CLI (SFDX)](https://developer.salesforce.com/tools/sfdxcli)
- [VS Code with Salesforce Extensions](https://developer.salesforce.com/tools/vscode/)
- A Salesforce Developer Org or Scratch Org

---

### 2️⃣ Clone This Repository
```bash
git clone https://github.com/<your-username>/salesforce-lead-manager.git
cd salesforce-lead-manager
3️⃣ Authorize Salesforce Org
sfdx auth:web:login -a MyOrg

4️⃣ Deploy Source to Org
sfdx force:source:deploy -p force-app -u MyOrg


or, for a scratch org:

sfdx force:org:create -s -f config/project-scratch-def.json -a scratch
sfdx force:source:push

5️⃣ Open the Org
sfdx force:org:open

🖥️ Usage

Add the Lead Manager component to a Lightning App Page or Home Page via the Lightning App Builder.

Enter lead details and click Add Lead.

Click Convert beside any lead to update its status and auto-generate a follow-up Task.
