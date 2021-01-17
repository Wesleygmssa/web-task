import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';
import { Container, Form, TypeIcon } from './styles';


const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();


    const lateVerify = useCallback(async () => {
        await api.get(`/task/filter/late/00-00-00-00-00-00`)
            .then(response => {
                setLateCount(response.data.length);
            });
    }, []);



    useEffect(() => {
        lateVerify();
    }, [lateVerify]);



    return (
        <Container>
            <Header lateCount={lateCount} clickNotification={Notification} />
            <Form>
                <TypeIcon>
                    {TypeIcons.map((icon, index) => (
                        index > 0 &&
                        <button type="button" onClick={() => (setType(index))}>
                            <img
                                src={icon} alt="Tipo da tarefa"
                                className={type && type !== index && 'inative'}
                            />
                        </button>
                    ))}
                </TypeIcon>
            </Form>
            <Footer />
        </Container>
    )
}

export default Task;