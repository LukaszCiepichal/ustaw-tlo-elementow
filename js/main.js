console.log('Ustaw tło elementów HTML');

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    
    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');
    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';
    
    // console.log('Click! :)');

}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);



// p1.classList.toogle('bg-red');    Zamiast "add", możemy użyć "toogle", wtedy po kliknięciu przycisk kolory tła się zmienią, natomiast po ponownym kliknięciu zostaną usunięte.
// p2.classList.toogle('bg-yellow');