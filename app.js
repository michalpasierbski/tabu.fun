document.querySelector('button#graj').addEventListener('click', game);
document.querySelector('.success-button button').addEventListener('click', game);
var intv_timebar, intv, is_loaded = false, words, used_words;
function game() {
    if(!is_loaded) {
        //import json file
        var xhr = new XMLHttpRequest();
        xhr.open('GET', document.querySelector("#cat").value+'_'+document.querySelector("#lang").value+'.json', true);
        xhr.onload = function() {
            if(this.status == 200) {
                is_loaded = true;
                words = JSON.parse(this.responseText);
                show_word();
            }
        }
        xhr.send();

    } else
        show_word();
    clearInterval(intv_timebar);
    clearInterval(intv);
    document.querySelector('main').style.display = 'none';
    document.querySelector('.game').style.display = 'none';
    document.querySelector('section.loader').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('section.loader').style.display = 'none';
        document.querySelector('.game').style.display = 'block';
    }, 3000);
    var fnts = 110;
    var intv_s = setInterval(() => {
        document.querySelector('#countdown').style.fontSize = fnts + 'px';
        fnts -= 0.5;
    }, 10);
        intv = setInterval(() => {
        fnts = 110;
        document.querySelector('#countdown').innerHTML = parseInt(document.querySelector('#countdown').innerHTML) - 1;
        if(parseInt(document.querySelector('#countdown').innerHTML) == 0) {
            document.querySelector('#countdown').innerHTML = 3;
            clearInterval(intv);
            clearInterval(intv_s);
            navigator.vibrate(500);
            var timebar = document.querySelector('.timebar-fill');
            var timebar_width = 100;
            intv_timebar = setInterval(() => {
                timebar_width -= 1/(document.querySelector("#time").value);
                timebar.style.width = timebar_width + '%';
                if(timebar_width < 0) {
                    navigator.vibrate([100,50,100,50,100,500,100,50,100,50,100,500,100,50,100,50,100]);
                    clearInterval(intv_timebar);
                    document.querySelector('.time-up').style.display = 'block';
                    document.querySelector('.game').style.display = 'none';
                    document.querySelector('.time-up button').addEventListener('click', function() {
                        document.querySelector('.time-up').style.display = 'none';
                        game();
                    });
                }
            }, 10);
        }
    }, 1000);
}
function show_word() {
    var word = words[Math.floor(Math.random() * words.length)];
    document.querySelector('.question-text').innerHTML = word.word;
    document.querySelector('.question-answer:nth-of-type(1)').innerHTML = word.banned1;
    document.querySelector('.question-answer:nth-of-type(2)').innerHTML = word.banned2;
    document.querySelector('.question-answer:nth-of-type(3)').innerHTML = word.banned3;
    document.querySelector('.question-answer:nth-of-type(4)').innerHTML = word.banned4;
    document.querySelector('.question-answer:nth-of-type(5)').innerHTML = word.banned5;
    document.querySelector('.question-answer:nth-of-type(6)').innerHTML = word.banned6;
}