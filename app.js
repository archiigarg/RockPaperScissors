let user=0;
let comp=0;
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = ()=>{
    const options = ["rock","paper","scissors"];
    const num = Math.floor(Math.random()*3);
    return options[num];
}

const drawgame=()=>{
    msg.innerText = "Game was draw";
    msg.style.backgroundColor="#081b31";
}
const show = (userwin)=>{
    if(userwin){
        user++;
        userscorepara.innerText= user;
        msg.innerText = "YOU WIN";
        msg.style.backgroundColor="green";

    }
    else{
        comp++;
        compscorepara.innerText= comp;
        msg.innerText = "YOU LOSE";
        msg.style.backgroundColor="red";
    }

}

const playgame= (userchoice)=>{
    console.log("userchoice = ", userchoice);
    const compchoice= gencompchoice();
    console.log("compchoice = ", compchoice);
    
    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice == "rock"){
            userwin = compchoice === "paper"? false:true;
        }
        else if(userchoice=="paper"){
            userwin = compchoice === "scissors"? false:true;
        }
        else{
            userwin = compchoice === "rock"? false:true;
        }
        show(userwin);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    })
})