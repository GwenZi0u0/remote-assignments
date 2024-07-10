import { useState } from "react"

const WelcomeMessage = function (){
    const [message, setMessage] = useState('Welcome Message')

    const changeText = function (){
        setMessage('Have a Good Time!')
    }
    return(
        <div className="greeting_content" onClick={changeText}>
        <div>
            <span id="change_text">{message}</span>
        </div>
    </div>
    )
}
export default WelcomeMessage