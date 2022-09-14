let CreatElement = function(tagName, className = ""){
  let element = document.createElement(tagName);
  element.setAttribute('class', className);
  return element;
}