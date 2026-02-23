1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANSWER: getElementById        : Finds a single element by its ID
        getElementsByClassName : Finds all elements with a specific class name
        querySelector          : Selects the first matching element using a CSS selector
      querySelectorAll    : Selects all matching elements using a CSS selector, requires a loop

2. How do you create and insert a new element into the DOM?
ANSWER:
Create a new element, add content, then insert it into the parent.
    const div = document.createElement("div");
   div.innerText = "Hello";
   document.body.appendChild(div); 

3. What is Event Bubbling? And how does it work?
ANSWER:
When an element is clicked, the event starts from that element and spreads to the parent elements above it one by one.
When a button is clicked: button-div-section-body-document
4. What is Event Delegation in JavaScript? Why is it useful?
ANSWER:
Event delegation is the process of placing a single listener on a common parent element, rather than having separate event listeners on multiple child elements.
​Why is it needed- It saves memory and requires less code.

5. What is the difference between preventDefault() and stopPropagation() methods?
ANSWER:
preventDefault() → stops the browser's default behavior ( stopping page reloads when a form is submitted)

stopPropagation() → prevents the event from going to the parent


