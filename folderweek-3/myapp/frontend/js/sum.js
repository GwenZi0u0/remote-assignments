let loginForm = document.getElementById("loginForm");
let result = document.getElementById("result");

// deBug 使用async await / Promise 的差異
// 使用上的心得
loginForm.addEventListener("submit", async (e) => {
    // 防止表單提交
    e.preventDefault();

    let number = document.getElementById("number").value;
    const apiurl = 'http://localhost:3000/'
    const api = 'getData';
    const param = 'number=';

    // fetchData('http://127.0.0.1:3000/getData'),
    // fetchData('http://127.0.0.1:3000/getData?number=')
    // console.log(fetchData(apiurl + api + '?' + param + number))
    if (!number) {
        result.textContent = await fetchData(apiurl + api)
    } else {
        result.textContent = await fetchData(apiurl + api + '?' + param + number)
    }

})

// **********FetchData************

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data.result;
    } catch (error) {
        // 處理錯誤
        console.error('ERROR', error);
        throw error;
    }
}

// console.log("sum.js run")


