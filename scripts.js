function displace(){
    this.style.marginLeft =="300px" ? this.style.marginLeft = "0px":this.style.marginLeft="300px";
}


document.getElementById("no").addEventListener("click", displace);

