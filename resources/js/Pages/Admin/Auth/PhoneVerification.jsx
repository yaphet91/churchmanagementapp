import React, { useState } from 'react';
import axios from 'axios';

const PhoneVerification = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationSent, setVerificationSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const sendVerificationCode = async () => {
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const response = await axios.post('/send-code', { phone_number: phoneNumber });
            setVerificationSent(true);
            setMessage(response.data.message);
        } catch (error) {
            setError(error.response?.data?.phone_number?.[0] || 'Failed to send verification code');
        } finally {
            setLoading(false);
        }
    };

    const verifyCode = async () => {
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const response = await axios.post('/verify-code', { code });
            setMessage(response.data.message);
        } catch (error) {
            setError(error.response?.data?.error || 'Invalid verification code');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Phone Verification</h2>
            {!verificationSent ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <button onClick={sendVerificationCode} disabled={loading}>
                        {loading ? 'Sending...' : 'Send Verification Code'}
                    </button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Enter verification code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button onClick={verifyCode} disabled={loading}>
                        {loading ? 'Verifying...' : 'Verify Code'}
                    </button>
                </div>
            )}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default PhoneVerification;
