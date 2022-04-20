import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import DataList from '../components/DataList';
import '../styles/List.scss';

const List = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const cookies = new Cookies();
    const token = cookies.get('auth-token');

    useEffect(() => {
        if (!token) {
            navigate('/');
        }

        return;
    })

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        // We have to get the todo's here just don't know the endpoint yet
        const resp = await axios.get(`${process.env.REACT_APP_API_HOST}/todos`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`
            }
        })

        console.log(resp);
    }

    return (
        <div className="list">
            <div className="search-container">
                <input placeholder="Search..." className="searchbar" />
                <button className="search-btn">Search</button>
            </div>

            <DataList data={data} />
        </div>
    )
}

export default List;