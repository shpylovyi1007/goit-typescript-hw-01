enum DayOfWeek {
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday,
     Sunday
    }
    
    
    const isWeekend = (day:DayOfWeek) => {
if(day > 4) {
    return true;
}        else {
    return false;
}
    }
    