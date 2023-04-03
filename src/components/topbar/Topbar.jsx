import "./topbar.scss"

import {Person, Mail} from '@mui/icons-material';


export default function Topbar() {
  return (
  
    <div className="topbar">
      <div className = "left">
        <a href="#intro" className="logo"> Délicia</a>
      

        <div className="itemContainer">
       <Person className = "icon"/>
       <span>+254758950136</span>
      </div>
      <div className="itemContainer">
      <Mail className = "icon"/>
       <span>deliraduk@gmail.com/delicia.iradukunda@strathmore.edu</span>
      </div>
      </div>
      
     
      <div className="right">
        
      </div>

    </div>
  )
}
