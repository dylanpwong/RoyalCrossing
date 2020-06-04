import React from 'react'



class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clicked: null
        }
        this.clicker=this.clicker.bind(this);
        this.sliderWithScroller=this.sliderWithScroller.bind(this);
    }
    componentDidUpdate(){
        window.scrollTo(0, document.body.scrollHeight);
    }

    AboutMe(){
        return(
            <div className='about'>
                <h4>About Me</h4>
                <p className='aboutText'> Hello, thanks for visiting, I am Dylan Wong 
                A software developer in NewYork. Please checkout my &nbsp; <a target='_blank' className='white' href="https://dylanpwong.github.io/">Personal Site</a>
                </p>
                {/* <a target='_blank'className='white'href="https://dylanpwong.github.io/">Personal Site</a> */}
            </div>
        )
    }
    Contact(){
        return(
            <div className='about'>
                <h4 >Contact Me!</h4>
                <p className='contact'>Email: dylanpwong@gmail.com</p>
                <p className='contact'>Phone 848-826-5416</p>
                <a className='white'target='_blank'href="https://github.com/dylanpwong">GitHub!</a>
            </div>
        )
    }
    slider(){
        return(
            <div className='smallFooter'>
                <i onClick={this.sliderWithScroller}className="fas fa-arrow-circle-up white"></i>
            </div>
        )
    }
    sliderWithScroller(){
        this.clicker();
        // this.scoller();
    }
    sliderOpen(){
        return(
            <div className='footer'>

                <div className="footerContent">
                    {this.AboutMe()}
                    <i onClick={this.clicker}className="fas fa-arrow-circle-down white middleF"></i>
                    {this.Contact()}
                </div>
            </div>
        )
    }
    scoller(){
        // window.scrollTo(0,document.body.scrollHeight);
        window.scrollTo(0, 919);
        console.log('scrolled');
    }
    clicker(){
        // switch(this.state.clicked){
        //     case 'false':
        //         this.setState({clicked: 'true'});
        //         break;
        //     case 'true':
        //         this.setState({clicked: 'false'});
        //         break;
        //     default:
        //         break;
        // }
        // window.scrollTo(0, document.body.scrollHeight);
        this.setState({clicked: !this.state.clicked});
    }

    render(){
        if(!this.state.clicked){
            return(
                <>
                {this.slider.call(this)}
                </>
            )
        }else{
            return(
                <>
                    {/* {this.sliderOpen.call(this)} */}
                    {this.sliderOpen.call(this)}
              </>
            )

        }
    }
}
export default Footer;