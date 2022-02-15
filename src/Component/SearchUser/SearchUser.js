import React from 'react';
import  Paper  from '@material-ui/core/Paper';


const SearchUser = ({userData,page,wordEntered,setWordEntered,setFilteredData}) => {

const handleFilter = (event) => {
    console.log("asf",userData,"sadf",event);
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = userData.users.filter((value) => {
        console.log(value.FullName);
        if(value.FullName!==null){
            return value.FullName.toLowerCase().includes(searchWord.toLowerCase())

        }else return null;
      
    });
  
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

  };
    return (
        
             <div className="text-center search">
               
               <Paper elevation={3}>
               <input
               className="no-outline"
               type="search"
               placeholder="Search By username"
               id="username"
               value={wordEntered}
             onChange={handleFilter}
   
             ></input>

                    </Paper>

           <span className="pl-2 search2">
            
           </span>
         </div>
    
    );
};

export default SearchUser;