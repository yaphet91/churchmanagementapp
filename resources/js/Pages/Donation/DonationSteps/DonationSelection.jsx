import React, {useState} from 'react'
import FundRaise from '@/assets/images/icons/fund_raise.jpg';
import BaptismImage from '@/assets/images/icons/baptism2.png';
import TithesImage from '@/assets/images/icons/tithes.jpeg';
import OfferingImage from '@/assets/images/icons/offering.jpeg';
import WeddingImage from '@/assets/images/icons/wedding2.png';
import ContributionImage from '@/assets/images/icons/contribution.jpeg';
import PaymentReasonCard from '@/Components/Cards/PaymentReasonCard';
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { addDonation } from '@/features/donation/donationSlice';

// Define your variants for animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
};
const selectedVariant = {
    scale: 0.8 // Example variant for scaling up the card when selected

};

const DonationSelection = ({ goToNextStep }) => {
    const dispatch = useDispatch();
    const donation = useSelector((state) => state.donation.value);
    const [paymentReason, setPaymentReason] = useState('');
    const [isSelected, setIsSelected] = useState(false); // Tracks if a card is selected

    // Revised handleCardClick to include animation completion before routing
    const handleCardClick = (reason) => {
        setPaymentReason(reason);

        dispatch(addDonation({ ...donation, reason })); 

        if (reason === 'tithes' || 'offerings' || 'contribution') {
            goToNextStep();
        }
        
    };


  return (
      <motion.div className='p-2 flex flex-col items-center'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
      >
          <div className='p-4 my-6'>
              <h1 className='text-3xl font-semibold'>Please select the type of contribution you would like to make</h1>
          </div>
          <div className='flex flex-col'>
              {/* first row */}
              <div className='flex flex-row space-x-10 mb-10'>
                  {/* card buttons */}
                  <PaymentReasonCard
                      reason='tithes'
                      onClick={() => handleCardClick('tithes')}
                      paymentReason={paymentReason} // Pass this as a prop
                      image={TithesImage}
                      animate={{ scale: paymentReason === 'tithes' ? 0.9 : 1 }} // Scale down when selected, otherwise normal
                      transition={{ duration: 0.5 }}
                  />
                  <PaymentReasonCard
                      reason='offerings'
                      onClick={() => handleCardClick('offerings')}
                      image={OfferingImage}
                      paymentReason={paymentReason} // Pass this as a prop
                      animate={{ scale: paymentReason === 'offerings' ? 0.9 : 1 }} // Scale down when selected, otherwise normal
                      transition={{ duration: 0.5 }} />
                  <PaymentReasonCard
                      reason='contribution'
                      onClick={() => handleCardClick('contribution')}
                      image={ContributionImage}
                      paymentReason={paymentReason} // Pass this as a prop
                      animate={{ scale: paymentReason === 'contribution' ? 0.9 : 1 }} // Scale down when selected, otherwise normal
                      transition={{ duration: 0.5 }} />

              </div>

              <div className='flex flex-row space-x-10 '>
                  {/* card buttons */}
                  <PaymentReasonCard
                      reason='wedding'
                      onClick={() => handleCardClick('wedding')}
                      image={WeddingImage} paymentReason={paymentReason} // Pass this as a prop
                      animate={{ scale: paymentReason === 'wedding' ? 0.9 : 1 }} // Scale down when selected, otherwise normal
                      transition={{ duration: 0.5 }} />
                  <PaymentReasonCard
                      reason='baptism'
                      onClick={() => handleCardClick('baptism')}
                      image={BaptismImage} paymentReason={paymentReason} // Pass this as a prop
                      animate={{ scale: paymentReason === 'baptism' ? 0.9 : 1 }} // Scale down when selected, otherwise normal
                      transition={{ duration: 0.5 }} />
                  <PaymentReasonCard
                      reason='funding'
                      onClick={() => handleCardClick('funding')}
                      image={FundRaise} paymentReason={paymentReason} // Pass this as a prop
                      animate={{ scale: paymentReason === 'funding' ? 0.9 : 1 }} // Scale down when selected, otherwise normal
                      transition={{ duration: 0.5 }} />
              </div>
          </div>
      </motion.div>
  )
}

export default DonationSelection
