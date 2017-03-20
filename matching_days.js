var d1, d2, day1, days, day2, weekdays;
d1 = document.getElementById('firstDate'); 
d2 = document.getElementById('secondDate');

document.getElementById('firstDate').addEventListener('change', getDays);
document.getElementById('secondDate').addEventListener('change', getDays);
    


weekdays = document.querySelectorAll('.weekdays');


function getDays() {
    'use strict';
    
    for (var i = 0; i < weekdays.length; i++) {
		var newDate1 = new Date(d1.value);
		day1 = newDate1.getDay();
		
		if(d2.value !== ""){
			var newDate2 = new Date(d2.value);
			day2 = newDate2.getDay();
		}
        weekdays[i].classList.remove('matching');
        weekdays[i].classList.remove('dateOne');
        weekdays[i].classList.remove('dateTwo');
		
		if(day1 === day2){ 
			weekdays[day1].classList.add('matching');
		} 
		
		if(day1 !== day2 && day1 !== undefined){
			weekdays[day1].classList.add('dateOne');
			
		}
		if(day1 !== day2 && day2 !== undefined){
			weekdays[day2].classList.add('dateTwo');
		}

        }
    }
