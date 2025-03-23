let a;
let b=18;

function getage(){
    a=prompt(" Enter your age")
} 

function voting(){
    if(a>=b){
        document.getElementById("demo1").innerText="YOU ARE ELIGIBLE FOR VOTING"    
    }
    else if(a<=b){
        document.getElementById("demo1").innerText="YOU ARE  NOT ELIGIBLE FOR VOTING"    
    }
    else{
        document.getElementById("demo1").innerText="INVALID AGE"    
    }
}