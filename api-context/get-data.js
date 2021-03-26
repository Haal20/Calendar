//@ts-check

export function fetchData(params) {
    

    fetch('https://api.dryg.net/dagar/v2.1/' + params)
        .then(res => res.json())
        .then(data => {   
            console.log(data);
    
    
    
       /*     main.innerText = '';
            let array = data.dagar;
    
            for (let i = 0; i < array.length; i++) {
                let day = i + 1;
                
                if (array[i].datum === ReqYear + '-' + '01-0' + day || array[i].datum === ReqYear + '-' + '01-' + day ) {
                    main.innerHTML += array[i].datum + ' ' + array[i].veckodag + '<br>';
                }
          }
           */ 
        }); 
    }