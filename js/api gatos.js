var gatos="Bambino";

function buscar(){
    var element = document.getElementById("elem");
    element.innerHTML="";

    gatos=document.getElementById("nameGatos").value;
    console.log("gatos:"+gatos);
        

    const url = "https://api.thecatapi.com/v1/breeds";
    fetch(url)
    .then(function(response){
        return response.json();    
    })


    .then(function(data){
        long=data.length;
        console.log("lenght:"+ long);
        console.log(data);



        var res= data.filter(item=>item.name===gatos);
            console.log(res);

            var div=crearNodo("div");
            var nombre=crearNodo("p");
            var foto=crearNodo("img");
           
            
            nombre.innerHTML=res[0].name;
            foto.src=res[0].image.url;
            foto.style.width='100%';
            foto.style.height='220px';


            adjuntar(div,nombre);
            adjuntar(div,foto);
            
            adjuntar(element,div);



    })

    .catch(function(error){
        console.log(error);           
    });

    function crearNodo(elemento){
        return document.createElement(elemento);
    }

    function adjuntar(padre,hijo){
        return padre.appendChild(hijo);
    }    

}