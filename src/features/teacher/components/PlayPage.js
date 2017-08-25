import React from 'react';
import Page from '../../common/components/Page';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import Button from '../../common/components/Button';

import '../styles/PlayPage.css';

const PlayPage = () => (
  <Page color="#22A59A">
    <div className="play-page">
      <div className="play-page-header">
        <h1>¿Están Listos?</h1>
        <QRCode value={`${window.location.href}estudiante/ingresar`} />
      </div>
      <div className="play-page-body">
        <div className="play-page-emojis">
          😀 😃 😄 😁
        </div>
        <Link to="/juego">
          <Button text="A jugar" />
        </Link>
      </div>
    </div>

  </Page>
);


export default PlayPage;
