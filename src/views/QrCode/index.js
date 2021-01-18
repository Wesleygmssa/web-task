import React, { useState, useCallback, useEffect } from 'react';
import { Container } from './styles';

//NOSSOS COMPONENTES

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const QrCode = () => {
    return (
        <Container>
            <Header></Header>
            <h1>QrCode</h1>
            <Footer></Footer>
        </Container>
    )
}

export default QrCode;