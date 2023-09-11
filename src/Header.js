import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className='menu-container'>
            <Link to="/" className="logo">
                <p className='nav-element'>data</p>
             </Link>
             <Link to="/create" className="logo">
                <p className='nav-element'>create</p>
             </Link>
             <Link to="/delete" className="logo">
                <p className='nav-element'>delete</p>
             </Link> 
        
         
      </div>
     
    )
}
export default Header;