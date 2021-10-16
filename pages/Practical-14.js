var data = 0 ;


document.getElementById("number").innerText=data;

function increment(){

    data = data + 1;
    document.getElementById("number").innerText=data;

    if(data>0){
        document.getElementById("minus").disabled=false;
    }

}

function decrement(){

    
    if(data==0){
        document.getElementById("minus").disabled=true;
    }

    data = data - 1;
    document.getElementById("number").innerText=data;
}

