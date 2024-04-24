import React, { useState } from 'react';
import axios from 'axios';
import './Boxing.css';


const func = async () => {


    const options = {
        method: 'GET',
        url: `https://bc-game1.p.rapidapi.com/matches_bcgame`,
        params: {
            sport: 'boxing',
            country: 'international',
            competition: 'matchups',
            match_urls: 'false'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        }
    };


    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
function Boxing() {
    // func();
    const [selectedPlayer, setSelectedPlayer] = useState();


    const handlePlayerSelect = (player) => {
        setSelectedPlayer(player);
    };


    const player1Selected = selectedPlayer === 'player1';
    const player2Selected = selectedPlayer === 'player2';


    return (
        <div className="App">
            <div className="group-32">
                <div className="content">
                    <span className="boxing">
                        BOXING
                    </span>
                    <div className="rectangle-20">
                        <span className="live-match">
                            LIVE MATCH
                        </span>
                        <span className="competition">
                            WORLD HEAVYWEIGHT CHAMPIONSHIP
                        </span>
                        <div className="group-104">
                            <div className="player-1">
                                <span className="neelesh">NEELESH</span>
                                <span className="india">(INDIA)</span>
                                {/* <div className="frame-4">
                 1
               </div> */}
                            </div>
                            <div className="player-1">
                                <span className="vs">VS</span>
                            </div>
                            <div className="player-1">
                                <span className="neelesh">SUKRIT</span>
                                <span className="india">(INDIA)</span>
                                {/* <div className="frame-4">
                 2
               </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="group-105">
                        <span className="who">
                            Who will win the match
                        </span>
                        <div className="rectangle-25">
                            <div className={`rectangle-39 ${player1Selected ? 'selected' : ''}`} onClick={() => handlePlayerSelect("player1")}>
                                <div className="group-100">
                                    <div className="frame-6">
                                        Player1
                                    </div>
                                    <input type="radio" name="winner" checked={player1Selected} />
                                    <div className="radio-button"></div>
                                </div>
                            </div>
                            <div className={`rectangle-39 ${player2Selected ? 'selected' : ''}`} onClick={() => handlePlayerSelect("player2")}>
                                <div className="group-101">
                                    <div className="frame-7">
                                        Player2
                                    </div>
                                    <input type="radio" name="winner" checked={player2Selected} />
                                    <div className="radio-button"></div>
                                </div>
                            </div>
                        </div>
                        <div className='group-98'>
                            <input type="text" placeholder='Enter the amount' className='text_amount'></input>
                            <button className='submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Boxing;