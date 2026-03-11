import { useSelector } from "react-redux";

export default function InputLabel({ value, className = '', children, ...props }) {
    const language = useSelector((state) => state.language.language);

    return (
        <label {...props} className={`block font-medium ${language === 'en'? 'text-sm' : 'text-md'} text-gray-600 dark:text-blue-400` + className}>
            {value ? value : children}
        </label>
    );
}
