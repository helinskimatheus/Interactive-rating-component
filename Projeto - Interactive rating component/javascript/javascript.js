
let ratingGlobal = 0;
let chosenRating = false;

function changeStyleTemporarily(ratingValue){
    let element = document.querySelectorAll('li');
    if(chosenRating === false){
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = 'hsl(213, 19%, 25%)';
            element[i].style.color = 'hsl(217, 12%, 63%)';
        }
        if(element[ratingValue - 1] === element[0]){
            element[ratingValue - 1].style.backgroundColor = 'hsl(25, 97%, 53%)';
            element[ratingValue - 1].style.color = 'hsl(0, 0%, 100%)';
        }
        else{
            element[ratingValue - 1].style.backgroundColor = 'hsl(25, 97%, 53%)';
            element[ratingValue - 1].style.color = 'hsl(0, 0%, 100%)';
            element[ratingValue - 2].style.backgroundColor = 'hsl(217, 12%, 63%)';
            element[ratingValue - 2].style.color = 'hsl(0, 0%, 100%)';
        }
    }
}

function changeStyleDefinitely(ratingValue){
    let element = document.querySelectorAll('li');
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = 'hsl(213, 19%, 25%)';
        element[i].style.color = 'hsl(217, 12%, 63%)';
    }
    if(element[ratingValue - 1] === element[0]){
        element[ratingValue - 1].style.backgroundColor = 'hsl(25, 97%, 53%)';
        element[ratingValue - 1].style.color = 'hsl(0, 0%, 100%)';
    }
    else{
        element[ratingValue - 1].style.backgroundColor = 'hsl(25, 97%, 53%)';
        element[ratingValue - 1].style.color = 'hsl(0, 0%, 100%)';
        element[ratingValue - 2].style.backgroundColor = 'hsl(217, 12%, 63%)';
        element[ratingValue - 2].style.color = 'hsl(0, 0%, 100%)';
    }
    chosenRating = true;
    ratingGlobal = ratingValue;
}

function changeContainerStates(){
    if(ratingGlobal === 0){
        alert("Por favor defina uma avaliação de 1 a 5!")
    }
    else{
        let changeTextRating = document.getElementById('text-chosen-rating');
        changeTextRating.innerText = "You selected " + ratingGlobal + " out of 5";

        let changeDisplayActiveStates = document.querySelector('.container-active-states');
        let changeDisplayThankYouStates = document.querySelector('.container-thank-you-states');

        changeDisplayActiveStates.classList.add('change-active-states');
        changeDisplayThankYouStates.classList.add('change-thank-you-states');
    }
}