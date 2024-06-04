let addCardBtn = document.getElementsById("addCard");

let todoContiner = document.getElementById("todo");

todoContiner.addEventListener("click" , ()=>{
    let card = document.createElement("div")
    card.className = "card";
    card.innerText ="Text Card"

    todoContiner.append(card)
 

})