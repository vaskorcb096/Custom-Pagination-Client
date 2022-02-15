import React from 'react';
const ShowEntries = ({setSize,totalItems}) => {
  
    const selectItem=[];
  while(totalItems>=10) {
      console.log(totalItems);
      totalItems/=2;
      if(totalItems>=10)selectItem.push(Math.round(totalItems));
  }
  console.log("srf",selectItem);
  selectItem.sort((a,b)=>{return a-b});

    const handleChange=(event)=>{
        const val=Number(event.target.value)
        setSize(val);
    }
    return (
        
            <div
            style={{ minWidth: "120px", pxbackgroundColor: "red" }}
            className="d-flex justify-content-center"
          >
            <span>show </span>
            <span>
              {"  "}

              <select
               
                style={{ height: "29px", fontSize: "12px" }}
                className="ml-1 pr-1 form-select"
                onChange={handleChange}
              >
                  <option  value="5">5</option>
                  {selectItem.map((mp)=>{
                      return ( <option  value={mp}>{mp}</option>)

                  })}
               
              </select>
            </span>

            <span className="pr-2">entries</span>
          </div>
            
    );
};

export default ShowEntries;