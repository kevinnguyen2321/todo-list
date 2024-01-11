

export const viewListDetails = function (list) {
   const viewDialog = document.createElement('dialog');
   viewDialog.classList.add('view-modal')
   const viewListContainer = document.createElement('div')
   viewListContainer.classList.add('view-container')
   viewDialog.appendChild(viewListContainer)
   //Title //
   const titleContainer = document.createElement('div')
   titleContainer.classList.add('title-container')
  
   const title = document.createElement('h2')
   title.textContent = 'Title:'

   const titleValue = document.createElement('p')
   titleValue.textContent = list.title

   titleContainer.appendChild(title)
   titleContainer.appendChild(titleValue)

   viewListContainer.appendChild(titleContainer)

   // Description // 
   const descriptionContainer = document.createElement('div')
   descriptionContainer.classList.add('description-container')

   const descriptionView = document.createElement('h2')
   descriptionView.textContent = 'Description:'

   const descriptionViewValue = document.createElement('p')
   descriptionViewValue.textContent = list.description

   descriptionContainer.appendChild(descriptionView)
   descriptionContainer.appendChild(descriptionViewValue)
   viewListContainer.appendChild(descriptionContainer)

   // List items//
   const listItemsContainer = document.createElement('div')
   listItemsContainer.classList.add('list-items-container')

   const listItemHeader = document.createElement('h2')
   listItemHeader.textContent = 'Items/Tasks:'

   const listItemsValues = document.createElement('p')
   listItemsValues.textContent = list.items;

   listItemsContainer.appendChild(listItemHeader)
   listItemsContainer.appendChild(listItemsValues)

   viewListContainer.appendChild(listItemsContainer)

   //Due date// 
   const dueDateContainer = document.createElement('div')
   dueDateContainer.classList.add('due-date-container')

   const dueDateHeader = document.createElement('h2')
   dueDateHeader.textContent = 'Due Date:'

   const dueDateValue = document.createElement('p')
   dueDateValue.textContent = list.dueDate

   dueDateContainer.appendChild(dueDateHeader)
   dueDateContainer.appendChild(dueDateValue)
   viewListContainer.appendChild(dueDateContainer)

   // Priority//

   const priorityContainer= document.createElement('div')
   priorityContainer.classList.add('priority-container')

   const priorityHeader = document.createElement('h2')
   priorityHeader.textContent = 'Priority:'
   const priorityValue = document.createElement('p')
   priorityValue.textContent = list.priority

   priorityContainer.appendChild(priorityHeader)
   priorityContainer.appendChild(priorityValue)
   viewListContainer.appendChild(priorityContainer)
   


// Close button for view modal//
   const closeViewModalBtn = document.createElement('button')
   closeViewModalBtn.textContent = 'x'
   closeViewModalBtn.classList.add('view-modal-close')
   viewDialog.appendChild(closeViewModalBtn);

   closeViewModalBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      viewDialog.close();
   });


  return {viewDialog}
}


