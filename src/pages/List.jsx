import { useEffect, useState } from 'react';
import DataList from '../components/DataList';
import '../styles/List.scss';


const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //TODO: GET DATA FROM SERVER
    }, [])

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