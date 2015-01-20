
var bio = {
  name: "Brandon Carag",
  role: "Web Developer",
  contacts: {
    mobile: "408-571-9893",
    email: "brandon.carag@gmail.com",
    github: "https://github.com/brandon-carag",
    blog: "http://brandoncarag.wordpress.com",
    location: "San Francisco Bay Area"
},
  welcomeMessage: "My name is Brandon and I’m a web developer here in San Francisco. Ping me on Linkedin if you’d like to connect.  I’m always up for a good conversation, opportunity, or learning something new! =)",
  skills: ["Ruby","Rails","javascript","jQuery","HTML","CSS","Bootstrap"],
  biopic: "images/me.jpg"
  // display: function What goes here?
};

var education = {
  schools: [
  { "name": "University of California, Berkeley",
    "location": "Berkeley, CA",
    "degree": "Bachelor's of Science",
    "major": "Business Administration",
    "dates": "2007",
    "url": "http://www.berkeley.edu" },
  { "name": "University of California, Berkeley Extension",
    "location": "San Francisco, CA",
    "degree": "Technical Coursework",
    "major": "Post-bacclaureate",
    "dates": "2011",
    "url": "http://extension.berkeley.edu" }
  ],
  onlineCourses: [
  {  "title": "Web Development (Ruby on Rails)",
     "school": "Tea Leaf Academy",
     "date": 2014,
     "url": "http://www.tealeafacademy.com"}
     // display: function What goes here?
  ]
}

var work = {
  "jobs": [
  {
    "employer": "Learn to Be Foundation",
    "title": "Web Developer",
    "location": "Anaheim, CA",
    "dates": "September 2014 - Present",
    "description": "Building out the Learn to Be Platform"
  },
  { 
    "employer": "Advent Software",
    "title": "Global Client Services Analyst",
    "location": "San Francisco",
    "dates": "May 2011 - November 2014",
    "description": "Troubleshooting"
  }
]
    // why is it display: function
};

var projects = {
  projects: [ 
  { "title": "MyFlix",
    "dates": "2014 - 2014",
    "description": "A Netflix clone",
    "images":["images/myflix.png"] },
  { "title": "PostIt!",
    "dates": "2014 - 2014",
    "description": "A news aggregator",
    "images":["images/myflix.png"]
     }
    ]
//why display function again?
  }
//Build Work History

bio.display = function(){

  //TODO: Check whether any contact info provided
  var formattedHeaderRole = HTMLheaderRole.replace('%data%',bio["role"]) 
  $("#header").prepend(formattedHeaderRole)

  var formattedHeaderName = HTMLheaderName.replace('%data%',bio["name"])
  $("#header").prepend(formattedHeaderName)

  for (key in bio.contacts) {
    var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%",key).replace("%data%",bio.contacts[key])
    console.log(bio.contacts[key])
    $("#topContacts").append(formattedContactGeneric)
    $("#footerContacts").append(formattedContactGeneric)
  }

  var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic)
  $("#header").append(formattedBioPic)

  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage)
  $("#header").append(formattedWelcomeMsg)

  if (bio.skills.length != 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
    }


  }
}

bio.display()

var projects = {
  projects: [ 
  { "title": "MyFlix",
    "dates": "2014 - 2014",
    "description": "A Netflix clone",
    "images":["http://placehold.it/250x350"] },
  { "title": "PostIt!",
    "dates": "2014 - 2014",
    "description": "A news aggregator",
    "images":["http://placehold.it/250x350"]
     }
    ]
//why display function again?
  }

bio.displayWork = function(){

  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart)
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer)
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title)
    var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates)
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description)
    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle)
    $(".work-entry:last").append(formattedWorkDates)
    $(".work-entry:last").append(formattedWorkDescription)
  }
}

bio.displayWork();

projects.display = function(){
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart)
    formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title)
    $(".project-entry:last").append(formattedProjectTitle)
    formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates)
    $(".project-entry:last").append(formattedProjectDates)
    formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description)
    $(".project-entry:last").append(formattedProjectDescription)
    formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images)
    $(".project-entry:last").append(formattedProjectImage)
  }
}

projects.display()


education.displayEducation = function(){

  for (school in education.schools) {
    $("#education").append(HTMLschoolStart)
    formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name)
    $(".education-entry:last").append(formattedSchoolName)
    formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates)
    $(".education-entry:last").append(formattedSchoolDates)
    formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major)
    $(".education-entry:last").append(formattedSchoolMajor)
  }

  $("#education").append(HTMLonlineClasses)
  for (onlineCourse in education.onlineCourses) {
    $("#education").append(HTMLschoolStart)
    formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title)
   $(".education-entry:last").append(formattedOnlineTitle)

  }
}

education.displayEducation();

var inName=function(string){
  var newArray = string.split(" ")
  var firstName = newArray[0][0].toUpperCase + newArray[0].slice(1).toLowerCase
  var lastName = newArray[1].toUpperCase
  return firstName + lastName
}

$("#mapDiv").append(googleMap)

$("#main").append(internationalizeButton)
// var formattedLocation = HTMLlocation.replace('%data%',bio.contactInfo.location);
// $("#topContacts").append(formattedLocation)

