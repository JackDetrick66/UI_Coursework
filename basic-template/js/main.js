

console.log("Hello!  This is your javascript file."); 


function entry(date, text, tired, happy, sad, motiv, sleep) {
    return {
        uDate: date,
        uText: text,
        uTired: tired,
        uHappy: happy,
        uSad: sad,
        uMotiv: motiv,
        uSleep: sleep
    };
}
let userEntries = []
let sleepTime = 0



function getSleepTime(){
    document.getElementById("sleepTotal").innerText = sleepTime;
}


function showTime() {
    
    const date = new Date();
    const time = date.toLocaleTimeString();
    const dateUse = date.toLocaleDateString();
    document.getElementById("time").innerText = time; 
    document.getElementById("date").innerText = dateUse;

}

function getSleep(){
        sleepTime = 0;
        for (let i = 0; i < userEntries.length; i++){
        sleepTime += userEntries[i].uSleep;
        }
}

function submitFunc(){
     let overWriteFlag = 0;
     const date = new Date();
     const dateUse = date.toLocaleDateString();
     const newEntry = entry(dateUse, 
        document.getElementById("textEntry").value,
        document.getElementById("Tired").checked,
        document.getElementById("Happy").checked,
        document.getElementById("Sad").checked,
        document.getElementById("Motiv").checked,
        Number(document.getElementById("sleepNum").value)
    )

    for (let i = 0; i < userEntries.length; i++){
        if(userEntries[i].uDate == dateUse){
            userEntries[i] = newEntry;
            overWriteFlag = 1;
        }
    }
    if(overWriteFlag != 1){
        userEntries.push(newEntry)
    }
    getSleep();
    getSleepTime();
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(showTime, 1000)
    document.getElementById("sleepTotal").innerText = sleepTime;
    document.getElementById("Submit").addEventListener("click", submitFunc);
});



