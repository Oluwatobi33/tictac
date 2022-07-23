const dis =()=>{
    var ans = document.getElementById("mus");
    ans.play();
}
const pau =()=>{
    var ans = document.getElementById("mus");
    ans.pause();
}

 const now = ()=>{
    var Fr =   fp.value;
     var Sr = sp.value;
     if (fp.value == "" && sp.value == "") {
        err1.innerText = "Enter the value of firstplayer";
        err1.style.color = "red";
        err2.innerText = "Enter the value of firstplayer";
        err2.style.color = "red";
     }else if(fp.value !== "" && sp.value !== ""){
        ft.innerText = fp.value;
        lp.innerText = sp.value;

     }
 }
let initialValue = "x"
const sa = (e) => {
    if (fp.value != "" && sp.value != "") {
        if (initialValue == "x" && e.target.innerText == "") {
            e.target.innerText = "x";
            initialValue = "o";
        } else if (initialValue == "o" && e.target.innerText == "") {
            e.target.innerText = "o";
            initialValue = "x";
        }
        let one = document.getElementById("one1");
        let two = document.getElementById("one2");
        let three = document.getElementById("one3");
        let four = document.getElementById("two1");
        let five = document.getElementById("two2");
        let six = document.getElementById("two3");
        let seven = document.getElementById("three1");
        let eight = document.getElementById("three2");
        let nine = document.getElementById("three3");
    
        let a = one.innerHTML;
        let b = two.innerHTML;
        let c = three.innerHTML;
        let d = four.innerHTML;
        let d1 = five.innerHTML;
        let f = six.innerHTML;
        let g = seven.innerHTML;
        let h = eight.innerHTML;
        let i = nine.innerHTML;
        if ((a == "x" && b == "x" && c == "x")||((d == "x" && d1 == "x" && f == "x"))|| ((g== "x" && h== "x" && i== "x"))) {
            setTimeout(() => {
                initialValue = ""
               var v1 = document.getElementById("vic")
                v1.play() 
                won.innerHTML = ft.innerText + "" + " win round"
                sc1.value++   
            }, 50);
        }
        else if ((a == "o" && b == "o"&& c == "o") ||((d == "o" && d1 == "o" && f == "o"))|| ((g == "o" && h == "o" && i== "o")))
        {   
            setTimeout(() => {
                initialValue = ""
               var v1 = document.getElementById("vic")
                v1.play() 
                won.innerHTML = lp.innerText + "" + " win round"
                sc1.value++   
            }, 50);
        } 
        else if((a == "x" && d1 == "x" && i== "x") || ((a == "x" && d== "x" && g== "x"))  || ((b == "x" && d1 == "x" && h == "x" )) || ((c == "x" && f == "x" && i== "x" )) ||((c == "x" && d1 == "x" && g == "x"))){
            
            setTimeout(() => {
                initialValue = ""
                var v1 = document.getElementById("vic")
                v1.play() 
                won.innerHTML = ft.innerText + "" + " win round";
                sc1.value++   
            }, 50);
        }
        else if((a == "o" && d1 == "o" && i== "o") || ((a == "o" && d== "o" && g== "o")) || ((b == "o" && d1 == "o" && h == "o" )) || ((c == "o" && f == "o" && i== "o" )) ||((c == "o" && d1 == "o" && g == "o"))){

            setTimeout(() => {
                initialValue = ""
                var v1 = document.getElementById("vic")
                v1.play() 
                won.innerHTML = lp.innerText + "" + "win round";
                sc1.value++   
            }, 50);
        } 
    
        let take = document.getElementById("score").innerText = ft.innerText
        console.log(take);
    }else{
         var e = document.getElementById("Enter")
        e.innerHTML = "Enter the value of the players"
        e.style.color = "Red"
    }
    
}
 const ce = ()=>{
    initialValue = "x";
    one.innerHTML = "";
    two.innerHTML="";
    three.innerHTM ="";
    four.innerHTML="";
    five.innerHTML="";
    six.innerHTML="";
    seven.innerHTML="";
    eight.innerHTML="";
    nine.innerHTML="";
}
const re = ()=>{
    // if (fp.value !== "" && sp.value !== ""){
    //     fp.value = ""
    //     sp.value = ""
    //     ft.innerText = ""
    //     lp.innerText = ""
    //     one.innerHTML = ""
    //     four.innerHTML = "";
    //     three.innerHTML = "";
    //     five.innerHTML = "";
    //      six.innerHTML = "";
    //      seven.innerHTML = "";
    //      eight.innerHTML = "";
    //      nine.innerHTML = "";
    // }
    location.reload()
}