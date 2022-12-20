// Time

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');

const elapsedTimeElement = document.getElementById('meetingTime');
const meetingCostElement = document.getElementById('meetingCost')

let startTime;
let elapsedTime = 0;
let timerState;
let timeAdj = 0;
let meetingTime;
let meetingCost = 0

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
          elapsedTime = Date.now() - startTime + timeAdj;
          secTime = elapsedTime / 1000
          meetingTime = msToTime(elapsedTime); 
          meetingCost = secCost * secTime ;
          //console.log(`Elapsed time: ${elapsedTime} milliseconds`);
          //console.log(`meeting cost ${meetingCost}`)
          //console.log(`Sec time ${secTime}`)
          //console.log(`Sec Cost ${secCost}`)
          
          
          elapsedTimeElement.innerHTML = `${meetingTime}`;
          meetingCostElement.innerHTML = `£${meetingCost.toFixed(2)}`;
        }, 500);
      }
    });
//Stop timer
    stopButton.addEventListener('click', () => {
        if (timerState == 1) {
            // Timer is running, so stop it
            clearInterval(interval);
            interval = null;
            timerState = 0;
          } else {
            // Timer is not running, so do nothing it
            console.log("Timer not running")

          }
        });

//Restart Timer

//Add 15 mintues to timer

plusButton.addEventListener('click', () => {
        plusTime = 900000
        timeAdj = timeAdj + plusTime
        console.log("Time Added")
    });

//var subtract



minusButton.addEventListener('click', () => {
    minusTime = -900000
    timeAdj = timeAdj + minusTime
    console.log("Time Sub trackted ")
});

//ms to HHMMSS and Display

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return hrs + ':' + mins + ':' + secs;
}



//DropDowns




// Salary Data (Obtained via EOI, The numbers used are based on Band Min for each grade)
   let salaryData = [
    {
      "Department": "Cabinet Office",
      "Grade": "AO",
      "Salary": 21722,
      "Weekly": 417.7307692,
      "Daily": 83.54615385,
      "Hr": 11.29002079,
      "Min": 0.188167013,
      "Sec": 0.003136117
    },
    {
      "Department": "Cabinet Office",
      "Grade": "EO",
      "Salary": 24327,
      "Weekly": 467.8269231,
      "Daily": 93.56538462,
      "Hr": 12.64397089,
      "Min": 0.210732848,
      "Sec": 0.003512214
    },
    {
      "Department": "Cabinet Office",
      "Grade": "AO (L)",
      "Salary": 25277,
      "Weekly": 486.0961538,
      "Daily": 97.21923077,
      "Hr": 13.13773389,
      "Min": 0.218962231,
      "Sec": 0.003649371
    },
    {
      "Department": "Cabinet Office",
      "Grade": "Fast Stream",
      "Salary": 28000,
      "Weekly": 538.4615385,
      "Daily": 107.6923077,
      "Hr": 14.55301455,
      "Min": 0.242550243,
      "Sec": 0.004042504
    },
    {
      "Department": "Cabinet Office",
      "Grade": "EO (L)",
      "Salary": 28050,
      "Weekly": 539.4230769,
      "Daily": 107.8846154,
      "Hr": 14.57900208,
      "Min": 0.242983368,
      "Sec": 0.004049723
    },
    {
      "Department": "Cabinet Office",
      "Grade": "HEO",
      "Salary": 32640,
      "Weekly": 627.6923077,
      "Daily": 125.5384615,
      "Hr": 16.96465696,
      "Min": 0.282744283,
      "Sec": 0.004712405
    },
    {
      "Department": "Cabinet Office",
      "Grade": "HEO (L)",
      "Salary": 35241,
      "Weekly": 677.7115385,
      "Daily": 135.5423077,
      "Hr": 18.31652807,
      "Min": 0.305275468,
      "Sec": 0.005087924
    },
    {
      "Department": "Cabinet Office",
      "Grade": "SEO",
      "Salary": 38046,
      "Weekly": 731.6538462,
      "Daily": 146.3307692,
      "Hr": 19.77442827,
      "Min": 0.329573805,
      "Sec": 0.005492897
    },
    {
      "Department": "Cabinet Office",
      "Grade": "SEO (L)",
      "Salary": 41412,
      "Weekly": 796.3846154,
      "Daily": 159.2769231,
      "Hr": 21.52390852,
      "Min": 0.358731809,
      "Sec": 0.005978863
    },
    {
      "Department": "Cabinet Office",
      "Grade": "G7",
      "Salary": 50694,
      "Weekly": 974.8846154,
      "Daily": 194.9769231,
      "Hr": 26.34823285,
      "Min": 0.439137214,
      "Sec": 0.007318954
    },
    {
      "Department": "Cabinet Office",
      "Grade": "G7 (L)",
      "Salary": 55794,
      "Weekly": 1072.961538,
      "Daily": 214.5923077,
      "Hr": 28.9989605,
      "Min": 0.483316008,
      "Sec": 0.008055267
    },
    {
      "Department": "Cabinet Office",
      "Grade": "G6",
      "Salary": 61710,
      "Weekly": 1186.730769,
      "Daily": 237.3461538,
      "Hr": 32.07380457,
      "Min": 0.53456341,
      "Sec": 0.00890939
    },
    {
      "Department": "Cabinet Office",
      "Grade": "G6 (L)",
      "Salary": 65790,
      "Weekly": 1265.192308,
      "Daily": 253.0384615,
      "Hr": 34.19438669,
      "Min": 0.569906445,
      "Sec": 0.009498441
    },
    {
      "Department": "Cabinet Office",
      "Grade": "DD",
      "Salary": 73000,
      "Weekly": 1403.846154,
      "Daily": 280.7692308,
      "Hr": 37.94178794,
      "Min": 0.632363132,
      "Sec": 0.010539386
    },
    {
      "Department": "Cabinet Office",
      "Grade": "D",
      "Salary": 95000,
      "Weekly": 1826.923077,
      "Daily": 365.3846154,
      "Hr": 49.37629938,
      "Min": 0.822938323,
      "Sec": 0.013715639
    },
    {
      "Department": "Cabinet Office",
      "Grade": "DG",
      "Salary": 125000,
      "Weekly": 2403.846154,
      "Daily": 480.7692308,
      "Hr": 64.96881497,
      "Min": 1.082813583,
      "Sec": 0.018046893
    },
    {
      "Department": "Cabinet Office",
      "Grade": "Perm Sec",
      "Salary": 200000,
      "Weekly": 3846.153846,
      "Daily": 769.2307692,
      "Hr": 103.950104,
      "Min": 1.732501733,
      "Sec": 0.028875029
    },
    {
      "Department": "NHS",
      "Grade": "Band 1",
      "Salary": 20270,
      "Weekly": 389.8076923,
      "Daily": 77.96153846,
      "Hr": 10.53534304,
      "Min": 0.175589051,
      "Sec": 0.002926484
    },
    {
      "Department": "NHS",
      "Grade": "Band 2",
      "Salary": 20270,
      "Weekly": 389.8076923,
      "Daily": 77.96153846,
      "Hr": 10.53534304,
      "Min": 0.175589051,
      "Sec": 0.002926484
    },
    {
      "Department": "NHS",
      "Grade": "Band 3",
      "Salary": 21730,
      "Weekly": 417.8846154,
      "Daily": 83.57692308,
      "Hr": 11.29417879,
      "Min": 0.188236313,
      "Sec": 0.003137272
    },
    {
      "Department": "NHS",
      "Grade": "Band 4",
      "Salary": 23949,
      "Weekly": 460.5576923,
      "Daily": 92.11153846,
      "Hr": 12.4475052,
      "Min": 0.20745842,
      "Sec": 0.00345764
    },
    {
      "Department": "NHS",
      "Grade": "Band 5",
      "Salary": 27055,
      "Weekly": 520.2884615,
      "Daily": 104.0576923,
      "Hr": 14.06185031,
      "Min": 0.234364172,
      "Sec": 0.00390607
    },
    {
      "Department": "NHS",
      "Grade": "Band 6",
      "Salary": 33706,
      "Weekly": 648.1923077,
      "Daily": 129.6384615,
      "Hr": 17.51871102,
      "Min": 0.291978517,
      "Sec": 0.004866309
    },
    {
      "Department": "NHS",
      "Grade": "Band 7",
      "Salary": 41659,
      "Weekly": 801.1346154,
      "Daily": 160.2269231,
      "Hr": 21.6522869,
      "Min": 0.360871448,
      "Sec": 0.006014524
    },
    {
      "Department": "NHS",
      "Grade": "Band 8a",
      "Salary": 48526,
      "Weekly": 933.1923077,
      "Daily": 186.6384615,
      "Hr": 25.22141372,
      "Min": 0.420356895,
      "Sec": 0.007005948
    },
    {
      "Department": "NHS",
      "Grade": "Band 8b",
      "Salary": 56164,
      "Weekly": 1080.076923,
      "Daily": 216.0153846,
      "Hr": 29.19126819,
      "Min": 0.486521137,
      "Sec": 0.008108686
    },
    {
      "Department": "NHS",
      "Grade": "Band 8c",
      "Salary": 67064,
      "Weekly": 1289.692308,
      "Daily": 257.9384615,
      "Hr": 34.85654886,
      "Min": 0.580942481,
      "Sec": 0.009682375
    },
    {
      "Department": "NHS",
      "Grade": "Band 8d",
      "Salary": 79592,
      "Weekly": 1530.615385,
      "Daily": 306.1230769,
      "Hr": 41.36798337,
      "Min": 0.689466389,
      "Sec": 0.011491106
    },
    {
      "Department": "NHS",
      "Grade": "Band 9",
      "Salary": 95135,
      "Weekly": 1829.519231,
      "Daily": 365.9038462,
      "Hr": 49.4464657,
      "Min": 0.824107762,
      "Sec": 0.013735129
    }
   ]

let uniDept = [... new Set(salaryData.map(data => data.Department))];



function isSelcetedDepartment(salaryData) {
    var dept = document.getElementById('dept').selectedOptions[0].value;
    return salaryData.Department == dept;
  }

const filtered = salaryData.filter(isSelcetedDepartment);


uniGrade = [... new Set(filtered.map(data => data.Grade ))];
  // dept 