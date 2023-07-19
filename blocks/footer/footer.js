
    //Targetting to Get Footer class
var targetElem = document.querySelector('.footer');
    //Creating First div
var firstContainer = document.createElement('div');
    //creating second div
var secondContainer = document.createElement('div');
    //appending className to first div
firstContainer.classList.add('container','pt50','pb50');
    //appending className to second div
secondContainer.classList.add('row');
    //appending child node to first div
firstContainer.appendChild(secondContainer);
    //appending created div's to main targeted Element Footer
targetElem.appendChild(firstContainer,targetElem);
      targetElem.append(targetElem);
 
