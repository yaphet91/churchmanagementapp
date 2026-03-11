import { motion } from 'framer-motion';

const ServiceCard = ({ onClick, service, animate, transition }) => {
    return (
        <motion.div className={`h-32 shadow-md flex flex-col items-center justify-center border cursor-pointer
        gradientBg
        rounded-md hover:bg-slate-700 overflow-hidden`}
            onClick={onClick}
            animate={animate}
            transition={transition}
        >
            <h2 className='text-lg font-semibold uppercase p-2'>{service}</h2>
        </motion.div>
    );
};

export default ServiceCard;