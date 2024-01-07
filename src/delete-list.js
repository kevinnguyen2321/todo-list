import {listArray} from "./create-list"





// Funciton to delete list card//
export const deleteListItem = function(deleteBtn) {
    const cards = document.querySelectorAll('.list-card');
    const dataIndex = parseInt(deleteBtn.getAttribute('data-index'))
    let cardToDelete = cards[dataIndex]
    cardToDelete.remove();
    listArray.splice(dataIndex,1)
}

// Function to update list card's index upon removal//
export const updateIndex = function () {
   
    const deleteButtons = document.querySelectorAll('.delete-btn');
   deleteButtons.forEach((button, dataIndex) => {
    button.setAttribute('data-index', dataIndex)
   });
}