let rules = document.getElementById('rules');
let cancel = document.getElementById('inner-cancel');
let game = document.getElementById('game');
let game_rock = game.querySelector('.rock');
let game_scissor = game.querySelector('.scissor');
let game_paper = game.querySelector('.paper');
let lost = document.querySelector('.lost-para');
let click_display = document.querySelector('.click-display');
let against_display = document.querySelector('.against-para');
let pc_pick = document.querySelector('#pc-pick');
let my_pick = document.querySelector('#my-pick');
let play_button = document.querySelector('.play-again-button');
let comp_score = document.querySelector('#computer-score');
let your_score = document.querySelector('#my-score');
let win_para = document.querySelector('.win-para');
let lost_para = document.querySelector('.lost-para');
let tie = document.querySelector('.tie');
let left_circle = document.querySelector('.circle-left');
let right_circle = document.querySelector('.circle-right');
let next_button = document.querySelector('#next');
let game_buttons = document.querySelectorAll('.big-circle');


let my_score = parseInt(localStorage.getItem('apna_score')) || 0;
let computer_score = parseInt(localStorage.getItem('uska_score')) || 0;
comp_score.innerHTML = computer_score;
your_score.innerHTML = my_score;

next_button.addEventListener('click', ()=>{
    location.href = "win.html";
})

function me_win() {
    my_score += 1;
    localStorage.setItem('apna_score', my_score);
    your_score.innerHTML = my_score;
    win_para.style.visibility = 'visible';
    left_circle.style.visibility = 'visible';
    rules.style.right = '170px';
    next_button.style.visibility = 'visible';
}

play_button.addEventListener('click', () => {
    location.reload();
})


rules.addEventListener('click', () => {
    document.getElementById('rules-defined').style.visibility = 'visible';
});


cancel.addEventListener('click', () => {
    document.getElementById('rules-defined').style.visibility = 'hidden';
})

function rock_function() {
    game_rock.removeEventListener('click', rock_function);
    game.style.visibility = 'hidden';
    game_rock.style.visibility = 'visible';
    game_rock.style.top = '20%';
    game_rock.style.left = '-12%';
    let rock_value = game_rock.getAttribute('value');
    computation(rock_value);
}

game_rock.addEventListener('click', rock_function);


function scissor_function() {
    game_scissor.removeEventListener('click', scissor_function);
    game.style.visibility = 'hidden';
    game_scissor.style.visibility = 'visible';
    game_scissor.style.top = '20%';
    game_scissor.style.left = '-12%';
    let scissor_value = game_scissor.getAttribute('value');
    computation(scissor_value);
}

game_scissor.addEventListener('click', scissor_function);


function paper_function() {
    game_paper.removeEventListener('click', paper_function);
    game.style.visibility = 'hidden';
    game_paper.style.visibility = 'visible';
    game_paper.style.top = '20%';
    game_paper.style.left = '-12%';
    let paper_value = game_paper.getAttribute('value');
    computation(paper_value);
}

game_paper.addEventListener('click', paper_function);



function computation(games) {

    game_buttons.forEach(button =>{
        button.disabled = true;
        button.classList.add('disabled-button');
    })
    

    let comp_chose = Math.floor(Math.random() * 3);
    let comp_element = document.querySelector(`[value="${comp_chose}"]`);
    let clone_comp_element = comp_element.cloneNode(true);


    against_display.style.visibility = 'visible';
    pc_pick.style.visibility = 'visible';
    my_pick.style.visibility = 'visible';
    play_button.style.visibility = 'visible';

    if (comp_chose == games) {
        document.getElementById('clone-element').append(clone_comp_element);
        tie.style.visibility = 'visible';
        against_display.style.visibility = 'hidden';
        play_button.innerHTML = 'REPLAY';
    }
    else {
        switch (true) {
            case games == 0 && comp_chose == 1:
                me_win();
                break;
            case games == 1 && comp_chose == 2:
                me_win();
                break;
            case games == 2 && comp_chose == 0:
                me_win();
                break;
            default:
                computer_score += 1;
                localStorage.setItem('uska_score', computer_score);
                comp_score.innerHTML = computer_score;
                lost_para.style.visibility = 'visible';
                right_circle.style.visibility = 'visible';
                break;
        }
        comp_element.style.visibility = 'visible';
        comp_element.style.left = '32%';
        comp_element.style.top = '20%';
    }

}




