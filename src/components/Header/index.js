import React from 'react';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import { Container, LeftSide, RightSide } from './styles';

const Header = ({ lateCount, clickNotification }) => {
    return (
        <Container>
            <LeftSide>
                <img src={logo} alt="Logo" />
            </LeftSide>
            <RightSide>
                <a href="#">INÍCIO</a>
                <span className="dividir"></span>
                <a href="#">NOVA TAREFA</a>
                <span className="dividir"></span>
                <a href="#">SINCRONIZAR CELULAR</a>
                <span className="dividir"></span>
                <button id="notification" onClick={clickNotification}>
                    <img src={bell} alt="notificação" />
                    <span>{lateCount}</span>
                </button>
            </RightSide>
        </Container>
    )
}

export default Header;