import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { Container, TopCard, BottomCard } from './styles';

import typeIcons from '../../utils/typeIcons';

const TaskCard = ({ type, title, when, done }) => {

    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format(new Date(when), 'HH:mm'));

    return (
        <Container done={done}>
            <TopCard>
                <img src={typeIcons[type]} alt="" />
                <h3>{title}</h3>
            </TopCard>
            <BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </BottomCard>
        </Container>
    )
}

export default TaskCard;