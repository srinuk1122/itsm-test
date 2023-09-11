import { Route , Routes as Routess } from "react-router-dom";
import DisplayData from "./displyaData";
import CreateData from "./creat";
import DeleteData from "./deleteData";
const Routers = ({displayData,backtoData}) => {

    return(
       <Routess>
                   <Route exact path="/" element={<DisplayData displayData={displayData} />} />
                        <Route exact path="/create" element={<CreateData displayData={displayData}/>} />
                        <Route exact path="/delete" element={<DeleteData />} />

       </Routess>

    )
}
export default Routers