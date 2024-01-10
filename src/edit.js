import { createListCard, createListForm,loadPageLayout} from "./dom"
import { formatDate } from "./create-list"




export const editListForm = function (list) {
    
    list.title = titleInput.value
    list.description = descriptionInput.value
    list.items = itemsInput.value
    list.dueDate = formattedDate
    list.priority = priorityValue
}


export const createEditForm = function (list, contentTitle, dueDateDisplay) {
    
    //Dialog & Edit form creation//
    const editDialog = document.createElement('dialog')
    const editForm = document.createElement('form')
    editForm.classList.add('edit-modal');
    editDialog.appendChild(editForm)
   
    //Title label & input//
    const titleLabelEdit = document.createElement('label')
    titleLabelEdit.setAttribute('for', 'title')
    titleLabelEdit.textContent = 'Title'

    const titleInputEdit = document.createElement('input')
    titleInputEdit.setAttribute('type', 'text')
    titleInputEdit.setAttribute('id', 'title')
    titleInputEdit.value = list.title


    editForm.appendChild(titleLabelEdit)
    editForm.appendChild(titleInputEdit)

    // Description label & input//
    const descriptionLabelEdit = document.createElement('label');
    descriptionLabelEdit.setAttribute('for', 'description')
    descriptionLabelEdit.textContent = 'Description';

    const descriptionInputEdit = document.createElement('input')
    descriptionInputEdit.setAttribute('type', 'text')
    descriptionInputEdit.setAttribute('id','description')
    descriptionInputEdit.value = list.description

    editForm.appendChild(descriptionLabelEdit)
    editForm.appendChild(descriptionInputEdit)

    // List items/tasks label & input//
    const itemsLabelEdit = document.createElement('label')
    itemsLabelEdit.setAttribute('for', 'items')
    itemsLabelEdit.textContent = 'List items/Tasks'

    const itemsInputEdit = document.createElement('input')
    itemsInputEdit.setAttribute('type', 'text')
    itemsInputEdit.setAttribute('id', 'items')
    itemsInputEdit.value = list.items

    editForm.appendChild(itemsLabelEdit)
    editForm.appendChild(itemsInputEdit)

    //Due date label & input//
    const dueDateLabelEdit = document.createElement('label')
    dueDateLabelEdit.setAttribute('for', 'due-date')
    dueDateLabelEdit.textContent = 'Due Date'

    const dueDateInputEdit = document.createElement('input')
    dueDateInputEdit.setAttribute('type', 'date')
    dueDateInputEdit.setAttribute ('id', 'due-date')
    //Formatting date for pre-selected date picker//
    const formattedDueDate = new Date(list.dueDate).toISOString().split('T')[0];
    dueDateInputEdit.value = formattedDueDate;
    

    editForm.appendChild(dueDateLabelEdit)
    editForm.appendChild(dueDateInputEdit)





    
    
    
    
    //Confirm edit button//
    const confirmEditBtn = document.createElement('button')
    confirmEditBtn.textContent = 'Confirm Edit';
    editForm.appendChild(confirmEditBtn)
     
    
    //Confirm edit button event listener//
    confirmEditBtn.addEventListener('click', (e) =>{
        e.preventDefault();
       
       list.title = titleInputEdit.value;
       contentTitle.textContent = titleInputEdit.value

       list.description = descriptionInputEdit.value
       
       list.items = itemsInputEdit.value

       list.dueDate = formatDate(dueDateInputEdit.value)
       dueDateDisplay.textContent = list.dueDate
       console.log('List after edits:', list)


       
       editDialog.close()

    
    });


    


 return {editDialog,titleInputEdit}
}


