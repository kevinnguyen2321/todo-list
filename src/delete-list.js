import {listArray} from "./create-list"
import { getCurrentProject } from "./projectManager";





// Funciton to delete list card//
export const deleteListItem = function(deleteBtn) {
    const cards = document.querySelectorAll('.list-card');
    const dataIndex = parseInt(deleteBtn.getAttribute('data-index'))
    // let cardToDelete = cards[dataIndex]
    // cardToDelete.remove();
    // listArray.splice(dataIndex,1)

    if (dataIndex >= 0 && dataIndex < cards.length) {
        let cardToDelete = cards[dataIndex];

        // Check if the card to delete is defined before removing
        if (cardToDelete) {
            cardToDelete.remove();
            // listArray.splice(dataIndex, 1);

            getCurrentProject().listArray.splice(dataIndex,1)

            // Update list card indices after removal
            updateIndex();
        } else {
            console.error('Card to delete is undefined.');
        }
    } else {
        console.error('Invalid data-index:', dataIndex);
    }
};




// Function to update list card's index upon removal//
export const updateIndex = function () {
   
    const deleteButtons = document.querySelectorAll('.delete-btn');
   deleteButtons.forEach((button, dataIndex) => {
    button.setAttribute('data-index', dataIndex)
   });
}