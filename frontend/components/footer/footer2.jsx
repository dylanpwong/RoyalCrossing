import React from 'react';

class Footer2 extends React.Component{
    constructor(props){
        super(props)

        this.sliderOpen=this.sliderOpen.bind(this);
    }

    AboutMe() {
        return (
            <div className='about'>
                <h4>About Me</h4>
                <p className='aboutText'> Hello, thanks for visiting, I am Dylan Wong
                A software developer in NewYork. Please checkout my &nbsp; <a target='_blank' className='white' href="https://dylanpwong.github.io/">Personal Site</a>
                </p>
                {/* <a target='_blank'className='white'href="https://dylanpwong.github.io/">Personal Site</a> */}
            </div>
        )
    }
    Contact() {
        return (
            <div className='about'>
                <h4 >Contact Me!</h4>
                <p className='contact'>Email: dylanpwong@gmail.com</p>
                <p className='contact'>Phone 848-826-5416</p>
                <a className='white' target='_blank' href="https://github.com/dylanpwong">GitHub!</a>
            </div>
        )
    }
    sliderOpen() {
        return (
            <div className='footer'>

                <div className="footerContent">
                    {this.AboutMe()}
                    {this.Contact()}
                </div>
            </div>
        )
    }
    render(){
        return(
                <>
                {this.sliderOpen()}
                </>
        );
    }
}

export default Footer2