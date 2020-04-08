


import React from 'react'

const SplashStat=(props)=>{
    const user = props.user;
    return(
        <div className="userStatsContainer"> {/*contains the stat*/}
            <div>
                <div>
                    5
                </div>
                <div>
                    Favorites
                </div>
            </div>

            <div className="profileName">
                {user.username}
            </div>

            <div>
                <div>
                    1
                </div>
                <div>
                    Fictions
                </div>
            </div>
        </div>
    );
}

export default SplashStat;