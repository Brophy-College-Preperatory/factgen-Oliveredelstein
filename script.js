var factList = [/*everything underthis that has facts, will give you 4 facts*/ 
 "Fact 1",
 "Fact 2", 
 "Fact 3", 
 "Fact 4"];

var fact = document.getElementById("fact");/*this shows the facts as variables*/ 
var myBtn = document.getElementById("myBtn");/*this shows the facts as variables*/ 
var count = 0;/*this shows the facts as variables*/ 

myBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;/*this code restarts the code back to 0*/
  }
}
