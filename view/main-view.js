


export function MainView() {
    // --MAIN VIEW--
    let headerTitle = document.getElementById('header-title');
    //Give Style
    headerTitle.parentElement.style.backgroundColor = 'yellow';
    headerTitle.innerText = 'Vilket år vill du se?';

    // create elements and give attributes
    let paragraf = document.createElement('h4');
    let paragrafText = document.createTextNode('Svara i siffror (t.ex. 2020/2005)'); 


    let form = document.createElement('form');
    // -- Where user tells what year she/he wants
    let yearInput = document.createElement('input');
    yearInput.setAttribute('type', 'number');
    yearInput.id = 'year';

    let submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'skicka');
    submitInput.id = 'button';

    //append children to parents
    paragraf.appendChild(paragrafText);
    main.appendChild(paragraf);

    form.appendChild(yearInput);
    form.appendChild(submitInput);
    main.appendChild(form);
}
