// document.querySelector("button").addEventListener("click",handleClick);

// // the problem in line 1 for not having parenthesis after the name of function is that 
// //even if the user does not click on the button it would still give an alert
// //it means to pass a function as input so that it cud be called at a later time.
// function handleClick(){
//     alert("I got clicked!");
// }

// document.querySelector("button").addEventListener("click",function(){
//     //write all code 
//     // what you want to be done when the buttons gets clicked.
//     alert("I got clicked!");
// });
// we are calling this anonymous function 
//NOTE = BOTH THE ABOVE SNIPPETS GIVE THE SMAE RESULTS.

for(var i = 0; i < document.querySelectorAll(".drum").length ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //this.style.color = "white";
        // if in the above line we remove console.log then too it works fine.
        var character = this.innerHTML;
        makeSound(character);
        addAnimation(character);
    });
        
} 
document.addEventListener("keypress",function(event){
    //document selected entirely
    // console.log(event);
    makeSound(event.key);
    addAnimation(event.key);

});

function makeSound(key){
    switch(key){
        case "w":
            var gh = new Audio("crash.mp3");
            gh.play();
            break;
        case "a":
            var gh = new Audio("snare.mp3");
            gh.play();
            break;
        case "s":
            var gh = new Audio("kick-bass.mp3");
            gh.play();
            break;
        case "d":
            var gh = new Audio("tom-1.mp3");
            gh.play();
            break;
        case "j":
            var gh = new Audio("tom-2.mp3");
            gh.play();
            break;
        case "k":
            var gh = new Audio("tom-3.mp3");
            gh.play();
            break;
        case "l":
            var gh = new Audio("tom-4.mp3");
            gh.play();
            break;
        default:console.log(key);
    };
}
function addAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100);
}
    
// var gh = new Audio("snare.mp3");
// gh.play();