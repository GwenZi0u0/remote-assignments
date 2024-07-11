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
    const card = document.getElementsByTagName("section")[0]
    const moreButton =document.getElementsByTagName("button")[0]
    let currentIndex = 0
    const pageLength = 5

    function loadCards(count){
        const end = currentIndex + pageLength
        const pageToLength = data.slice(currentIndex, end)    
           
        pageToLength.forEach(function(page){

            const topicList = page.topics && page.topics.length > 0 ? page.topics.map(topic => `<li class="topics">${topic}</li>` ).join('') : '' 

            card.innerHTML += `
            <div class="Card">
                <div class="page">
                    <span class="pageName"><a href="">${page.name}</a></span>
                    <div class="pageVisibility">${page.visibility}</div>
                </div>
                <div class="description">${page.description}</div>
                <ul class="cardTopics">
                    ${topicList}
                </ul>
            </div>
            `
        })
        // function morebtn(){
        //     currentIndex += pageToLength.length
        // }
        // morebtn()
    }
    
    loadCards()

     moreButton.addEventListener('click', loadCards)
}

const url = " https://api.github.com/orgs/facebook/repos?per_page=5&page=1"
ajax(url).then((data) => {
    render(data);
})


   // const topicList = function (){
            //     if(page.topics && page.topics.length > 0 ){
            //         page.topics.map(topic => `<li class="topics">${topic}</li>` ).join('')
            //     }
            // }

