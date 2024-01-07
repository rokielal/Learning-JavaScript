// Change text
// textContent and innerText

const mainHeading = document.getElementById("main-heading");

console.log(mainHeading.textContent); // Manage your tasks Hello

console.log(mainHeading.innerText); // Manage your tasks

// mainHeading.textContent = 'This is changed by using JavaScript textContent property'

mainHeading.innerText = 'This is changed by using JavaScript innerText property'


//Difference between textContent and innerText
/* Both textContent and innerText are properties in JavaScript that are used to access or modify the text content of an HTML element. However, there are some differences between the two:

1 - Handling of Style and Layout:

textContent: It returns the text content of all elements, including the script and style elements. It does not consider the style and layout of the elements.
innerText: It considers the style and layout of the elements. It will not return the text content of elements that are hidden with CSS (using display: none), and it may also be affected by CSS styles that modify the visual representation of the text.

2 - Browser Compatibility:

textContent: It is supported in all modern browsers, including Internet Explorer 9 and later.
innerText: It is not supported in Firefox before version 45, but it is widely supported in other modern browsers. In general, textContent is considered more consistent across browsers.

3 - Performance:

textContent: Generally, it is faster than innerText because it doesn't involve the calculation of styles and layout.
innerText: It may have a performance cost due to its consideration of styles and layout.*/
