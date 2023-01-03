// Time

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const resetParticipants = document.getElementById('resetParticipants');


const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');

const elapsedTimeElement = document.getElementById('meetingTime');
const meetingCostElement = document.getElementById('meetingCost')

let startTime;
let elapsedTime = 0;
let timerState = 0;
let timeAdj = 0;
let meetingTime;
let meetingCost = 0
let storedTime = 0
//participants

let participants = []
let secCost = 0


const addParticipant = document.getElementById('addParticipant');
const table = document.getElementById('table');



addParticipant.addEventListener('click', () => {

    var dept = document.getElementById('dept').selectedOptions[0].value;
    var grade = document.getElementById('grade').selectedOptions[0].value;

    var salary = salaryData.find(element => element.Department == dept & element.Grade == grade );
    var hourly = salary.Hr; 
    var second = salary.Sec

    let participant = {
        Department: dept ,
        Grade: grade,
        Hourly: hourly,
        Second: second 
    };

    participants.push(participant);

    //console.log(participants); 
    
    secCost = participants.reduce(function(prev, cur) {
        return prev + cur.Second;
      }, 0);
    
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    row.classList.add("govuk-table__row");
    cell1.innerHTML = participant.Department;
    cell1.classList.add("govuk-table__cell");
    cell2.innerHTML = participant.Grade;
    cell2.classList.add("govuk-table__cell");
    cell3.innerHTML = "£" + participant.Hourly.toFixed(2);
    cell3.classList.add("govuk-table__cell");

    if (timerState == 0) {
      elapsedTime = timeAdj + storedTime;
      secTime = elapsedTime / 1000
      meetingTime = msToTime(elapsedTime); 
      meetingCost = secCost * secTime ;

      elapsedTimeElement.innerHTML = `${meetingTime}`;
      meetingCostElement.innerHTML = `£${meetingCost.toFixed(2)}`;
    }

    //console.log(participant.Department);
    //console.log(participant.Grade);
    //console.log(`£${participant.Hourly.toFixed(2)}`);
      
    });





// Start Timer

startButton.addEventListener('click', () => {
    if (timerState == 1) {
        // Timer is running, so do nothing
        console.log("Timer is running")
      } else {
        // Timer is not running, so start it
        timerState = 1;
        startTime = Date.now();
        
        interval = setInterval(() => {
          elapsedTime = Date.now() - startTime + timeAdj + storedTime;
          secTime = elapsedTime / 1000
          meetingTime = msToTime(elapsedTime); 
          meetingCost = secCost * secTime ;

          elapsedTimeElement.innerHTML = `${meetingTime}`;
          meetingCostElement.innerHTML = `£${meetingCost.toFixed(2)}`;
        }, 500);
      }
    });
//Stop timer
    stopButton.addEventListener('click', () => {
        if (timerState == 1) {
            // Timer is running, so stop it
            storedTime = elapsedTime - timeAdj
            clearInterval(interval);
            interval = null;
            timerState = 0;
          } else {
            // Timer is not running, so do nothing it
            console.log("Timer not running")

          }
        });

//Restart Timer

resetButton.addEventListener('click', () => {
    
    clearInterval(interval);
    interval = null;
    timerState = 0;
    timeAdj = 0;
    storedTime = 0

    
    elapsedTimeElement.innerHTML = `00:00:00`;
    meetingCostElement.innerHTML = `£0.00`
})


//reset resetParticipants

resetParticipants.addEventListener('click', () => {
  participants = [];
  secCost = 0;
  meetingCostElement.innerHTML = `£0.00`

  while (table.length) table.remove(0);
  
  table.innerHTML = "";

})


//Add 15 mintues to timer

plusButton.addEventListener('click', () => {
        plusTime = 900000
        timeAdj = timeAdj + plusTime

      if (timerState == 0) {
        elapsedTime = timeAdj + storedTime;
        secTime = elapsedTime / 1000
        meetingTime = msToTime(elapsedTime); 
        meetingCost = secCost * secTime ;

        elapsedTimeElement.innerHTML = `${meetingTime}`;
        meetingCostElement.innerHTML = `£${meetingCost.toFixed(2)}`;
      }
    });

//var subtract



minusButton.addEventListener('click', () => {
    minusTime = -900000
    timeAdj = timeAdj + minusTime
    if (timeAdj < 0) {
      timeAdj = 0
    };
    if (timerState == 0) {
      elapsedTime = timeAdj + storedTime;
      secTime = elapsedTime / 1000
      meetingTime = msToTime(elapsedTime); 
      meetingCost = secCost * secTime ;

      elapsedTimeElement.innerHTML = `${meetingTime}`;
      meetingCostElement.innerHTML = `£${meetingCost.toFixed(2)}`;
  }
});

//ms to HHMMSS and Display

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  if (secs < 10) {
    secs = '0'+secs
  }

  if (mins < 10) {
    mins = '0'+mins
  }

  if (hrs < 10) {
    hrs = '0'+hrs
  }

  return hrs + ':' + mins + ':' + secs;
}



//DropDowns




// Salary Data (Obtained via EOI, The numbers used are based on Band Min for each grade)


let uniDept = [... new Set(salaryData.map(data => data.Department))];

var deptBox = document.getElementById('dept');
var option = document.createElement("option");
while (deptBox.options.length) deptBox.remove(0);
for (var i = 0; i < uniDept.length; i++) {
    
    var option = document.createElement('option');
    option.value = uniDept[i];
    option.innerHTML = uniDept[i];
    deptBox.appendChild(option);
  }

deptBox.addEventListener('change', () => {

    function isSelcetedDepartment(salaryData) {
        var dept = document.getElementById('dept').selectedOptions[0].value;
        return salaryData.Department == dept;
      }
    
    var filtered = salaryData.filter(isSelcetedDepartment);
    
    uniGrade = [... new Set(filtered.map(data => data.Grade ))];

    var gradeBox = document.getElementById('grade');
    var option = document.createElement("option");


while (gradeBox.options.length) gradeBox.remove(0);


for (var i = 0; i < uniGrade.length; i++) {
  var option = document.createElement('option');
  option.value = uniGrade[i];
  option.innerHTML = uniGrade[i];
  gradeBox.appendChild(option);
}


})





  // dept 
