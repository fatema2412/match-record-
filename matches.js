function filterVenue(){
    var selectedvalue=document.querySelector("#filterVenue").value;
    var tbody=document.querySelector('tbody')
    tbody.innerHTML=""
    if(selectedvalue=="none"){
      displayfunc(schedule)
    }
    else{
 var filterMactes=schedule.filter(function(element){
  return  element.venue==selectedvalue;
 })
 displayfunc(filterMactes)
    }
  }

    var schedule= JSON.parse( localStorage.getItem ("schedule"))
    console.log(schedule);

    function displayfunc(schedule){
        schedule.forEach(element => {
            var tr =document.createElement("tr")
            var td1=document.createElement("td")
            td1.innerText=element.matchnumber
            var td2=document.createElement("td")
            td2.innerText=element.teamA
            var td3=document.createElement("td")
            td3.innerText=element.teamB            
            var td4=document.createElement("td")
            td4.innerText=element.venue
            var td4=document.createElement("td")
            td4.innerText=element.date
            var td5=document.createElement("td")
            td5.innerText=element.venue
            var td6=document.createElement("td")
            td6.innerText="Favourites"
            td6.style.color="Green"
            td6.style.cursor="pointer"
            td6.addEventListener("click" ,function(){
              fav(element)
            })
            

            var tbody=document.querySelector('tbody')
        tbody.append(tr)
        tr.append(td1,td2,td3,td4,td5,td6);

        }); 
            }
    displayfunc(schedule)
    var newarr= JSON.parse(localStorage.getItem("favourites"))||[]
 function fav(element){
 newarr.push(element)
 localStorage.setItem("favourites",JSON. stringify(newarr))

 }