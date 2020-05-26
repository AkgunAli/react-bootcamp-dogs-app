import React from 'react';
import FavoriteActions from "./FavoriteActions";
import propTypes from "prop-types";

import {
    NavLink,Col
} from 'reactstrap';
import {Link} from "react-router-dom";






const Dog = ({id, name, toggle, getStatus,buttonestatus,image}) => {





    return <Col key={id} style={{ margin: "15px" }}>

    
    
    
   
                            <span style={{
                                display: "inline-block",
                                marginRight: "20px"
                            }}>
                              
                              
                  

                              <img  width="300" height="300"  src={image} alt="Card image cap" />

                                <NavLink>
                                <Link to={`/detail/${id}`} >
                                
                               <h4>  {name}</h4> <small> Detaylar için tıklayınız </small>
                                </Link>
                            </NavLink>
                         
                            </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} buttonestatus={buttonestatus } />
                
    </Col>
      
};


Dog.propTypes = {
    name: propTypes.string.isRequired
};

Dog.defaultProps = {
  name: "Dog name Bulunamadı"
};



export default Dog;

