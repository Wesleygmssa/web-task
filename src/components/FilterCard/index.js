import React from 'react';
import filter from '../../assets/filter.png';

import { Container } from './styles';

const FilterCard = ({ title, actived }) => {
    return (
        <Container actived={actived}>
            <img src={filter} alt="filtro" />
            <span>{title}</span>
        </Container>
    )
}

export default FilterCard;