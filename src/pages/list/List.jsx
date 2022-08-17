import React from 'react';
import './list.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/Navbar";
import Datatable from "../../components/dataTable/Datatable";


const List = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <NavBar/>
                <Datatable/>
            </div>
        </div>
    );
};

export default List;