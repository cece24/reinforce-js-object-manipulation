var project = {
  committee: ["Stella", "Salma", "Kai", "Cece"],
  title: "Very Important Project",
  dueDate : "December 14, 2019",
  id: "3284",
  steps: [
    {description: "conduct interviews",
     dueDate: "August 1, 2018"
    },
    {description: "code of conduct",
     dueDate: "January 1, 2018"
    },
    {description: "compile results",
     dueDate: "November 10, 2018"
    },
    {description: "version 1",
     dueDate: "January 15, 2019"
    },
    {description: "revisions",
     dueDate: "March 30, 2019"
    },
    {description: "version 2",
     dueDate: "July 12, 2019"
    },
    {description: "final edit",
     dueDate: "October 1, 2019"
    },
    {description: "final version",
     dueDate: "November 20, 2019"
    },
    {description: "Wrap up",
     dueDate: "December 1, 2019"
    }
  ]
}

//output: same object, each step has a committee member
// each committee member has an equal number of tasks

// get steps per person:
// get steps.length, divide by committee.length

// Solution 1
// var personCounter = 0;
//
// project.steps.forEach(function(step) {
//   step.person = project.committee[personCounter];
//   personCounter++;
//   if (personCounter === project.committee.length) {
//     personCounter = 0;
//   }
// });

// Solution 2
// ensures all committee members have an equal # of tasks
// even if committee members increase
var stepsPerPerson = Math.floor(project.steps.length / project.committee.length);

var currentStep = 0;

project.committee.forEach(function(person) {
  for (var i = 0; i < stepsPerPerson; i++) {
    project.steps[currentStep].person = person;
    currentStep++;
    console.log(currentStep);
  }
})

console.log(project);
