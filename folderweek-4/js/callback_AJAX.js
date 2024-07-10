// Assignment 1: Callback Function
// Complete the function below to show a delayed result in the console
// You should use window.setTimeout() for time scheduling.

function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(function(sum) {
        sum = ( n1 + n2 )
        // console.log(sum * ( n1 + n2 ))
        let result = sum * sum
        callback(result)
    },delayTime)  
           
}

// delayedResult(4, 5, 3000, function(result) {
// console.log(result);
// }); // 9 (4+5) will be shown in the console after 3 seconds
// delayedResult(-5, 10, 2000, function(result) {
// window.alert(result);
// }); // 5 (-5+10) will be shown in an alert dialog after 2 seconds


// Assignment 2: HTML DOM and AJAX
// Complete the functions below to make an AJAX call to a URL by Fetch API, and show the
// response data in the page. You may render UI with any style

async function ajax(url) {
    try{
        const response = await fetch(url)
        if(!response.ok) {throw new Error(`HTTP: ${response.statusText}`)}
        
        const data = await response.json()
        return data
    }catch(err){
        console.log(`ERROR`)
    }
}

function render(data) {
    // console.log(data)
    const html = document.getElementsByTagName("main")[0]
    data.forEach(function(products){
        html.innerHTML += `
        <div class="card">
            <hander>${products.name}</hander>
            <span>${products.description}</span>
            <footer>價格: ${products.price}</footer>
        </div>
        `
    })
}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products"
ajax(url).then((data) => {
    render(data);
})