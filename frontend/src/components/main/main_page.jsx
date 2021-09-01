import React from 'react';
import { Link } from 'react-router-dom'
import "./main.css"

class MainPage extends React.Component {

    render() {
        return (
            // <div className="main">
            //     <div className="catchphrase"> 
            //         <div>
            //             Help Me 
            //         </div>
            //         <div>
            //             Help You 
            //         </div> 
            //     </div>
            //     <div className="subtext"> Stay accountable for your goals with like-minded people </div>
                // <Link to={`/signup`}> 
                //     <button className="getstarted">Get Started</button>
                // </Link>
            // </div>

            <div className="mainpage-cont">
                <div className="left-cont">
                    <div>
                        <div>Help Me</div> 
                        <div>Help You</div>
                    </div>

                    <div> Stay accountable for your goals with like-minded people </div>

                    <Link to={`/signup`}> 
                        <button className="getstarted">Get Started</button>
                    </Link>

                </div>

                <div>
                    <img className="background-img" src="./placeholder.jpg" alt="background-img"/>
                </div>

            </div>
        
        );
    }
}

export default MainPage;