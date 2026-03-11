import React, { useEffect, useState } from 'react';
import GuestAdminLayout from '@/Layouts/GuestAdminLayout';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import PrimaryButton from '@/Components/UI/PrimaryButton';
import TextInput2 from '@/Components/Forms/TextInput2';
import { Head, useForm, Link } from '@inertiajs/react';
import { getTitleOptions2 } from '@/data/formData';
import { useTranslation } from 'react-i18next';
import AutoComplete3 from '@/Components/Forms/AutoComplete/AutoComplete3';

export default function AdminRegister() {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [passwordError, setPasswordError] = useState('');
    const titleOptions2 = getTitleOptions2(t);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const isStrongPassword = (password) => {
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        return regex.test(password);
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setData('password', password);
        if (!isStrongPassword(password)) {
            setPasswordError("Password must be at least 8 characters long and include a mix of upper and lower case letters and numbers.");
        } else {
            setPasswordError('');
        }
    };

    const submit = (e) => {
        e.preventDefault();
        if (!isStrongPassword(data.password)) {
            setPasswordError("Password is not strong enough.");
            return;
        }
        // post(route('admin.register'));

        post(route('admin.register'), {
            onSuccess: (page) => {
                console.log(page);
                // Dispatch the admin data to the Redux store or use any other state management
                dispatch(addAdminDetail(page.props.admin));
                Inertia.visit('/admin/dashboard');

            },
        });
    };

    return (
        <GuestAdminLayout>
            <Head title="Admin Register" />

            <div className='pb-4'>
                <h1 className='text-4xl font-bold '>Admin Register</h1>
            </div>

            <form onSubmit={submit}>
                <div className=' items-center justify-center my-3 md:mt-0'>
                    {!errors?.title
                        ? <InputLabel htmlFor="title" value={t("Title")} />
                        : <InputError message={errors?.title} className='mb-2 text-red-700' />
                    }
                    <AutoComplete3
                        id="title"
                        name="title"
                        options={titleOptions2}
                        value={data.title}
                        onChange={(e) => setData('title', e)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput2
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput2
                        id="phone"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput2
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput2
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handlePasswordChange}
                        required
                    />

                    <InputError message={errors.password || passwordError} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput2
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('admin.login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing || passwordError}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestAdminLayout>
    );
}
