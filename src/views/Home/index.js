import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
import { Container, Content, FilterArea, Title } from './styles';
import { Link } from 'react-router-dom';
// import PageDefault from '../../components/PageDefault';


const Home = () => {
    const [filterActived, setFilterActived] = useState('today');
    const [tasks, setTasks] = useState([]); //armazenamento de tarefas
    const [lateCount, setLateCount] = useState();


    const LoadTasks = useCallback(async () => {
        await api.get(`/task/filter/${filterActived}/00-00-00-00-00-00`)
            .then(response => {
                setTasks(response.data);
            })
    }, [filterActived]);


    //quantidade tarefas atrasadas
    const lateVerify = useCallback(async () => {
        await api.get(`/task/filter/late/00-00-00-00-00-00`)
            .then(response => {
                setLateCount(response.data.length);
            });
    }, []);


    const Notification = useCallback(() => {
        setFilterActived('late');
    }, [])

    useEffect(() => {
        LoadTasks();
        lateVerify();
    }, [filterActived, LoadTasks, lateVerify]);



    return (
        <>
            <Container>
                <Header lateCount={lateCount} clickNotification={Notification} />
                <FilterArea>
                    <button type="button" onClick={() => setFilterActived("all")}>
                        <FilterCard title="Todos" actived={filterActived === 'all'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("today")}>
                        <FilterCard title="Hoje" actived={filterActived === 'today'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("week")}>
                        <FilterCard title="Semana" actived={filterActived === 'week'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("month")}>
                        <FilterCard title="Mês" actived={filterActived === 'month'} />
                    </button>
                    <button type="button" onClick={() => setFilterActived("year")}>
                        <FilterCard title="Ano" actived={filterActived === 'year'} />
                    </button>
                </FilterArea>

                <Title>

                    <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
                </Title>

                <Content>
                    {tasks.map(task => (
                        <Link key={task._id} to={`/task/${task._id}`}>
                            < TaskCard type={task.type} title={task.title} when={task.when} done={task.done} />
                        </Link>
                    ))
                    }

                </Content>

            </Container>

            <Footer />

        </>
    )
}

export default Home;