import { useEffect } from 'react';
import Checkbox from '@/Components/Checkboxes/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import PrimaryButton from '@/Components/UI/PrimaryButton';
import TextInput2 from '@/Components/Forms/TextInput2';
import { Head, Link, useForm } from '@inertiajs/react';
import { jwtDecode } from 'jwt-decode';
import googleIcon from '../../assets/images/logos/google.png';
import facebookIcon from '../../assets/images/logos/facebook.jpeg';
import lindedinIcon from '../../assets/images/logos/linkedIn.png';
import { useTranslation } from 'react-i18next';

export default function Login({ status, canResetPassword }) {

    const { t } = useTranslation();

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleGoogleLogin = () => {
        window.location.href = '/auth/google';
    };

    const handleFaceLogin = () => {
        window.location.href = '/auth/facebook';
    }
    const handleLinkedinLogin = () => {
        window.location.href = '/auth/linkedin';
    }

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className='pb-10'>
                <h1 className='text-4xl font-bold mb-2 text-indigo-700/[0.8]'>{t('Login')}</h1>
                <p className='text-l font-semibold'>{t('Welcome back to anastasia login and enjoy our services')}</p>
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value={t("Email")} />

                    <TextInput2
                        id="email"
                        type="email"
                        name={t('email')}
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">

                    <InputLabel htmlFor="password" value={t("Password")} />

                    <TextInput2
                        id="password"
                        type="password"
                        name={t("password")}
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block my-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">{t("Remember me")}</span>
                    </label>
                </div>

                <PrimaryButton className="w-full h-12 justify-center text-2xl" disabled={processing}>
                    Log in
                </PrimaryButton>

                <div className="flex items-center justify-between my-7">
                    <Link
                        href={route('register')}
                        className="underline font-semibold text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    > {t('Register')}
                    </Link>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          {t('Forgot your password ?')}
                        </Link>
                    )}
                </div>
              
                <div id='googleSignInDiv' className="flex justify-center">
                    <a onClick={handleGoogleLogin} className="bg-white h-14 border
                    rounded-lg shadow-2xl hover:shadow-xl transition-shadow tracking-wide duration-300 ease-in-out hover:scale-95">
                        <img src={googleIcon} alt='Sign in with google' className='h-10 w-28' />
                    </a>
                    {/* <a onClick={handleFaceLogin} className="bg-white h-14 border
                    rounded-lg shadow-2xl hover:shadow-xl transition-shadow tracking-wide duration-300 ease-in-out hover:scale-95">
                        <img src={facebookIcon} alt='Sign in with facebook' className='h-12 w-28' />
                    </a>
                    <a onClick={handleLinkedinLogin} className="bg-white h-14 border
                     rounded-lg shadow-2xl hover:shadow-xl transition-shadow tracking-wide duration-300 ease-in-out hover:scale-95">
                        <img src={lindedinIcon} alt='Sign in with facebook' className='h-12 w-28' />
                    </a> */}
                </div>

            </form>
        </GuestLayout>
    );
}
