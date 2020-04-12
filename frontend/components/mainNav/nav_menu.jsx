import React from 'react'
import NavElement from './nav_element';
import NavEleContainer from './nav_ele_Container';



class NavMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let items = ["Read", "Write"];
        let NavItems = items.map((ele,idx)=>{
            return <NavEleContainer key={idx} content={ele}/>
        })
       
       // debugger
        return(
            <div className="navElementsMenu"> {/** the nav menu */}
                <ul className="MainNavUL"> {/** Holds the li elements */}
                {NavItems}
                </ul>
            </div>
        );
    }
}
export default NavMenu;