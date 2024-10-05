// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector('#masaiForm').addEventListener('submit', takedata)
var data=JSON.parse(localStorage.getItem("schedule")) || []
function takedata ()
{
    event.preventDefault();
var objdata={
matchnumber : masaiForm.matchNum.value,
teamA: masaiForm.teamA.value,
teamB: masaiForm.teamB.value,
date:masaiForm.date.value,
venue:masaiForm.venue.value
}
data.push(objdata)
console.log (data)
var schedule = localStorage.setItem("schedule", JSON.stringify(data))
window.location.reload()
}