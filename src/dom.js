




// Initial page load//
export const pageLoad = (function() {
    const mainContainer = document.createElement('div')
    mainContainer.classList.add('main-container')
    document.querySelector('body').appendChild(mainContainer)
    //Header//
    const header = document.createElement('div')
    header.classList.add('header')
    const headerText = document.createElement('h1')
    headerText.textContent = 'My Todo List'
    header.appendChild(headerText)
    mainContainer.appendChild(header)

    const content = document.getElementById('content');
    mainContainer.appendChild(content)
    

     //Side bar//
    const sideBar = document.createElement('div')
    sideBar.classList.add('side-bar')
    const sideBarText = document.createElement('p')
    sideBarText.textContent = 'My Projects'

    const addButton = document.createElement('button');
    addButton.textContent = 'Add'
    addButton.classList.add('add-btn')
    sideBar.appendChild(addButton)
    sideBar.appendChild(sideBarText)
    mainContainer.appendChild(sideBar)

   
    
    return {content,addButton}

})()


// Function to display To Do lists on page//

export const DisplayLists = function (list) {
    
const listCard = document.createElement('div');
listCard.classList.add('list-card');
content.appendChild(listCard);

const contentTitleContainer = document.createElement('div');
const contentTitle = document.createElement('h1');
contentTitle.textContent = list.title;
contentTitleContainer.appendChild(contentTitle);
contentTitle.classList.add('list-title');
listCard.appendChild(contentTitleContainer);



const contentItems = document.createElement('p');
contentItems.textContent = list.dueDate;
contentItems.classList.add('list-details');
listCard.appendChild(contentItems);

}


