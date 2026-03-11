import React from 'react'
import Modal from '../Modal'
import ServiceCard from './ServiceCard';

const ServiceOptions = ['Baptism', 'Wedding', 'Visit', 'Confession', 'Counselling', 'Prayer of Sick', 'Attestation', 'Call', 'Others'];
const RequestService = ({ isOpen, onClose }) => {
    
    return (
        <Modal show={isOpen} onClose={onClose} maxWidth='3xl' maxHeight='h-[80vh]'>
            <div className='p-8'>

            <h1 className='text-2xl font-semibold text-center mb-4'>Request a Service</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Adjust grid columns here */}
                {ServiceOptions.map((service, index) => (
                    <ServiceCard
                    key={index} // Use the index as a key for simplicity, consider using unique ids for real applications
                    service={service}
                    // onClick={() => handleCardClick(amount)}
                    // paymentAmount={paymentAmount} // Pass this as a prop to manage the selection state
                    // animate={{ scale: paymentAmount === amount ? 0.9 : 1 }} // Scale down when selected
                    transition={{ duration: 0.5 }}
                    />
                ))}
                </div>
            </div>

        </Modal>
    )
}

export default RequestService
