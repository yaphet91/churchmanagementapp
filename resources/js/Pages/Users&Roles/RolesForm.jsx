import CheckboxTwo from '@/Components/Checkboxes/CheckboxTwo';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import Modal from '@/Components/Modals/Modal'
import React from 'react'
import { useTranslation } from 'react-i18next';

const RolesForm = ({ isOpen, onClose }) => {
    const [role, setRole] = React.useState({
        title: '',
        description: ''
    });

    const [errors, setErrors] = React.useState({});
    const { t } = useTranslation();
    const handleInputChange = (key, value) => {
        setRole({ ...role, [key]: value });
    }
    return (
        <Modal show={isOpen} onClose={onClose} maxWidth='4xl' maxHeight='h-[90vh]'>

            <h1 className='text-2xl font-bold p-6'>Add Role</h1>

            <form className='p-5 relative overflow-auto max-h-[500px]'>
                <div className='mb-5'>
                    <div className='flex-1 mt-6 md:mt-0'>
                        {!errors?.title
                            ? <InputLabel htmlFor="title" value={t("Role Title")} />
                            : <InputError message={errors?.title} />
                        }
                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={role.title}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            // onChange={(e) => setTitle(e.target.value)}
                            onChange={(e) => handleInputChange('title', e.target.value)}

                        />
                    </div>
                </div>

                <div className='mb-5'>
                    <label htmlFor='description' className='block'>Description</label>
                    <textarea id='description' name='description' className='dark:border-gray-600 dark:bg-form-input focus:border-indigo-500 focus:ring-indigo-500 p-2 border border-gray-400 rounded-md w-full'></textarea>
                </div>

                <div>
                    <h1 className='font-bold text-2xl text-blue-300'>Role Permissions</h1>
                </div>
                <div className='p-4'>
                    <h2 className='py-2 font-semibold'>Event</h2>
                    <div className='grid grid-cols-3 gap-3 justify-between'>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="view_people"
                                label={t('View')}
                                onChange={() => handleInputChange('view_people', !role.view_people)}
                                checked={role.view_people}
                                name='view_people'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="add_people"
                                label={t('Add')}
                                onChange={() => handleInputChange('add_people', !role.add_people)}
                                checked={role.add_people}
                                name='add_people'
                            />

                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="edit_people"
                                label={t('Edit')}
                                onChange={() => handleInputChange('edit_people', !role.edit_people)}
                                checked={role.edit_people}
                                name='edit_people'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="delete_people"
                                label={t('Delete')}
                                onChange={() => handleInputChange('delete_people', !role.delete_people)}
                                checked={role.delete_people}
                                name='delete_people'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="sms_people"
                                label={t('SMS')}
                                onChange={() => handleInputChange('sms_people', !role.sms_people)}
                                checked={role.sms_people}
                                name='sms_people'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="email_people"
                                label={t('Email')}
                                onChange={() => handleInputChange('email_people', !role.email_people)}
                                checked={role.email_people}
                                name='email_people'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="notify_people"
                                label={t('Notification')}
                                onChange={() => handleInputChange('notify_people', !role.notify_people)}
                                checked={role.notify_people}
                                name='notify_people'
                            />
                        </div>

                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="export_people"
                                label={t('Export')}
                                onChange={() => handleInputChange('export_people', !role.export_people)}
                                checked={role.export_people}
                                name='export_people'
                            />
                        </div>

                    </div>



                </div>

                <div className='p-4'>
                    <h2 className='py-2 font-semibold'>Group</h2>
                    <div className='grid grid-cols-3 gap-3 justify-between'>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="view_group"
                                label={t('View')}
                                onChange={() => handleInputChange('view_group', !role.view_group)}
                                checked={role.view_group}
                                name='view_group'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="add_group"
                                label={t('Add')}
                                onChange={() => handleInputChange('add_group', !role.add_group)}
                                checked={role.add_group}
                                name='add_group'
                            />

                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="edit_group"
                                label={t('Edit')}
                                onChange={() => handleInputChange('edit_group', !role.edit_group)}
                                checked={role.edit_group}
                                name='edit_group'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="delete_group"
                                label={t('Delete')}
                                onChange={() => handleInputChange('delete_group', !role.delete_group)}
                                checked={role.delete_group}
                                name='delete_group'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="add_people_to_group"
                                label={t('Add People to Group')}
                                onChange={() => handleInputChange('add_people_to_group', !role.add_people_to_group)}
                                checked={role.add_people_to_group}
                                name='add_people_to_group'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="remove_people_from_group"
                                label={t('Remove People from Group')}
                                onChange={() => handleInputChange('remove_people_from_group', !role.remove_people_from_group)}
                                checked={role.remove_people_from_group}
                                name='remove_people_from_group'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="notify_group"
                                label={t('Notification')}
                                onChange={() => handleInputChange('notify_group', !role.notify_group)}
                                checked={role.notify_group}
                                name='notify_group'
                            />
                        </div>

                        

                    </div>



                </div>

                <div className='p-4'>
                    <h2 className='py-2 font-semibold'>Event</h2>
                    <div className='grid grid-cols-3 gap-3 justify-between'>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="view_event"
                                label={t('View')}
                                onChange={() => handleInputChange('view_event', !role.view_event)}
                                checked={role.view_event}
                                name='view_event'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="add_event"
                                label={t('Add')}
                                onChange={() => handleInputChange('add_event', !role.add_event)}
                                checked={role.add_event}
                                name='add_event'
                            />

                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="edit_event"
                                label={t('Edit')}
                                onChange={() => handleInputChange('edit_event', !role.edit_event)}
                                checked={role.edit_event}
                                name='edit_event'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="delete_event"
                                label={t('Delete')}
                                onChange={() => handleInputChange('delete_event', !role.delete_event)}
                                checked={role.delete_event}
                                name='delete_event'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="sms_event"
                                label={t('SMS')}
                                onChange={() => handleInputChange('sms_event', !role.sms_event)}
                                checked={role.sms_event}
                                name='sms_event'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="email_event"
                                label={t('Email')}
                                onChange={() => handleInputChange('email_event', !role.email_event)}
                                checked={role.email_event}
                                name='email_event'
                            />
                        </div>
                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="notify_event"
                                label={t('Notification')}
                                onChange={() => handleInputChange('notify_event', !role.notify_event)}
                                checked={role.notify_event}
                                name='notify_event'
                            />
                        </div>

                        <div className='w-3/5'>
                            <CheckboxTwo
                                id="export_event"
                                label={t('Export')}
                                onChange={() => handleInputChange('export_event', !role.export_event)}
                                checked={role.export_event}
                                name='export_event'
                            />
                        </div>

                    </div>



                </div>


               
            </form>
            <div className='absolute m-3 flex items-end justify-end bottom-0 right-0'>
                <button className='p-2 bg-blue-500 text-white rounded-md'>Add Role</button>
            </div>
        </Modal>
    )
}

export default RolesForm
