// write js code here corresponding to favourites.html
var getItem=JSON.parse(localStorage.getItem("favourites"))
function displayfunc(getItem){
    getItem.forEach(function(element,index) {
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
        td6.innerText="DELETE"
        // td6.style.color="Green"
        td6.style.cursor="pointer"
        td6.addEventListener("click" ,function(){
          fav(element,index)
        })
        

        var tbody=document.querySelector('tbody')
    tbody.append(tr)
    tr.append(td1,td2,td3,td4,td5,td6);

    }); 
        }
displayfunc(getItem)
function fav(element,index){
    getItem.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(getItem));
    window.location.reload()
}