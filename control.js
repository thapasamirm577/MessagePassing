const submit = document.getElementById("submit");
const messageShow = document.getElementById("messageshow");
const message = document.getElementById("message");

submit.addEventListener("click", function(){
    const alert = document.getElementById("alert");
    const showMessage = document.querySelector("#showmessage");

    if(message.value === ""){
        alert.classList.add("show");
        setTimeout(function(){
            alert.classList.remove("show")
        },2000);
    }else{
        showMessage.innerHTML = message.value;
        message.value = "";
    }
})
