import axios from 'axios';
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

    return;
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await axios.get(`${process.env.REACT_APP_API_HOST}/todos`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });

    if (resp.status === 200) {
      setData(resp.data);
    }
  };

  return (
    <div className="list">
      <div className="search-container">
        <input placeholder="Search..." className="searchbar" />
        <button type="button" className="search-btn">
          Search
        </button>
      </div>

      <DataList data={data} />
    </div>
  );
};

export default List;
