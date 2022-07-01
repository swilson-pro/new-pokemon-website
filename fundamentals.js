/*
we store HTML elements in Javascript variables so that we can operate on those elements programmatically.

If you need to do ANYTHING to an HTML element, via javascript, you should store that HTML in a variable.

Example: If you need to add a list item to a list element (ul / ol), then you need to both create 
an element as a variable, and since you are adding something to the list element, you should store
 that in a variable as well. 

*/


// 1. create a list item for a fruit and append it to list-1

const list1 = document.getElementById('list-1')

let li = document.createElement('li')

li.textContent = 'Apple'

list1.append(li)

// 2. create a list item for a vegetable, and append it to the list with the id = 'list-1'

let li2 = document.createElement('li')

li2.textContent = 'Celery'

list1.append(li2)
// OR

li = document.createElement('li')
li.textContent = 'Celery'
list1.append(li)

// 3. Take the ul with the id of 'list-1' and attach a list item to the end of it with 
// the text content of that list item being the name of a musical instrument.

let li3 = document.createElement('li')
li3.textContent = 'violin'
list1.append(li3)

// or

li = document.createElement('li')
li.textContent = 'Attack on Titan'
list1.append(li)

// sometimes it makes sense to create new variabales, but other times, like above, you can just overwrite the li id.
// this is faster and more efficient.

