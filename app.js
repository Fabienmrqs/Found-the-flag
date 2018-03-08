var btn = document.querySelector('.Startbutton')
var flag= document.querySelectorAll('.flag img')


    for (let i = 0; i < flag.length; i++) {
        flag[i].setAttribute('src', "flags/"+flags[Math.floor(Math.random() * flags.length)
        ].code+".svg")
        
    }

btn.addEventListener('click', function() {
    var start = document.getElementById('game-start');
    var time = document.getElementById('timer')

    

    start.classList.remove("is-open")


}); 

