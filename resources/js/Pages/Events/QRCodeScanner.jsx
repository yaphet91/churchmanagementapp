import Modal from '@/Components/Modals/Modal';
import React, { useState } from 'react';
// import QrReader from 'react-qr-reader';

const QRCodeScanner = ({ onScanSuccess, isOpen, onClose, }) => {
    const [error, setError] = useState(null);

    const handleScan = data => {
        if (data) {
            onScanSuccess(data);
        }
    };

    const handleError = err => {
        console.error(err);
        setError('Failed to scan QR code. Please try again.');
    };

    return (
        <Modal show={isOpen} onClose={onClose} maxWidth='5xl' maxHeight='h-[90vh]'>
            <h3>Scan Event QR Code</h3>
            {error && <p className="error">{error}</p>}
            {/* <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            /> */}
            
        </Modal>
    );
};

export default QRCodeScanner;
