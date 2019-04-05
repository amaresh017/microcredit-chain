/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */


/**
 * A Customer microcredit request to be assessed by a Bank.
 * @param {org.microcredit.biznet.NewCreditAssessment} tx - the request to be assessed.
 * @transaction
 */

async function NewCreditAssessment(tx) {
  var factory = getFactory();

  var newAssessment = factory.newResource('org.microcredit.biznet', 'CreditAssessment', tx.creditAssessmentId)
  newAssessment.applier = tx.applier
  newAssessment.assessor = tx.assessor
  newAssessment.weightage = tx.weightage
  newAssessment.spendingHistoryScore = tx.spendingHistoryScore
  newAssessment.assessedScore = tx.assessedScore

  await getAssetRegistry('org.microcredit.biznet.CreditAssessment').then(function (registry) {
    return registry.add(newAssessment);
  });

  // emit a notification that a new assessment has occurred.
  // let newAssessmentEvent = factory.newEvent('org.microcredit.biznet', 'NewCreditAssessmentEvent')
  // newAssessmentEvent.newAssessment = newAssessment
  // newAssessmentEvent.creditScore = newAssessment.assessedScore
  // newAssessmentEvent.customer = newAssessment.applier
  // emit(newAssessmentEvent)
}

/**
 * A Customer microcredit request to be revised/reviewed by the Bank.
 * @param {org.microcredit.biznet.ReviewCreditAssessment} tx - the request to be reviewed.
 * @transaction
 */

async function ReviewCreditAssessment(tx) {
  var factory = getFactory();
  
  var reviewAssessment = factory.newResource('org.microcredit.biznet', 'CreditAssessment', tx.creditAssessmentId)
  reviewAssessment.applier = tx.applier
  reviewAssessment.assessor = tx.assessor
  reviewAssessment.weightage = tx.weightage
  reviewAssessment.spendingHistoryScore = tx.spendingHistoryScore
  reviewAssessment.assessedScore = tx.newAssessedScore
  reviewAssessment.previousAssessment = tx.previousAssessment

  await getAssetRegistry('org.microcredit.biznet.CreditAssessment').then(function (registry) {
    return registry.add(reviewAssessment);
  });

  // emit a notification that a review assessment has occurred.
  // let reviewAssessmentEvent = factory.newEvent('org.microcredit.biznet', 'ReviewCreditAssessmentEvent')
  // reviewAssessmentEvent.reviewAssessment = reviewAssessment
  // reviewAssessmentEvent.newCreditScore = reviewAssessment.assessedScore
  // reviewAssessmentEvent.oldCreditScore = reviewAssessment.previousAssessment.assessedScore
  // reviewAssessmentEvent.customer = reviewAssessment.applier
  // emit(tradeNotification)
}

async function NewBankTransaction(tx) {
  var factory = getFactory();

  var bankTnx = factory.newResource('org.microcredit.biznet', 'BankTransaction', tx.BankTransactionId)
  bankTnx.bank = tx.bank
  bankTnx.tnxType = tx.tnxType
  bankTnx.otherDetails = tx.otherDetails
  await getAssetRegistry('org.microcredit.biznet.BankTransaction').then(function (registry) {
    return registry.add(bankTnx);
  });

  // emit a notificaiton for new bank transaction
  // let bankTransactionEvent = factory.newEvent('org.microcredit.biznet', 'BankTransactionEvent')
  // bankTransactionEvent.bankTransaction = bankTnx
  // emit(bankTransactionEvent);
}


