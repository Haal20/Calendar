//@ts-check

import {fetchData} from '../api-context/get-data.js';
import {CalendarView} from '../view/calender-view.js';

let userYear = CalendarView();

fetchData(userYear);

console.log(userYear);










