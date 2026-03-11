import React, {useState, useEffect} from 'react'
import CloseIcon from "@/Components/UI/CloseIcon";
import TextInput from "../Forms/TextInput";
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import { addNewChurch, setNewChurchErrors, setNewChurchValidation } from '@/features/form/newChurchSlice';
import { useSelector, useDispatch } from 'react-redux';
import validateNewChurch from '@/Pages/Registration/MultiStepperForm/Validations/addNewChurchValidation';
import { useTranslation } from 'react-i18next';

const AddChurchModal = ({ closeModal, onChurchSubmitted }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [attemptedToProceed, setAttemptedToProceed] = useState(false);

    const [diocese, setDiocese] = React.useState('');
    const [surrounding, setSurrounding] = React.useState('');
    const [churchName, setChurchName] = React.useState('');
    const [churchNamePrefix, setChurchNamePrefix] = React.useState('');

    const newChurch = useSelector((state) => state.newChurch.value);
    const newChurchErrors = useSelector((state) => state.newChurch.errors);
    const isNewChurchValid = useSelector((state) => state.newChurch.isValid);

    const churchDetails = {
        diocese,
        surrounding,
        churchName,
        churchNamePrefix,
    }

    useEffect(() => {
        setDiocese(newChurch.diocese)
        setSurrounding(newChurch.surrounding)
        setChurchName(newChurch.churchName)
        setChurchNamePrefix(newChurch.churchNamePrefix)
    }, [])

    useEffect(() => {
        dispatch(addNewChurch({
            ...newChurch,
            diocese: diocese,
            surrounding: surrounding,
            churchName: churchName,
            churchNamePrefix: churchNamePrefix,
        }));

    }, [diocese, surrounding, churchName, churchNamePrefix])


    useEffect(() => {
        if (attemptedToProceed) {
            const { isValid, stepErrors } = validateNewChurch(churchDetails);
            dispatch(setNewChurchValidation({ isValid, errors: stepErrors }));
            dispatch(setNewChurchErrors(stepErrors));
        }
    }, [attemptedToProceed, diocese, surrounding, churchName, churchNamePrefix, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAttemptedToProceed(true); // Trigger validation
        const { isValid, stepErrors } = validateNewChurch({ diocese, surrounding, churchName, churchNamePrefix });
        dispatch(setNewChurchValidation({ isValid, errors: stepErrors }));

        if (isValid) {
            const churchData = {
                church_name: churchName,
                surrounding,
                diocese,
                church_name_prefix: churchNamePrefix,
                // Add other optional fields if necessary
            };

            try {
                console.log('Church details:', churchData);
                const response = await axios.post('/churches', churchData);
                console.log('New church added:', response.data);
                setAttemptedToProceed(false);
                onChurchSubmitted(true);
                closeModal();
            }
            catch (error) {
                console.error('Error adding new church:', error);
            }
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setAttemptedToProceed(true); // Trigger validation
    //     const { isValid, stepErrors } = validateNewChurch({ diocese, surrounding, churchName, churchNamePrefix });
    //     dispatch(setNewChurchValidation({ isValid, errors: stepErrors }));

    //     if (isValid) {
    //         dispatch(addNewChurch({
    //             diocese,
    //             surrounding,
    //             churchName,
    //             churchNamePrefix,
    //         }));

    //         try {
    //             console.log('Church details:', churchDetails);
    //             const response = await axios.post('/churches', churchDetails);
    //             console.log('New church added:', response.data);
    //         }
    //         catch (error) {
    //             console.error('Error adding new church:', error);
    //         }

    //         setAttemptedToProceed(false);
    //         onChurchSubmitted(true);// Trigger validation
    //         closeModal(); // Close modal only if the submission is valid
    //     }
    // };
      
       
    

    return (
        <div
            className="relative z-50"
            aria-labelledby="add-church-dialog"
            role="dialog"
            aria-modal="true"
        >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                <div className="flex min-h-full justify-center px-2 py-12 text-center ">
                    <div className="relative w-[75%] sm:w-[55%] min-h-[60vh] rounded-2xl bg-gray-200 dark:bg-boxdark
                     text-slate-100 text-left shadow-xl transition-all">
                        <div className="px-5 py-4">
                            <button
                                type="button"
                                className="rounded-md p-1 inline-flex items-center justify-center text-gray-400
                                 hover:bg-gray-700 focus:outline-none absolute top-2 right-2"
                                onClick={closeModal}
                            >
                                <span className="sr-only">Close menu</span>
                                <CloseIcon />
                            </button>

                            {/* here i add my things  */}
                            <form action='#'>
                                <h2 className='text-2xl font-semibold text-gray-600 dark:text-gray-300 flex items-center justify-center mt-5'>
                                    {t('Add Your Church In Eritrea')}</h2>
                                <div className="p-10 flex flex-col space-y-5">
                                    <div className="flex-1">
                                        <label className={'block px-1 text-sm text-gray-600 dark:text-gray-300'}
                                            htmlFor="churchPrefix">
                                            {t('Church Name Prefix (eg. Debre Bsrat) - Optional')}
                                        </label>
                                        <TextInput
                                            id="churchPrefix"
                                            type="text"
                                            name="churchPrefix"
                                            value={churchNamePrefix}
                                            className="mt-3 block w-full text-gray-700 dark:text-gray-400 text-lg"
                                            autoComplete="email"
                                            isFocused={true}
                                            onChange={(e) => setChurchNamePrefix(e.target.value)}
                                        />
                                        {/* <InputError message={errors?.phone} /> */}
                                    </div>

                                    <div className="flex-1">
                                        {!newChurchErrors?.churchName
                                            ? <label className={'block px-1 text-sm text-gray-600 dark:text-gray-300'} htmlFor="churchName">
                                                {t('Church Name (eg. St. Gebriel)')}
                                            </label>
                                            : <label className={'block px-1 text-sm text-red-700'} htmlFor="churchName">
                                                {newChurchErrors?.churchName}
                                            </label>
                                        }
                                        <TextInput
                                            id="churchName"
                                            type="text"
                                            name="churchName"
                                            value={churchName}
                                            className="mt-3 block w-full text-gray-700 dark:text-gray-400 text-lg"
                                            autoComplete="email"
                                            isFocused={true}
                                            onChange={(e) => setChurchName(e.target.value)}
                                        />
                                        {/* <InputError message={errors?.phone} /> */}
                                    </div>


                                    
                                    <div className="flex-1">
                                        {!newChurchErrors?.surrounding
                                            ? <label className={'block px-1 text-sm text-gray-600 dark:text-gray-300'} htmlFor="surrounding">
                                                {t('Surrounding Name (eg. Akria)')}
                                            </label>
                                            : <label className={'block px-1 text-sm text-red-700'} htmlFor="surrounding">
                                                {newChurchErrors?.surrounding}
                                            </label>
                                        }      
                                        <TextInput
                                            id="surrounding"
                                            type="text"
                                            name="surrounding"
                                            value={surrounding}
                                            className="mt-3 block w-full text-gray-700 dark:text-gray-400 text-xl"
                                            autoComplete="email"
                                            isFocused={true}
                                            onChange={(e) => setSurrounding(e.target.value)}
                                        />
                                        {/* <InputError message={errors?.phone} /> */}
                                    </div>
                                    
                                    <div className="flex-1">
                                        {!newChurchErrors?.diocese
                                            ? <label className={'block px-1 text-sm text-gray-600 dark:text-gray-300'} htmlFor="diocese">
                                                {t('Diocese Name (eg. Asmara Diocese)')}
                                            </label>
                                            : <label className={'block px-1 text-sm  text-red-700'} htmlFor="diocese">
                                                {newChurchErrors?.diocese}
                                            </label>
                                        }
                                        <TextInput
                                            id="diocese"
                                            type="text"
                                            name="diocese"
                                            value={diocese}
                                            className="mt-3 block w-full text-gray-700 dark:text-gray-400 text-lg"
                                            autoComplete="email"
                                            isFocused={true}
                                            onChange={(e) => setDiocese(e.target.value)}
                                        />
                                        {/* <InputError message={errors?.phone} /> */}
                                    </div>
                                   
                                    <div>
                                        <button
                                            type='button'
                                            onClick={handleSubmit}
                                            className={`p-2 ${isNewChurchValid ? ' hover:bg-blue-500  bg-blue-900': 'bg-slate-500'} w-full mt-3 rounded-md`}
                                        >
                                            {t('Submit')}
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddChurchModal;