import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';
import { Container, Form, TypeIcon, Input, TextArea, Options, Save } from './styles';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { Redirect } from 'react-router-dom';


const Task = () => {
    const [redirect, setRedirect] = useState(false);
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId] = useState();
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


    const location = useLocation();
    const LoadTaskDetails = useCallback(async () => {
        await api.get(`${location.pathname}`)
            .then(response => {
                setType(response.data.type)
                setId(response.data._id)
                setDone(response.data.done)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHour(format(new Date(response.data.when), 'HH:mm'))
            })
    }, [location.pathname])


    //salvando banco de dados ok
    const save = useCallback(async () => {
        //validação dos dados
        if (!title) {
            return alert('Você precisa informar o título da tarefa');
        } else if (!description) {
            return alert('Você precisa informar o descrição da tarefa');
        } else if (!type) {
            return alert('Você precisa informar o tipo da tarefa');
        } else if (!date) {
            return alert('Você precisa definir a data da tarefa ');
        } else if (!hour) {
            return alert('Você precisa definir a hora da tarefa')
        }


        if (id) {
            await api.put(`${location.pathname}`, {
                macaddress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() =>
                setRedirect(true)
            ).catch(response => {
                alert(response.data.error)
            })

        } else {
            await api.post('/task', {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() =>
                setRedirect(true)
            ).catch(response => {
                alert(response.data.error)
            })
        }

    },
        [
            macaddress,
            type,
            title,
            description,
            date,
            hour,
            id,
            done,
            location.pathname
        ]);


    const Remove = useCallback(async () => {
        const res = window.confirm('Deseja realmente remover a tarefa?')
        if (res) {
            await api.delete(`${location.pathname}`).then(() => {
                setRedirect(true)
            })
        } else {

        }
    }, [])

    useEffect(() => {
        lateVerify();
        LoadTaskDetails();
    }, [lateVerify, LoadTaskDetails]);



    return (
        <Container>
            {redirect && <Redirect to="/" />}
            <Header lateCount={lateCount} clickNotification={Notification} />
            <Form>
                <TypeIcon>
                    {TypeIcons.map((icon, index) => (
                        index > 0 && <button key={icon} type="button" onClick={() => (setType(index))}>
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
                    {id && <button type="button" onClick={Remove}>EXCLUIR</button>}
                </Options>

                <Save>
                    <button
                        type="button" onClick={save}>
                        {id ? 'Editar' : 'Cadastrar nova tarefa'}
                    </button>
                </Save>
            </Form>
            <Footer />
        </Container>
    )
}

export default Task;