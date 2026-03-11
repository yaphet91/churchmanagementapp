import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/UI/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import AnastasiaLogo from '@/assets/images/logos/anastasia_logo.png';
export default function AdminVerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.verification.send'));
    };

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center  bg-gray-100">
            {/* <Head title="Email Verification" /> */}
            <div className='w-[60%] h-[70%] p-8 border border-gray-400 bg-gray-300 rounded-lg flex flex-col items-center justify-center'>
                <img src={AnastasiaLogo} alt="logo" className="h-20 -top-5" />

                <div className="text-4xl font-bold my-4">Verify Email</div>

                <div className="m-8 text-md text-gray-600">
                    Thanks for signing up as an Admin! Before getting started, could you verify your email address by clicking on the
                    link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                </div>

                {status === 'verification-link-sent' && (
                    <div className="my-6 font-medium text-sm text-green-600">
                        A new verification link has been sent to the email address you provided during registration.
                    </div>
                )}

                <form onSubmit={submit} className='flex flex-col gap-4'>
                    <PrimaryButton disabled={processing} className='h-12 flex items-center justify-center'>
                        {processing ? 'Sending...' : 'Resend Verification Email'}
                    </PrimaryButton>

                    <Link
                        href={route('admin.logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Log Out
                    </Link>
                </form>

            </div>
        </div>
    );
}
