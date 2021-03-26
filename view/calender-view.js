//@ts-check

export function CalendarView(e) {
    e.preventDefault()

    let year = document.getElementById('year');
    //Get user input
    let ReqYear = year.value; 

    let headerTitle = document.getElementById('header-title');
    headerTitle.innerText = 'År: ' + ReqYear;


    //return ReqYear;



    let main = document.getElementById('main');
    
    fetch('https://api.dryg.net/dagar/v2.1/' + ReqYear)
    .then(res => res.json())
    .then(data => {   
        main.innerText = '';
        let array = data.dagar;

        let dt = new Date(); // 2021-03-25
        let dtDay = dt.getDate();
        let dtMonth = dt.getMonth() + 1; 
        let dtyear = dt.getFullYear();
        console.log(dtDay, dtMonth, dtyear);

        for (let i = 0; i < array.length; i++) {
            let day = i + 1;
            //div
            if (array[i].datum === ReqYear + '-' + '01-0' + day || array[i].datum === ReqYear + '-' + '01-' + day ) {
                main.innerHTML += array[i].datum + ' ' + array[i].veckodag + '<br>';
            }
            //div style
        }
    }); 
}