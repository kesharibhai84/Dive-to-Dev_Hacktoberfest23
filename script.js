//dont change this code line 2 to 5
let logoimg = document.getElementById("logo");
      logoimg.style.height = "250px";
      logoimg.style.width = "100%";

/*this file is mainly made for the search tab for searching the project*/
let projectName;
 function findProject(){
    projectName=document.getElementById("proname").value;
    if(projectName.toLowerCase()=="amazon"){
        let findCard=document.getElementById("amazon");
        document.body.innerHTML= findCard.innerHTML;
        
    }else{
        let img = new Image();
            img.src ='Notfound-img.jpg';
            document.getElementById('body').appendChild(img);
    }
}

