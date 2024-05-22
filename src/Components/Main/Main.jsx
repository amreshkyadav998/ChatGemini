import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>ChatGemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Why the React JS is most important library in this era.</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Explain about the node JS in detail.</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Tell me Something about the importance of National Importance Colleges like IIIT.</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Why DSA is more important for product based Company.</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                            ?<div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => onSent(input)} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>

                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. <a href="https://support.google.com/gemini/answer/13594961?visit_id=638518107178736643-2593729078&p=privacy_notice&rd=1#privacy_notice">Your privacy and Gemini Apps</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main


// 47:30
