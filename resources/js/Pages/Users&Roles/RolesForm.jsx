import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import Modal from '@/Components/Modals/Modal';
import React, { useState } from 'react';

const RolesForm = ({ isOpen, onClose, onRoleCreated }) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (key, value) => {
        setForm((current) => ({ ...current, [key]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setErrors({});

        try {
            await axios.post('/admin/api/roles', form);
            setForm({ title: '', description: '' });
            onRoleCreated?.();
            onClose();
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors || {});
            } else {
                console.error('Error creating role:', error);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth="2xl">
            <form onSubmit={handleSubmit} className="space-y-5 p-6">
                <div>
                    <h2 className="text-2xl font-semibold">Add Role</h2>
                    <p className="mt-1 text-sm text-slate-500">Create a role record for testing user and permission screens.</p>
                </div>

                <div>
                    {!errors.title && !errors.name ? (
                        <InputLabel htmlFor="title" value="Role Name" />
                    ) : (
                        <InputError message={errors.title?.[0] || errors.name?.[0]} />
                    )}
                    <TextInput
                        id="title"
                        type="text"
                        value={form.title}
                        className="mt-1 block w-full"
                        onChange={(event) => handleChange('title', event.target.value)}
                        required
                    />
                </div>

                <div>
                    <InputLabel htmlFor="description" value="Description" />
                    <textarea
                        id="description"
                        value={form.description}
                        onChange={(event) => handleChange('description', event.target.value)}
                        className="mt-1 block w-full rounded-md border border-slate-300 p-3 dark:border-slate-700 dark:bg-slate-900"
                        rows="4"
                    />
                </div>

                <div className="flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="rounded-md border border-slate-300 px-4 py-2 text-sm">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900"
                    >
                        {submitting ? 'Saving...' : 'Save Role'}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default RolesForm;
