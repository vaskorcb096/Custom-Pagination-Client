import { Pagination, PaginationItem } from "@material-ui/lab";
import React from "react";
import PaginationTable from "./PaginationTable";
import { makeStyles } from "@material-ui/core";

const Pageination = (props) => {
  let { page, totalPages, userData, setTotalPages, handleChange ,wordEntered,filteredData} = props;


  const useStyles = makeStyles((theme) => ({
    selected: {
      backgroundColor: "transparent",
      color: "#19D5C6",
    },

    root: {
      "& .MuiPaginationItem-icon": {
        color: "#19D5C6",
      },
      
    },
  }));
  const classes = useStyles();
  let preUser,NextUser;

  if(userData.users) {
    preUser=userData.currentPage*userData.users.length;
    preUser+=1;
   NextUser=preUser+userData.users.length-1;
  
  }

  return (
    <div>
      <PaginationTable setTotalPages={setTotalPages} userData={userData} page={page}wordEntered={wordEntered} filteredData={filteredData}></PaginationTable>
   
      <span className="ml-5 d-flex justify-content-around">
        {userData.users && <span className="showingPage">

        Showing {  preUser} to {NextUser} of {userData.totalItems} entires
        </span> }
              
        <Pagination  shape="rounded"  count={totalPages} size='large'  page={page} onChange={handleChange} variant="outlined"className={classes.root}
          renderItem={(item) => (
            <PaginationItem {...item}classes={{ selected: classes.selected }}/>
          )}
        />

      </span>
    </div>
  );
};

export default Pageination;
