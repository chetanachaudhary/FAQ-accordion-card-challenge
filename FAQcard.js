const btn=document.querySelectorAll(".btnArrow");
const answer=document.querySelectorAll(".answer")



//For One time show 
// function show(e){
//     e.preventDefault();
//     for(let i=0;i<4;i++){
//     answer[i].classList.remove('hidden');
//     }
// }

// for(let j=0;j<4;j++){
// btn[j].addEventListener("click",show);
// }
function show(e){
    e.preventDefault();
    answer[0].classList.remove('hidden');
}

btn[0].addEventListener("click",show);

function show1(e){
    e.preventDefault();
    answer[1].classList.remove('hidden');
}

btn[1].addEventListener("click",show1);
function show2(e){
    e.preventDefault();
    answer[2].classList.remove('hidden');
}

btn[2].addEventListener("click",show2);
function show3(e){
    e.preventDefault();
    answer[3].classList.remove('hidden');
}

btn[3].addEventListener("click",show3);
function show4(e){
    e.preventDefault();
    answer[4].classList.remove('hidden');
}

btn[4].addEventListener("click",show4);


