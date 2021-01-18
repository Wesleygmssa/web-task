import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';
import { Container, Form, TypeIcon, Input, TextArea, Options, Save } from './styles';


const Task = () => {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    // const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress] = useState('00-00-00-00-00-00');



    //consulta no banco de dados
    const lateVerify = useCallback(async () => {
        await api.get(`/task/filter/late/00-00-00-00-00-00`)
            .then(response => {
                setLateCount(response.data.length);
            });
    }, []);

    //salvando banco de dados ok
    const save = useCallback(async () => {
        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
        }).then(() =>
            alert('ok')
        ).catch(response => {
            alert(response.data.error)
        })
    }, [macaddress, type, title, description, date, hour]);

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
                <Input>
                    <span>Titulo</span>
                    <input
                        type="text"
                        placeholder="Titilo da tarefa..."
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        value={title} //mudando o estado
                    />
                </Input>

                <TextArea>
                    <span>Descrição</span>
                    <textarea
                        cols="30"
                        rows="5"
                        placeholder="Detalhes da tarefa"
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        value={description} //mudando o estado
                    />
                </TextArea>

                <Input>
                    <span>Data</span>
                    <input
                        type="date"
                        placeholder="Digite o titilo da tarefa"
                        onChange={(e) => {
                            setDate(e.target.value)
                        }}
                        value={date} //mudando o estado

                    />
                </Input>

                <Input>
                    <span>Hora</span>
                    <input
                        type="time"
                        placeholder="Digite o titilo da tarefa"
                        onChange={(e) => {
                            setHour(e.target.value)
                        }}
                        value={hour} //mudando o estado

                    />
                </Input>

                <Options>
                    <div>
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={() => { setDone(!done) }} // verdadeiro ou false
                        />
                        <span>CONCLUIDO</span>
                    </div>
                    <button type="button">EXCLUIR</button>
                </Options>

                <Save>
                    <button
                        type="button" onClick={save}>
                        Salvar
                        </button>
                </Save>
            </Form>
            <Footer />
        </Container>
    )
}

export default Task;