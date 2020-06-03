import React from 'react'



class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    AboutMe(){
        return(
            <div className='about'>
                <h4>About Me</h4>
                <p className='aboutText'> Hello, thanks for visiting, I am Dylan Wong 
                    A software developer in NewYork. Please checkout my Personal Site!
                    
                </p>
                <a target='_blank'className='white'href="https://dylanpwong.github.io/">Personal Site</a>
            </div>
        )
    }
    Contact(){
        return(
            <div className=' contact'>
                <h4>Contact Me!</h4>
                <p>Email: dylanpwong</p>
                <p>Phone 848-826-5416</p>
                <a className='white'target='_blank'href="https://github.com/dylanpwong">GitHub!</a>
            </div>
        )
    }

    render(){
        return(
            <div className="footer">
                <div className="footerContent">
                {this.AboutMe()}
                {this.Contact()}
                </div>
            </div>
        )
    }
}
export default Footer;