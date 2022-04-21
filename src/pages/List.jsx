import axios from '../api';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataList from '../components/DataList';
import getToken from '../utils/getToken';
import '../styles/List.scss';

const List = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  });

  if (!token) return null;

  const fetchData = async () => {
    const resp = await axios.get(`${process.env.REACT_APP_API_HOST}/todos`);

    if (resp.status === 200) {
      setData(resp.data);
    }
  };

  const removeTodo = id => {
    setData(data.filter(i => i.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="list">
      <div className="search-container">
        <input placeholder="Search..." className="searchbar" />
        <button type="button" className="search-btn">
          Search
        </button>
      </div>

      <DataList data={data} removeTodoFromList={removeTodo} />
    </div>
  );
};

export default List;
