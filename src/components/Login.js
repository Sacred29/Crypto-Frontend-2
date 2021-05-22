import React from 'react';
import Draggable from 'react-draggable';
import { Window, WindowContent, WindowHeader, Button } from 'react95';
import '../CSS/Login.css';
import ReactPlayer from 'react-player';
import Music from '../audio/DJ Snake - Middle ft. Bipolar Sunshine (Dombresky Remix)_264748048_soundcloud.mp3'
import '../CSS/Login.css';

export default function Login(props) {

    return (
        <Draggable>
            <div id='pane' style={{ border: '1px solid red' }}>
                <div id="logo">
                    <h1><i>Crypto Plus Login Page</i></h1>
                </div>
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=KMxzSEs5f6g'></ReactPlayer> */}
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=Rtfl-EiTCFQ'></ReactPlayer> */}
                <section class='stark-login'>
                    <form>
                        <div id="fade-box">
                            <input type="text" name="txtLoginID" id="username" placeholder="Username" required></input>
                            <input type="password" name="txtPassword" placeholder="Password" required></input>

                            <button>Log In</button>
                            <a asp-controller="Home" asp-action="Index">Cancel</a>
                        </div>
                    </form>
                    <div class="hexagons">
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <br></br>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <br></br>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>

                        <br></br>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <br></br>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                        <span>&#x2B22;</span>
                    </div>
                </section>

                <div id="circle1">
                    <div id="inner-cirlce1">
                        <h2> </h2>
                    </div>
                </div>
            </div>



        </Draggable>
    )
    // <Window>
    //             <WindowHeader>
    //                 <span>Login.exe</span> &nbsp;
    //                 {/* <button>
    //                 <span className='close' aria-label="Close" ></span>
    //             </button> */}
    //                 <button type="button" className="close" aria-label="Close" onClick={props.toggleLogin}>
    //                     <span aria-hidden="true">&times;</span>
    //                 </button>
    //             </WindowHeader>
    //             <WindowContent>
    //                 <p>hello world</p>
    //             </WindowContent>
    //         </Window>
}