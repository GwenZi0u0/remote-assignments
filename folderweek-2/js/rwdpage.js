// Welcome Message => "Have a Good Time!"
let changespan = document.getElementById('change_text');
function changeText() {
    let text = changespan.innerHTML = 'Have a Good Time!';
}

// Click to Show/Close Menu.

// 抓視窗寬度，解決menustyle殘留的bug
function handleResize() {
    const menustyle = document.getElementsByClassName("menu")[0];
    var bodyWidth = document.body.clientWidth;
    if (bodyWidth >= 800) {
        menustyle.style.display = 'none';
    }
}
window.addEventListener('resize', handleResize);

// 設定改變圖片src
let barstyle = document.getElementsByClassName("bar")[0];

function changeimage() {
    let mysrc = barstyle.getAttribute('src');
    if (mysrc === './svg/bars-solid.svg') {
        barstyle.setAttribute('src', './svg/octicon_x-16.svg');
    } else {
        barstyle.setAttribute('src', './svg/bars-solid.svg');
    }
};
// 卡關：發生isshowmenu()點擊第一下時，是空值。
// 問題：因為display：none，在外部的CSS，所以第一時間在當前頁面時無法馬上抓取，以至於changeimage()與isshowmenu()無法同步。
// 解決：1.將if條件句中加入"( || menustyle.style.display === '')"
//      2.直接加在.html => <div class="menu" display:none >

// 設定hammenu的點擊事件 改變menu樣式
function isshowmenu() {
    let menustyle = document.getElementsByClassName("menu")[0];
    if (menustyle.style.display === 'none' || menustyle.style.display === '') {
        menustyle.style.display = 'flex';
    } else {
        menustyle.style.display = 'none';
    }
}

// Click to Show More Content Boxes
// all content boxes are already there, they are just set to display:none at the beginning.
let boxstyle = document.getElementsByClassName("section_content")[1];
function openboxes() {
    let callboxes = boxstyle.style.display = 'flex';
}