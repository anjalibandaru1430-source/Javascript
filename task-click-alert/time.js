 function get_DT(){
    let pTag = document.getElementById("dt");
    console.log(pTag);
    pTag.innerHTML = new Date().toLocaleDateString();
}