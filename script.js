const daysE1=document.getElementById('days')
const hoursE1=document.getElementById('hours')
const minsE1=document.getElementById('mins')
const secondE1=document.getElementById('seconds')

const newYears="1 JAN 2024";


function countdown(){
    const newYearsDate =new Date(newYears);
 

    const currentDate=new Date();

    const totalsecond=(newYearsDate-currentDate)/1000;

    const days=Math.floor(totalsecond/3600/24)
    const hours =Math.floor(totalsecond /3600)%24;
    const mins=Math.floor(totalsecond/60)%60;
    const seconds=Math.floor(totalsecond)%60;
   
    daysE1.innerHTML =formatTime(days);
    hoursE1.innerHTML =formatTime(hours);
    minsE1.innerHTML =formatTime(mins);
    secondE1.innerHTML =formatTime(seconds);

}
function formatTime(time){
    return time<10? (`0${time}`):time;
}

countdown();
setInterval(countdown,1000);


