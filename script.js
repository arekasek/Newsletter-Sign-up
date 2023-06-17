var sendButton = document.getElementById("send");
sendButton.addEventListener("click",()=>{
    var text = document.getElementById("email").value;
    var address = document.getElementById("address");
    var input = document.getElementById("email");
    if(text.includes("@")){
        location.href = 'page.html';
    }
    else{
        address.style.color = "hsl(4, 100%, 67%)";
        address.innerHTML = "Valid email required";
        input.style.color = "hsl(4, 100%, 67%)";
        input.style.background= "hsl(0, 70%, 87%)";
        input.style.border = "1px solid hsl(4, 100%, 67%)";
    }
    console.log(text);
})