import {TodoList} from './create-list.js'
import './style.css'
import {pageLoad} from './dom.js'
import { addNewList } from './create-list.js'


const gymList = new TodoList ('Gym', 'My list for the gym', ['body', 'temp', 'gainz', 'motivation'],'2/14', 'Urgent' )

const groceryList = new TodoList ('Groceries', 'List for groceries', ['bread', 'meats', 'sushi'], '12/25', 'Not urgent' )

const {content} = pageLoad;



const listCard = document.createElement('div')
listCard.classList.add('list-card')
content.appendChild(listCard)

const contentTitleContainer = document.createElement('div')
const contentTitle = document.createElement('h1')
contentTitle.textContent = gymList.title
contentTitleContainer.appendChild(contentTitle)
contentTitle.classList.add('list-title')
listCard.appendChild(contentTitleContainer)



const contentItems = document.createElement('p')
contentItems.textContent = gymList.dueDate
contentItems.classList.add('list-details')
listCard.appendChild(contentItems)


const listCardTwo = document.createElement('div')
listCardTwo.classList.add('list-card')
content.appendChild(listCardTwo)

const contentTitleContainerTwo = document.createElement('div')
const contentTitleTwo = document.createElement('h1')
contentTitleTwo.textContent = groceryList.title
contentTitleContainerTwo.appendChild(contentTitleTwo)
contentTitleTwo.classList.add('list-title')
listCardTwo.appendChild(contentTitleContainerTwo)


const listCardThree = document.createElement('div')
listCardThree.classList.add('list-card')
content.appendChild(listCardThree)



