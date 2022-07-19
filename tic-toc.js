const dis =()=>{
    var ans = document.getElementById("mus");
    ans.play();
}
const pau =()=>{
    var ans = document.getElementById("mus");
    ans.pause();
}
let initialValue = "x"
const sa = (e) => {
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
        alert(ft.innerText + " win")
    }
    else if ((a == "o" && b == "o"&& c == "o") ||((d == "o" && d1 == "o" && f == "o"))|| ((g == "o" && h == "o" && i== "o")))
    {
        alert(lp.innerText + " win") 
    } 
    else if((a == "x" && d1 == "x" && i== "x") || ((a == "x" && d== "x" && g== "x")) || ((c == "x" && f == "x" && i== "x" )) ||((c == "x" && d1 == "x" && g == "x"))){
        alert(ft.innerText + " win ");
    }
    else if((a == "o" && d1 == "o" && i== "o") || ((a == "o" && d== "o" && g== "o")) || ((c == "o" && f == "o" && i== "o" )) ||((c == "o" && d1 == "o" && g == "o"))){
        alert(lp.innerText + "win ");
    } 

    let take = document.getElementById("score").innerText = ft.innerText
    console.log(take);
}

   const now = ()=>{
   var Fr = ft.innerText = fp.value;
   var Sr = lp.innerText = sp.value;
 }
