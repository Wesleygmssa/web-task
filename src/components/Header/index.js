import React from 'react';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import { Container, LeftSide, RightSide } from './styles';
import { Link } from 'react-router-dom';


const Header = ({ lateCount, clickNotification }) => {
    return (
        <Container>
            <LeftSide>
                <img src={logo} alt="Logo" />
            </LeftSide>
            <RightSide>
                <Link to="/">INÍCIO</Link>
                <span className="dividir"></span>
                <Link to="/task">NOVA TAREFA</Link>
                <span className="dividir"></span>
                <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
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