

export function CalendarView(e) {
    e.preventDefault()
    //Get user input
    let ReqYear = year.value; 

    let headerTitle = document.getElementById('header-title');
    headerTitle.innerText = 'År: ' + ReqYear;
    // TODO -- Create button for next and previous month
    
//    fetch('https://api.dryg.net/dagar/v2.1/' + ReqYear)
//    .then(res => res.json())
//    .then(data => {   
//        main.innerText = '';
//        let array = data.dagar;

//        for (let i = 0; i < array.length; i++) {
//            let day = i + 1;
            
//            if (array[i].datum === ReqYear + '-' + '01-0' + day || array[i].datum === ReqYear + '-' + '01-' + day ) {
//                main.innerHTML += array[i].datum + ' ' + array[i].veckodag + '<br>';
//            }
//        }
//    });
}