const daysLeft = document.getElementById('days-left');
const button = document.getElementById('button');
const birthday = document.getElementById('birthday');

function countDays(){
const birthdayStr = birthday.value;
console.log(birthdayStr);
    if(birthdayStr == ''){
        daysLeft.classList.add('text-color');
        daysLeft.textContent = `Введите дату`;
    } else{
        const birthdayTimestamp = Date.parse(birthdayStr);
        const todayTimestamp = Date.now();
        const differenceTimestamp = birthdayTimestamp - todayTimestamp;
        const daysCounted = Math.round(differenceTimestamp/(1000*60*60*24));
        daysLeft.classList.remove('text-color');
        if (daysCounted === 1) {
            daysLeft.textContent = `Остался ${daysCounted} день`;
        } else if (daysCounted === 2 || daysCounted === 3|| daysCounted === 4){
            daysLeft.textContent = `Осталось ${daysCounted} дня`;
        } else {
            daysLeft.textContent = `Осталось ${daysCounted} дней`;
        }
    }
    
}

button.addEventListener('click', countDays);