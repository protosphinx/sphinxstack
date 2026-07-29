---
name: verify-a-bank-transfer-reference
category: money
description: Verify a bank transfer reference against authorized instructions, beneficiary identity, invoice, amount, currency, timing, and independent confirmation. Use when a payment reference or destination may be ambiguous or changed.
---
# verify-a-bank-transfer-reference
## When to use
- Use before approving or reconciling a bank transfer.
- Never trust changed bank details from email alone or expose full account data.
## Procedure
1. Preserve payment request, invoice, beneficiary, amount, currency, date, and source.
2. Compare reference and destination to the authorized vendor or customer master.
3. Independently verify changed instructions through a known safe channel.
4. Check duplicate, prior payment, invoice status, sanctions, approval, and separation of duties.
5. Match bank confirmation to submitted details without assuming settlement.
6. Reconcile final outcome and record bounded evidence.
## Failure plan
- Stop payment and escalate suspected fraud, mismatch, or unverified change.
## Worked example
An emailed “new account” fails callback verification, so the invoice remains unpaid and fraud response starts.
## Done
- A transfer verification report records request, beneficiary, reference, destination check, independent confirmation, approval, and outcome
- Master-data, change, callback, duplicate, invoice, currency, sanction, separation, bank, and settlement checks verify payment
