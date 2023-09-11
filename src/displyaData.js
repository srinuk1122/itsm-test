const DisplayData = ({displayData}) =>{

    return(
        <div>
        <div>
        <center> <table>
            <tr>
              <th>name</th>
              <th>subject</th>
              <th>address</th>
              <th>phone</th>
              <th>gender</th>
              <th>name</th>
            </tr>

           { displayData.map((el)=>(
                 
               <tr>
                  <td>{el.name}</td>
                  <td>{el.subject}</td>
                  <td>{el.address}</td>
                  <td>{el.dob}</td>
                  <td>{el.phone}</td>
                  <td>{el.gender}</td>
                </tr> 
                  )) }
          </table></center>
          
          </div>
      
    
  </div>
    )
}

export default DisplayData;