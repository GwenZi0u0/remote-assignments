import { useState } from "react"
import barsSolid from "../assets/bars-solid.svg"
import octiconX from "../assets/octicon_x-16.svg"

const Menu = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState(barsSolid)
  
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible)
        const newImageSrc = imageSrc === barsSolid ? octiconX : barsSolid
        setImageSrc(newImageSrc)
    }

    return(
        <>
            <div className="menu_switch" onClick={toggleMenu}>
                <img className='bar' src={imageSrc} alt="" />
            </div>
            {isMenuVisible &&(
                <div className="menu" style={{ display: 'flex'}}>
                    <div className="item_content_menu">
                    <ul>
                        <li className="item"><a><span>Item 1</span></a></li>
                        <li className="item"><a><span>Item 2</span></a></li>
                        <li className="item"><a><span>Item 3</span></a></li>
                        <li className="item"><a><span>Item 4</span></a></li>
                    </ul>
                    </div>
                </div>
            )}
            <div class="items_content">
                <a href="#" class="items"><li><span>Item 1</span></li></a>
                <a href="#" class="items"><li><span>Item 2</span></li></a>
                <a href="#" class="items"><li><span>Item 3</span></li></a>
                <a href="#" class="items"><li><span>Item 4</span></li></a>
            </div>
            
        </>
    )

}
export default Menu