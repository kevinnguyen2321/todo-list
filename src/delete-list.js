import { getCurrentProject } from "./projectManager";
import { projectArray } from "./project-func";







// // Funciton to delete list card//
// export const deleteListItem = function(deleteBtn) {
//     const cards = document.querySelectorAll('.list-card');
//     const dataIndex = parseInt(deleteBtn.getAttribute('data-index'))
  

//     if (dataIndex >= 0 && dataIndex < cards.length) {
//         let cardToDelete = cards[dataIndex];

//         // Check if the card to delete is defined before removing
//         if (cardToDelete) {
//             cardToDelete.remove();
            
//             getCurrentProject().listArray.splice(dataIndex,1)

//             // Update list card indices after removal
//             updateIndex();
           
//         } else {
//             console.error('Card to delete is undefined.');
//         }
//     } else {
//         console.error('Invalid data-index:', dataIndex);
//     }
// };

export const deleteListItem = function(deleteBtn) {
    const projectIndex = parseInt(deleteBtn.getAttribute('data-project-index'));
    const listIndex = parseInt(deleteBtn.getAttribute('data-list-index'));

    if (!isNaN(projectIndex)) {
        const project = projectArray[projectIndex];

        if (project && !isNaN(listIndex)) {
            project.listArray.splice(listIndex, 1);

            // Remove the card from the DOM
            const cards = document.querySelectorAll('.list-card');
            const cardToDelete = cards[listIndex];

            if (cardToDelete) {
                cardToDelete.remove();

                // Update list card indices after removal
                updateIndex();
                console.log('Project Index after deletion:', projectIndex);
                console.log('List Index after deletion:', listIndex);
            } else {
                console.error('Card to delete is undefined.');
            }
        } else {
            console.error('Invalid listIndex:', listIndex);
        }
    } else {
        console.error('Invalid projectIndex:', projectIndex);
    }
};




// Function to update list card's index upon removal//
export const updateIndex = function () {
   
    const deleteButtons = document.querySelectorAll('.delete-btn');
   deleteButtons.forEach((button, dataIndex) => {
    button.setAttribute('data-index', dataIndex)
   });

   
};



