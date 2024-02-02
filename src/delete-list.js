import { getCurrentProject } from "./projectManager";
import { projectArray, todoArray } from "./project-func";
import { loadPageLayout } from "./dom";
import { addTodoToLocalStorage } from "./local-storage";

// Function for deleting list for projects
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
                updateIndex(listIndex, projectIndex);
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




// Function to update list card's index upon removal for projects//
export const updateIndex = function (listIndex, projectIndex) {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button, listIndex) => {
            // button.setAttribute('data-index', dataIndex)
            button.setAttribute('data-list-index', listIndex)
            button.setAttribute('data-project-index', projectIndex)
        });

};

        
    
    
    // // // Function to delete Todo list items (non projects)//
    // export const deleteTodoListItems = function (removeBtn) {
    //     const cards = document.querySelectorAll('.list-card')
    //     const todoIndex = parseInt(removeBtn.getAttribute('data-index'));

    //     console.log('Todo Index:', todoIndex);
    //     console.log('List Array Length:', getCurrentProject().listArray.length);

    //     const todoCardToDelete = cards[todoIndex]
    //     todoCardToDelete.remove()
    //     console.log(todoIndex)
    //     getCurrentProject().listArray.splice(todoIndex, 1)
    //     updateTodoIndex()
        

    // }

    export const deleteTodoListItems = function (removeBtn) {
        const cards = document.querySelectorAll('.list-card');
        console.log('Cards NodeList:', cards);
        console.log('List Array:', getCurrentProject().listArray);
    
        const todoIndex = parseInt(removeBtn.getAttribute('data-index'));
        console.log('Todo Index:', todoIndex);
    
        const todoCardToDelete = cards[todoIndex];
        if (todoCardToDelete) {
            todoCardToDelete.remove();
            getCurrentProject().listArray.splice(todoIndex, 1);
            updateTodoIndex();
        }
    };
    



     export const updateTodoIndex = function() {
        const removeButtons = document.querySelectorAll('.remove-btn')
        removeButtons.forEach((button, index)=> {
            button.setAttribute('data-index', index)

        });
    }
    
    





   
   
   




