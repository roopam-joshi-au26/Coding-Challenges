var pushbtn = document.getElementById("pushbtn");
var ans = document.getElementById("answer");
var popbtn = document.getElementById("popbtn");
var arr = []

pushbtn.addEventListener("click", function(){
    var input = document.getElementById("enter").value;
    arr.push(input)
    ans.innerText=arr
    console.log(arr)
})

popbtn.addEventListener("click", function(){
    arr.pop()
    ans.innerText=arr
})