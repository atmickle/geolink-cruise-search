/* EDIT HERE: Identify string used to trigger the creation of this element */

if (document.querySelector('meta[content^="Knorr (Ship : 1970-)"]')) {
var element = document.querySelector('meta[content^="Knorr (Ship : 1970-)"]').attributes;
}


if (element) {


/*if there is a matching meta element, insert a geoLink div in right column. 
EDIT HERE: Identify the class tag used to place your object, or write new logic.*/

  var topElement = document.getElementsByClassName("col-sm-8");
  var newElement = document.createElement("div");
  newElement.setAttribute("id","geoLink");
  newElement.setAttribute("class","geoLink");
  topElement[0].insertBefore(newElement,topElement[0].firstChild);
  
/*get the cruise from the element value and create gldeployment element, make contents of geoLink element*/
  
  var evalue = element.content.value;
  var cruise = evalue.split('Cruise ')[1];
  glConstruct = "<gldeployment-element params='{\"host\": \"GeoLink\", \"hosturl\":\"http://geolink.org\", \"label\": \"" + cruise + "\"}'/>"
  newElement.innerHTML = glConstruct;

}
