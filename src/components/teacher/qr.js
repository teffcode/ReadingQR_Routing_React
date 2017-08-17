import React from 'react';
import QRCode from 'qrcode.react';

const Code_qr = () => (
    <QRCode value={`${window.location.href}start`} />
);

export default Code_qr;
