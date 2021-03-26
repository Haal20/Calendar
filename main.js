//@ts-check

import {CalendarView, MainView} from './view/index.js';
//import {CalendarView} from './view/calender-view.js';
//import {MainView} from './view/main-view.js';


MainView();


// --KALENDER VIEW-- depending on what year
let button = document.getElementById('button');
button.addEventListener('click', CalendarView);

