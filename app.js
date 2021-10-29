var clickCount = 0;
var ids = []
btns = document.querySelectorAll("div")

btns.forEach(element => {
    ids.push(element.id);
    element.addEventListener('click', (e) => {
    //alert(`i work and my id is ${e.target.id}`);
    //console.log(e.target.id);
    id = e.target.id;
    //ids.push(id);
    elem= document.getElementById(id);
    //element.innerText = 'X';
    flipPlayer();
    clickCount++;
    //console.log(clickCount);
    function flipPlayer() {
        if (clickCount === 0 || clickCount === 2 || clickCount == 4 || clickCount === 6 || clickCount === 8) {
           element.innerText = 'X';
        } else {
            element.innerText = 'O'
        }
    }
    
    function checkForWin() {
    //console.log(ids[0]);
    //eleme = document.getElementById(ids[0])
    if (document.getElementById(ids[0]).innerText == 'X' && document.getElementById(ids[1]).innerText == 'X' && document.getElementById(ids[2]).innerText == 'X' || document.getElementById(ids[0]).innerText == 'O' && document.getElementById(ids[1]).innerText == 'O' && document.getElementById(ids[2]).innerText == 'O' || document.getElementById(ids[3]).innerText == 'X' && document.getElementById(ids[4]).innerText == 'X' && document.getElementById(ids[5]).innerText == 'X' || document.getElementById(ids[3]).innerText == 'O' && document.getElementById(ids[4]).innerText == 'O' && document.getElementById(ids[5]).innerText == 'O' || document.getElementById(ids[6]).innerText == 'X' && document.getElementById(ids[7]).innerText == 'X' && document.getElementById(ids[8]).innerText == 'X' || document.getElementById(ids[6]).innerText == 'O' && document.getElementById(ids[7]).innerText == 'O' && document.getElementById(ids[8]).innerText == 'O' || document.getElementById(ids[0]).innerText == 'O' && document.getElementById(ids[3]).innerText == 'O' && document.getElementById(ids[6]).innerText == 'O' || document.getElementById(ids[0]).innerText == 'X' && document.getElementById(ids[3]).innerText == 'X' && document.getElementById(ids[6]).innerText == 'X' || document.getElementById(ids[1]).innerText == 'X' && document.getElementById(ids[4]).innerText == 'X' && document.getElementById(ids[7]).innerText == 'X' || document.getElementById(ids[1]).innerText == 'O' && document.getElementById(ids[4]).innerText == 'O' && document.getElementById(ids[7]).innerText == 'O' || document.getElementById(ids[2]).innerText == 'X' && document.getElementById(ids[5]).innerText == 'X' && document.getElementById(ids[8]).innerText == 'X' || document.getElementById(ids[2]).innerText == 'O' && document.getElementById(ids[5]).innerText == 'O' && document.getElementById(ids[8]).innerText == 'O' || document.getElementById(ids[0]).innerText == 'X' && document.getElementById(ids[1]).innerText == 'X' && document.getElementById(ids[2]).innerText == 'X' || document.getElementById(ids[0]).innerText == 'O' && document.getElementById(ids[1]).innerText == 'O' && document.getElementById(ids[2]).innerText == 'O' || document.getElementById(ids[3]).innerText == 'X' && document.getElementById(ids[4]).innerText == 'X' && document.getElementById(ids[5]).innerText == 'X' || document.getElementById(ids[3]).innerText == 'O' && document.getElementById(ids[4]).innerText == 'O' && document.getElementById(ids[5]).innerText == 'O' || document.getElementById(ids[6]).innerText == 'X' && document.getElementById(ids[7]).innerText == 'X' && document.getElementById(ids[8]).innerText == 'X' || document.getElementById(ids[6]).innerText == 'O' && document.getElementById(ids[7]).innerText == 'O' && document.getElementById(ids[8]).innerText == 'O' || document.getElementById(ids[0]).innerText == 'O' && document.getElementById(ids[3]).innerText == 'O' && document.getElementById(ids[6]).innerText == 'O' || document.getElementById(ids[1]).innerText == 'X' && document.getElementById(ids[4]).innerText == 'X' && document.getElementById(ids[7]).innerText == 'X' || document.getElementById(ids[1]).innerText == 'O' && document.getElementById(ids[4]).innerText == 'O' && document.getElementById(ids[7]).innerText == 'O' || document.getElementById(ids[2]).innerText == 'X' && document.getElementById(ids[5]).innerText == 'X' && document.getElementById(ids[8]).innerText == 'X' || document.getElementById(ids[2]).innerText == 'O' && document.getElementById(ids[5]).innerText == 'O' && document.getElementById(ids[8]).innerText == 'O' || document.getElementById(ids[0]).innerText == 'O' && document.getElementById(ids[4]).innerText == 'O' && document.getElementById(ids[8]).innerText == 'O' || document.getElementById(ids[0]).innerText == 'X' && document.getElementById(ids[4]).innerText == 'X' && document.getElementById(ids[8]).innerText == 'X' || document.getElementById(ids[2]).innerText == 'O' && document.getElementById(ids[4]).innerText == 'O' && document.getElementById(ids[6]).innerText == 'O' || document.getElementById(ids[2]).innerText == 'X' && document.getElementById(ids[4]).innerText == 'X' && document.getElementById(ids[6]).innerText == 'X' ) {
        console.log("You win!")
        document.querySelector('p').innerText = 'You Win!'  } 
    };
    checkForWin();
    });     
});

reset_btn = document.querySelector('button') 
reset_btn.addEventListener("click", () => {
    btns.forEach(element => {
        element.innerText = '';
        document.querySelector('p').innerText = ''
    })
clickCount = 0; 
});