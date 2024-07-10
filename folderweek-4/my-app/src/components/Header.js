import React from "react"

// const Menu = function onMenuClick(){
//   const [isMenuVisible, setMenuVisible] = useState(false);
//   const [imageSrc, setImageSrc] = useState(barsSolid)

//   const toggleMenu = () => {
//       setMenuVisible(!isMenuVisible)
//       const newImageSrc = imageSrc === barsSolid ? octiconX : barsSolid
//       setImageSrc(newImageSrc)
//   }

//   return(
//       <div>
//         <div className="menu_switch" onClick={toggleMenu}>
//               <img className='bar' src={imageSrc} alt="" />
//         </div>
//         {isMenuVisible &&(
//           <div className="menu" style={{ display: 'flex'}}>
//            <div className="item_content_menu items_content">
//             <ul>
//               <li className="item"><a><span>Item 1</span></a></li>
//               <li className="item"><a><span>Item 2</span></a></li>
//               <li className="item"><a><span>Item 3</span></a></li>
//               <li className="item"><a><span>Item 4</span></a></li>
//             </ul>
//             </div>
//           </div>
//           )}
//           {/* <div class="items_content">
//             <a href="#" class="items"><li><span>Item 1</span></li></a>
//             <a href="#" class="items"><li><span>Item 2</span></li></a>
//             <a href="#" class="items"><li><span>Item 3</span></li></a>
//             <a href="#" class="items"><li><span>Item 4</span></li></a>
//           </div> */}
//     </div>
//   )
// }
const Header = function (){
  return(
    <>
    <a href="#" id="logo" onClick={() => window.location.href = '../index.html'}>Website Title / Logo</a>
    </>
  )
}

export default Header