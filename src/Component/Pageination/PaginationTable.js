
const PaginationTable = ({setTotalPages,page,userData,wordEntered,filteredData}) => {
  
  return (
    
        <div  className="table-container">  
        <table>
              <thead>
                <tr>
                 
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
              {wordEntered.length>0 ? filteredData.map((user)=>{
                return (
             
                  <tr  key={user.id}>
                   
                    <td>{user.id}</td>
                    <td>{user.FullName}</td>
                    <td>{user.Email}</td>
                  </tr>
            
                )
              }): userData.users&&userData.users.map((user) => {
                return (
               
                    <tr key={user.id}>
                     
                      <td>{user.id}</td>
                      <td>{user.FullName}</td>
                      <td>{user.Email}</td>
                    </tr>
                )
                 
              })}

              </tbody>
             
            </table>

   
        
      

    
    </div>
  );
};

export default PaginationTable;
