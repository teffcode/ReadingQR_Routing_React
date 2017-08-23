import React from 'react';
import QRCode from 'qrcode.react';

const QrCodePage = () =>
  <QRCode value={`${window.location.href}estudiante/ingresar`} />;

export default QrCodePage;
