import { useState } from "react"

const Section = function (){
    const [isContentVisible, setContentVisible] = useState(false)

    const openBoxes = function (){
        setContentVisible(true)
    }

    return(
        <div className="section_all">
            <div className="section_title">
                <span>Section Title</span></div>
            <div className="section_content">
                <div className="box top">
                    <div className="sections"><span>Content Box 1</span></div>
                    <div className="sections"><span>Content Box 2</span></div>
                </div>
                <div className="box down">
                    <div className="sections"><span>Content Box 3</span></div>
                    <div className="sections"><span>Content Box 4</span></div>
                </div>
            </div>
            <div className="btn" onClick={openBoxes}>
                <button type="button"><span>Call to Action</span></button>
            </div>
            {isContentVisible && (
                <div className="section_content">
                    <div className="box top">
                        <div className="sections"><span>Content Box 5</span></div>
                        <div className="sections"><span>Content Box 6</span></div>
                    </div>
                    <div className="box down">
                        <div className="sections"><span>Content Box 7</span></div>
                        <div className="sections"><span>Content Box 8</span></div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Section