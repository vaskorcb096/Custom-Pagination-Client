import React, { useEffect, useState } from "react";
import Pageination from "./../Pageination/Pageination";
import './Home.css'
import ShowEntries from './../ShowEntires/ShowEntries';
import SearchUser from "../SearchUser/SearchUser";
import  Axios  from 'axios';

const Home = () => {

const [userData, setUserData] = useState([]);
const [totalPages,setTotalPages]=useState(0);
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");
const [page, setPage] = useState(1);
const [size,setSize]=useState(10);

const handleChange = (event, value) => {
       setPage(value);
};
useEffect(() => {
  Axios.get(`http://localhost:8080/api/user/getUser?page=${page-1}&size=${size}`).then((response) => {
    console.log(response.data);
    setUserData(response.data);
    setTotalPages(userData.totalPages);
  });
}, [userData.currentPage,page,size]);

console.log("home",wordEntered);
  return (
    <div>
      <div className="container container-fluid">
        <h4 className="pt-3 custompagination">Custom Pagination</h4>
        <div className="d-flex justify-content-between">
          <ShowEntries totalItems={userData.totalItems}size={size} setSize={setSize}></ShowEntries>
          <div>
           <SearchUser userData={userData}page={page} handleChange={handleChange}wordEntered={wordEntered} setFilteredData={setFilteredData} setWordEntered={setWordEntered}></SearchUser>
          </div>
        </div>
        <div>
          <Pageination page={page} totalPages={totalPages} userData={userData} setTotalPages={setTotalPages} handleChange={handleChange} wordEntered={wordEntered} filteredData={filteredData}></Pageination>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
