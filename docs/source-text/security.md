## Security

### Last updated: October 2026

Calibration records are audit evidence, so metquay.ai is built to keep them confidential, intact and available, with the controls that ISO/IEC 17025 and FDA 21 CFR Part 11 labs expect. Metquay has run calibration management software for regulated and accredited labs for about eight years.

Infrastructure and hosting

Cloud hosting: metquay.ai runs on AWS , whose data centers hold SOC 2 Type II and ISO/IEC 27001 certifications and provide physical security, redundant power and environmental controls.

Hosting regions: customer data is stored in United States; EU and Asia-Pacific regions available on request. Data stays in the chosen region except as described in our Privacy Policy.

Dedicated hosting: enterprise customers can choose a dedicated or private-cloud deployment .

Availability: services run across multiple availability zones with health monitoring and automatic failover; we target 99.5% monthly uptime.

Data protection

Control

Encryption in transit

Encryption at rest

Key management

Tenant isolation

Backups

Recovery targets

Offline app data

Data deletion

What we do

TLS 1.2 or higher for all traffic to the web app, customer portal, APIs and mobile/offline apps; HSTS enforced

AES-256 for databases, file storage (certificates, uploaded spreadsheets, attachments) and backups

Keys held in cloud KMS, with access restricted and rotation annually

Each customer's data is logically separated and every request is scoped to its tenant; dedicated databases for enterprise plans

Automated backups daily, encrypted, kept for 35 days and stored in a separate availability zone / region

Recovery point objective 24 hours recovery time objective 8 hours; restores tested quarterly

Data cached for offline field work is encrypted on the device and synced over TLS when back online

Customer data is deleted from production within 90 days of termination and from backups as they expire

Application security and regulated-lab controls

Access control

Role-based permissions down to module and action level (for example, who can approve a calibration or release a certificate).

Single sign-on via SAML 2.0 / OpenID Connect with Azure AD (Entra ID), Okta and Google Workspace .

Multi-factor authentication, configurable password policies, account lockout after repeated failed logins, and automatic session timeout.

Customer portal users see only the assets and certificates their lab chooses to share with them.

API access uses scoped tokens that admins can revoke at any time.

FDA 21 CFR Part 11 and ISO/IEC 17025 support

Audit trail: secure, computer-generated, time-stamped records of who created, changed or deleted data, with old and new values and the reason for change. Users cannot edit or delete audit entries.

Electronic signatures: signatures are linked to the record, show the signer's name, date, time and meaning (such as "reviewed" or "approved"), and require re-authentication.

Record integrity: approved calibration records and issued certificates are locked; changes create a new revision rather than overwriting history.

Validation support: we provide release notes and [a validation package / IQ-OQ documentation] to help customers validate metquay.ai under GAMP 5.

Secure development

Code review on every change, automated dependency and static code scanning, and separate development, test and production environments.

Production data is not used in development or testing.

Developers are trained in secure coding against the OWASP Top 10.

Operational security

People: background checks where lawful, confidentiality agreements, and security training at hire and annually.

Least privilege: staff access to customer data is limited to what support requires, approved per case, logged and reviewed quarterly.

Monitoring: centralized logging and alerting on suspicious activity, with logs kept for 12 months.

Patching: critical vulnerabilities are patched within 7 days, high within 30 days.

Testing: independent penetration tests annually; summary available to customers under NDA.

Vendors: subprocessors are reviewed for security before use and bound by data protection terms.

AI security

AI features process only the data needed for the task you start, such as converting a calibration spreadsheet into a worksheet.

Customer data sent to AI model providers is not used to train their models and is retained only as their enterprise terms allow confirm.

AI Output is always shown for human review before it is saved to a worksheet, procedure or certificate.

AI features can be disabled per account by an administrator.

Incident response

We keep a documented incident response plan that covers detection, containment, investigation and recovery. If a security incident affects customer data, we notify affected customers without undue delay and within 72 hours of confirming it, with what we know and the steps we are taking.

Compliance

Framework

ISO/IEC 17025

FDA 21 CFR Part 11 / EU Annex 11

GAMP 5

GDPR / UK GDPR / CCPA / PDPA

SOC 2 Type II

ISO/IEC 27001

Status

Platform supports accredited labs' records, traceability and uncertainty requirements

Audit trail and electronic signature controls built in; customers validate in their environment

Validation documentation available

Data Processing Addendum available on request

Planned

Reporting a vulnerability

If you believe you have found a security issue, email consulting@metquay.com with the details and steps to reproduce. Please give us reasonable time to fix it before disclosing it publicly, and do not access other customers' data, degrade the service or use social engineering. We will acknowledge reports within 3 business days and will not pursue legal action against good-faith research that follows these rules.

For security questionnaires, our penetration test summary or a DPA, contact Metquay Inc. 2018 156th Ave NE Suite 237, Bellevue, WA 98007 | consulting@metquay.com

## Ready to modernize your calibration lab?

A world where every measurement is trusted starts with one platform. See metquay.ai on your own data.

Start Free Trial

Product

Solutions

Ecosystem

Resources

Company

Blog

Get Free Trial

Asset-centric, human-verified, AI-supercharged

ISO 17025

21 CFR Part 11

GAMP-5

### PRODUCT

Dashboard

Worksheets

Works & Scheduling

Certificates

Offline / PWA

### SOLUTIONS

Due Alerts

Customer Portal

Receiving

Traceability

Shipping

### ECOSYSTEM

Integrations

Fluke MET/CAL

metrology.net

API & Webhooks

### COMPANY

About

Careers

Resources

Blog

Contact

© 2026 Metquay Inc.

Privacy

Terms

Security

Asset-centric, human-verified, AI-supercharged

ISO 17025

21 CFR Part 11

GAMP-5

### PRODUCT

Dashboard

Worksheets

Works &

Scheduling

Certificates

Offline / PWA

### SOLUTIONS

Due Alerts

Customer Portal

Receiving

Traceability

Shipping

### ECOSYSTEM

Integrations

Fluke MET/CAL

metrology.net

API & Webhooks

### COMPANY

About

Careers

Resources

Blog

Contact

© 2026 Metquay Inc.

Privacy

Terms

Security

Asset-centric, human-verified, AI-supercharged

ISO 17025

21 CFR Part 11

GAMP-5

### PRODUCT

Dashboard

Worksheets

Works & Scheduling

Certificates

Offline / PWA

### SOLUTIONS

Due Alerts

Customer Portal

Receiving

Traceability

Shipping

### ECOSYSTEM

Integrations

Fluke MET/CAL

metrology.net

API & Webhooks

### COMPANY

About

Careers

Resources

Blog

Contact

© 2026 Metquay Inc.

Privacy

Terms

Security

Asset-centric, human-verified, AI-supercharged

ISO 17025

21 CFR Part 11

GAMP-5

### PRODUCT

Dashboard

Worksheets

Works & Scheduling

Certificates

Offline / PWA

### SOLUTIONS

Due Alerts

Customer Portal

Receiving

Traceability

Shipping

### ECOSYSTEM

Integrations

Fluke MET/CAL

metrology.net

API & Webhooks

### COMPANY

About

Careers

Resources

Blog

Contact

© 2026 Metquay Inc.

Privacy

Terms

Security
