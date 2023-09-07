// console.log(document)

// console.dir(document)

// console.dir(document.URL)

// console.dir(document.domain)

// console.dir(document.body)

// console.dir(document.head)

// console.dir(document.all)

// console.dir(document.all[5])

// document.title = 'pritam'

// const body = document.body;

// // add text

// // body.append('hello', 'bye everyone')

// // body.appendChild('hello', 'bye everyone') // appendChild con not add on text

// // create new element

// const div = document.createElement('div')

// // adding text to the element

// // div.innerHTML = 'javascript'
// div.textContent = 'Javascript'

// // body.append(div)
// body.appendChild(div)

// console.log(div)



// div target in html
// // const div = document.querySelector('div');

// // console.log(div.innerText)
// // console.log(div.textContent)

// body target in html

// const body = document.body;

// // Create strong element in Html

// const div = document.createElement('div')

// // const strong = document.createElement('strong');

// // strong.innerText = "This is a bold text";

// // div.appendChild(strong);

// // // One line create element in HTML
// // div.innerHTML = '<strong> This is a bold text </strong>'

// div.innerHTML = '<strong> <p>This is a bold text </p></strong>'

// body.append(div)


// *****************************
// Remove Element in HTML

const div = document.querySelector('div');

const spanOne = document.getElementById('one')
const spantwo = document.getElementById('two')

// spantwo.remove()

// div.removeChild(spanOne)

// attributes properties  and Methods

// console.log(spanOne.getAttribute('name'))

// spanOne.setAttribute('name', 'pritam')

// spanOne.removeAttribute('name')

// spanOne.id = 'djfsiuresfe'

// // classes methods or properties

// spantwo.classList.add('new-class')
// spantwo.classList.remove('new-class')

// spantwo.className = 'new-class'

// spantwo.className = 'new-name a b s f'

// spanOne.classList.toggle('new-class') // this properties work when not present class in html

// style

// spanOne.style.setProperty('color', 'green')

spanOne.style.background = 'tomato'
spanOne.style.color = 'green'

