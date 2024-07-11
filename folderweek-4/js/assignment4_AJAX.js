const card = document.getElementsByTagName("section")[0]
const moreButton =document.getElementsByTagName("button")[0]

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

function lazyload(count){
    let url = " https://api.github.com/orgs/facebook/repos?per_page=5&page=" + count
    ajax(url).then((data) => {
        render(data);
    })
}

let count = 1

lazyload(count)


function render(data) {
    let currentIndex = 0
    const pageLength = 5

    const end = currentIndex + pageLength
    const pageToLength = data.slice(currentIndex, end)    
       
    pageToLength.forEach(function(page){
        let topicList = ""
        if(page.topics){
            topicList = page.topics.map(topic => `<li class="topics">${topic}</li>` ).join('')
        }

        card.innerHTML += `
        <div class="Card">
            <div class="page">
                <span class="pageName"><a href="">${page.name}</a></span>
                <div class="pageVisibility">${page.visibility[0].toUpperCase() + page.visibility.slice(1)}</div>
            </div>
            <div class="description">${page.description}</div>
            <ul class="cardTopics">
                ${topicList}
            </ul>
        </div>
        `
    })
}

function addCount(){
    count += 1
    lazyload(count)
}

 moreButton.addEventListener('click', addCount)