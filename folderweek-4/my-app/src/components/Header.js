import React from "react"

const Header = function (){
  return(
    <>
    <a href="#" id="logo" onClick={() => window.location.href = '../index.html'}>Website Title / Logo</a>
    </>
  )
}

export default Header