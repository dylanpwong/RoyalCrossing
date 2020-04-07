import React from 'react'

const DropDownUser = (props)=>{

    return(
      
            <ul className={props.dropdownVisible ? "dropdownShown" : "dropdown"}>
                {props.items}
            </ul>
       
    )
}


export default DropDownUser;