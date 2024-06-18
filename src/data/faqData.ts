// faqData.ts

export interface FaqData {
  question: string
  answer: string
  isOpen: boolean
}

const faqData: FaqData[] = [
  {
    question: 'Do you pay before or after booking a hotel?',
    answer:
      'When you book a hotel, the payment process can vary. Some hotels require full payment upfront at the time of booking, especially for non-refundable rates or special discounted offers. Others allow you to reserve a room without immediate payment, and you settle the bill upon arrival or departure. Hotels may also place a temporary hold on your credit card to secure the reservation, which is often released shortly after your stay. Some hotels may require a deposit in advance, particularly during busy seasons or for longer stays. It&apos;s important to check the specific policies regarding payment, cancellation terms, and any additional charges like resort fees or taxes. If you have any questions about payment procedures, it&apos;s advisable to contact the hotel directly for clarification.',
    isOpen: false,
  },
  {
    question: 'What documents are needed for hotel booking?',
    answer:
      'To make a hotel reservation, it&apos;s important to have certain documents on hand to facilitate the check-in process. Generally, you will need to present a valid photo ID such as a passport, driver&apos;s license, or ID card. Additionally, it&apos;s advisable to have the credit card used for booking or another form of payment for any additional charges. Having a copy of the reservation confirmation, either digital or printed, is also recommended as it includes essential information like reservation dates, room type, and special requests. If you have specific needs such as accessibility requirements or dietary restrictions, it&apos;s helpful to communicate this information to the hotel in advance and have the necessary documentation related to these requirements.',
    isOpen: false,
  },
  {
    question: 'Do hotels charge your card before you check in?',
    answer:
      'Before check-in at hotels, it is common for the establishment to place a pre-authorization hold on the credit card used to secure the reservation. This pre-authorization ensures that the necessary funds are available to cover the cost of the stay, as well as any potential additional expenses such as resort fees or room service charges. However, the actual debit on the card typically occurs during check-out, when all expenses are finalized and charged. It is important to review the specific policies of the hotel regarding charges and pre-authorizations to better understand how the payment process works before your arrival.',
    isOpen: false,
  },
]

export default faqData
