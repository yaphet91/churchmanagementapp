import { motion } from 'framer-motion';

const PaymentReasonCard = ({ onClick, reason, image, animate, transition, paymentReason }) => {
    return (
        <motion.div className={`w-48 h-44 shadow-md flex flex-col items-center justify-center border
        rounded-md bg-slate-700 overflow-hidden ${paymentReason === reason ? 'border-yellow-400 border-2' : ''}`}
            onClick={onClick}
            animate={animate}
            transition={transition}
        >
            <img src={image} className="h-32 w-full object-cover" />
            <h2 className='text-lg font-semibold uppercase p-4'>{reason}</h2>
        </motion.div>
    );
};

export default PaymentReasonCard;