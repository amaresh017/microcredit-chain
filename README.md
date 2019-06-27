## Microcredit Blockchain Network - PoC Implementation

A micro lending blockchain network to provide and maintain a customer's credit score system along with an 
algorithm to compute and assess credit scores of customers based on customer behaviour and activities 
described by and computed on basis of the participant banks. The system would be accessible to the parties
and regulators via a permissioned private blockchain network.

### Goals:

This was implemented as a Proof of Concept(PoC) to realize and verify its practical potential. Pointers desired to be achieved were as follows:
  - Customer credit score assessment and computation.
  - Bank scoped credit line for customers.
  - Audit and 'source of truth' for a credit score.
  - Customer Profile based on a unique identifier - SSN/PAN.  

### BlockChain Specifications:

Following are the specifics (in terms of Participants, Assets & Access Control) of the underlying blockchain network;

- Participants:
  + Customer
  + Bank 
- Assets:
  + Customer Profile(owned by customer)
  + Credit Transaction(owned by customer and bank both)
  + Bank Transaction(owned by bank)
- Access Control List:
  + Depending upon participant and asset type - assigning access(read/write/update) to who is allowed to do what.
