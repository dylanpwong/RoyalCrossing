


import React from 'react'

const SplashStat=(props)=>{
    const user = props.user;
    // debugger
    return(
        <div className="userStatsContainer"> {/*contains the stat*/}
            <div>
                <div>
                    {user.follows? Object.values(props.user.follows).length : 0}
                </div>
                <div>
                    Follows
                </div>
            </div>

            <div className="profileName">
                {user.username}
            </div>

            <div>
                <div>
                    {Object.values(props.stories).length}
                </div>
                <div>
                    Fictions
                </div>
            </div>
        </div>
    );
}

export default SplashStat;