import React from 'react'

const DropDownUser = (props)=>{

    return(
      
            <ul className={props.dropdownVisible ? "dropdown" : "dropdownShown"}>
                {props.items}
            </ul>
       
    )
}


export default DropDownUser;