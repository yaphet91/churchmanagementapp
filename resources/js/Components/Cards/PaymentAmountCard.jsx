import { motion } from 'framer-motion';

const PaymentAmountCard = ({ onClick, amount, animate, transition, paymentAmount }) => {
    return (
        <motion.div className={`h-20 shadow-md flex flex-col items-center justify-center border cursor-pointer
        hover:bg-slate-500
        rounded-md bg-slate-700 overflow-hidden ${paymentAmount === amount ? 'border-yellow-400 border-2' : ''}`}
            onClick={onClick}
            animate={animate}
            transition={transition}
        >
            <h2 className='text-lg font-semibold uppercase p-2 text-white'>{amount} AED</h2>
        </motion.div>
    );
};

export default PaymentAmountCard;