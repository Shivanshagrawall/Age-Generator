const input_date=document.querySelector('.date');
const calculate=document.querySelector('.calculate')
const yourAge=document.querySelector('.yourAge');


calculate.addEventListener('click',(e)=>{
    e.preventDefault();

    const dateOfBirth=new Date(input_date.value);
    if(!dateOfBirth || isNaN(dateOfBirth)){
        alert('Please Enter Your Date Of Birth');
    }
    else{
    let birthDate=dateOfBirth.getDate();
    let birthMonth=dateOfBirth.getMonth()+1;
    let birthYear=dateOfBirth.getFullYear();

    let currentDates=new Date();
    let currentYear=currentDates.getFullYear();
    let currentMonth=currentDates.getMonth()+1;
    let currentDate=currentDates.getDate();

    let date,month,year;
    year=currentYear-birthYear;

    if(currentMonth>=birthMonth){
        month=currentMonth-birthMonth;
    }
    else{
        year--;
        month=12+currentMonth-birthMonth;
    }

    if(currentDate>=birthDate){
        date=currentDate-birthDate;
    }
    else{
        month--;
        date=getDateInMonth(birthYear,birthMonth) + currentDate-birthDate;
    }
    if(month<0){
        month=11;
        year--;
    }
    console.log(year);
    console.log(month);
    console.log(date);

    yourAge.innerHTML=`<p>You are <span>${year}</span> Years, <span>${month}</span> Months and <span>${date}</span> Days old.</p>`;
    }
})

function getDateInMonth(y,m){
    return new Date(y,m,0).getDate();
}

