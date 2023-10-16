let playwin = document.querySelector('.play2');

rules.addEventListener('click', () => {
    document.getElementById('rules-defined').style.visibility = 'visible';
});


cancel.addEventListener('click', () => {
    document.getElementById('rules-defined').style.visibility = 'hidden';
});

playwin.addEventListener('click', ()=>{
    location.href = 'index.html';
})
