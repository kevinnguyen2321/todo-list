import { formatDate,handlePriorityBtns } from "./create-list"
import { addProjToLocalStorage, addTodoToLocalStorage } from "./local-storage"
import { loadPageLayout } from "./dom"



export const createEditForm = function (list, contentTitle, dueDateDisplay) {
    
    //Dialog & Edit form creation//
    const editDialog = document.createElement('dialog')
    editDialog.classList.add('edit-dialog')
    const editForm = document.createElement('form')
    editForm.classList.add('edit-modal-form');
    editDialog.appendChild(editForm)
   
    //Title label & input//
    const titleLabelEdit = document.createElement('label')
    titleLabelEdit.setAttribute('for', 'title')
    titleLabelEdit.textContent = 'Title*'

    const titleInputEdit = document.createElement('input')
    titleInputEdit.setAttribute('type', 'text')
    titleInputEdit.setAttribute('id', 'title')
    titleInputEdit.value = list.title


    editForm.appendChild(titleLabelEdit)
    editForm.appendChild(titleInputEdit)

    // Description label & input//
    const descriptionLabelEdit = document.createElement('label');
    descriptionLabelEdit.setAttribute('for', 'description')
    descriptionLabelEdit.textContent = 'Description(Optional)';

    const descriptionInputEdit = document.createElement('input')
    descriptionInputEdit.setAttribute('type', 'text')
    descriptionInputEdit.setAttribute('id','description')
    descriptionInputEdit.value = list.description

    editForm.appendChild(descriptionLabelEdit)
    editForm.appendChild(descriptionInputEdit)

    // List items/tasks label & input//
    const itemsLabelEdit = document.createElement('label')
    itemsLabelEdit.setAttribute('for', 'items')
    itemsLabelEdit.textContent = 'List items/Tasks*'

    const itemsInputEdit = document.createElement('input')
    itemsInputEdit.setAttribute('type', 'text')
    itemsInputEdit.setAttribute('id', 'items')
    itemsInputEdit.value = list.items

    editForm.appendChild(itemsLabelEdit)
    editForm.appendChild(itemsInputEdit)

    //Due date label & input//
    const dueDateLabelEdit = document.createElement('label')
    dueDateLabelEdit.setAttribute('for', 'due-date')
    dueDateLabelEdit.textContent = 'Due Date*'

    const dueDateInputEdit = document.createElement('input')
    dueDateInputEdit.setAttribute('type', 'date')
    dueDateInputEdit.setAttribute ('id', 'due-date')
    //Formatting date for pre-selected date picker//
    const formattedDueDate = new Date(list.dueDate).toISOString().split('T')[0];
    dueDateInputEdit.value = formattedDueDate;
    

    editForm.appendChild(dueDateLabelEdit)
    editForm.appendChild(dueDateInputEdit)


    //Priority buttons// 
    const labelForPriorityEdit = document.createElement('label');
    labelForPriorityEdit.textContent = 'Priority'
    const priorityBtnEditContainer = document.createElement('div')
    priorityBtnEditContainer.classList.add('priority-edit-btns-container')
    editForm.appendChild(labelForPriorityEdit)
    editForm.appendChild(priorityBtnEditContainer)

   

     //Low priority edit button
    const lowPriorityEditBtn = document.createElement('button')
    lowPriorityEditBtn.textContent = 'Low'
    lowPriorityEditBtn.classList.add('low-priority-edit-btn')
    priorityBtnEditContainer.appendChild(lowPriorityEditBtn)

    lowPriorityEditBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        handlePriorityBtns(highPriorityEditBtn,lowPriorityEditBtn)
        list.priority = 'Low'

    });



    //High priority edit button//
    const highPriorityEditBtn = document.createElement('button')
    highPriorityEditBtn.textContent = 'High'
    highPriorityEditBtn.classList.add('high-priority-edit-btn')
    priorityBtnEditContainer.appendChild(highPriorityEditBtn)

    highPriorityEditBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        handlePriorityBtns(lowPriorityEditBtn,highPriorityEditBtn)
        list.priority = 'High'
    });

    if (list.priority === 'Low') {
        lowPriorityEditBtn.classList.add('selected')
        lowPriorityEditBtn.style.backgroundColor = 'green'
    } else if (list.priority === 'High') {
        highPriorityEditBtn.classList.add('selected')
        highPriorityEditBtn.style.backgroundColor = 'red'
    }




    //Bottom button container//

    const bottomEditBtnsContainer = document.createElement('div')
    bottomEditBtnsContainer.classList.add('bottom-edit-btns-container')
    editForm.appendChild(bottomEditBtnsContainer)
    


      //Cancel button//
      const cancelBtn = document.createElement('button')
      cancelBtn.textContent = 'X'
      cancelBtn.classList.add('cancel-edit-btn')
      bottomEditBtnsContainer.appendChild(cancelBtn)
      //Cancel button event listener//
      cancelBtn.addEventListener('click', (e) =>{ 
          e.preventDefault();
          editDialog.close()
  
      });
    
    
    //Confirm edit button//
    const confirmEditBtn = document.createElement('button')
    confirmEditBtn.textContent = 'Confirm Edit';
    confirmEditBtn.classList.add('confirm-edit-btn')
    bottomEditBtnsContainer.appendChild(confirmEditBtn)

    //Confirm edit button event listener//
    confirmEditBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        const dueDateEditValue = dueDateInputEdit.value

        if (titleInputEdit.value === ''
        || itemsInputEdit.value === '' || !dueDateEditValue  ) {
            alert('Please fill out required * fields')
        } else {
            list.title = titleInputEdit.value;
            contentTitle.textContent = titleInputEdit.value

            list.description = descriptionInputEdit.value
       
            list.items = itemsInputEdit.value

            list.dueDate = formatDate(dueDateInputEdit.value)
            dueDateDisplay.textContent = list.dueDate
            //Check to if it's a project or todo then store it//
       const {projectHeader} = loadPageLayout
       if (projectHeader.textContent === 'Todo') {
        addTodoToLocalStorage();
       } else {
        addProjToLocalStorage()
        }

       editDialog.close()
    
        }
       
    });

  

return {editDialog,titleInputEdit}
}


