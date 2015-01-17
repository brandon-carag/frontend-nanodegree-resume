
var work = {
  "jobs": [
  {
    "employer": "Learn to Be Foundation",
    "title": "Web Developer",
    "location": "Anaheim",
    "dates": "9-14 - Present",
    "description": "Building out the Learn to Be Platform"
  },
  { 
    "employer": "Advent Software",
    "title": "Global Client Services Analyst",
    "location": "San Francisco",
    "dates": "5-11 - 11/14",
    "description": "Building out the Learn to Be Platform"
  }
]};

//Build Work History

var displayWork=function(){
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

displayWork();

var projects = {
  projects: [ 
  { "title": "MyFlix",
    "dates": "2014",
    "description": "A Netflix clone" },
  { "title": "PostIt!",
    "dates": "2014",
    "description": "A news aggregator" }
    ]}

projects.display = function(){
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart)
    formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title)
    console.log(formattedProjectTitle)
    $(".project-entry:last").append(formattedProjectTitle)
  }
}

projects.display()

var bio = {
  "name": "Brandon Carag",
  "role": "Web Developer",
  "welcomeMessage": "Welcome to my portfolio page.",
  "contacts": {
    "email": "brandon.carag@gmail.com",
    "github": "brandon-carag",
    "location": "Bay Area"
  },
  "skills": ["Ruby","Rails"]
}

var education = {
  schools: [
  { "name": "University of California, Berkeley",
    "location": "Berkeley, CA",
    "degree": "Bachelor's of Science",
    "major": "Business Administration",
    "dates": "2005-2007",
    "url": "http://www.berkeley.edu" },
  { "name": "University of California, Berkeley Extension",
    "location": "San Francisco, CA",
    "degree": "Technical Coursework",
    "major": "Post-bacclaureate",
    "dates": "2011",
    "url": "http://extension.berkeley.edu" }
  ],
  onlineCourses: [
  { "name": "Tea Leaf Academy",
    "location": "Online",
    "degree": "Online coursework",
    "major": "Web Development with Ruby on Rails",
    "dates": "2014",
    "url": "http://www.tealeafacademy.com" }
  ]
}


if (bio.skills.length != 0) {
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));
}


var formattedName = HTMLheaderName.replace('%data%',"Brandon Carag")
$("#header").prepend(formattedName)

var formattedRole = HTMLheaderRole.replace('%data%',"Web Developer") 
$("#main").append(formattedRole)

$("#main").append(internationalizeButton)

var inName=function(string){
  var newArray = string.split(" ")
  console.log(newArray)
  var firstName = newArray[0][0].toUpperCase + newArray[0].slice(1).toLowerCase
  console.log(firstName)
  var lastName = newArray[1].toUpperCase
  console.log(lastName)
  return firstName + lastName
}

// var bio = {
//   name: "Brandon Carag",
//   role: "Web Developer",
//   contactInfo: {
//     mobile: "408-571-9893",
//     email: "brandon.carag@gmail.com",
//     github: "https://github.com/brandon-carag",
//     blog: "http://brandoncarag.wordpress.com",
//     location: "San Francisco Bay Area"
// },
//   pictureURL: "images/me.jpg",
//   welcomeMessage: "Thanks for visiting my portfolio page.",
//   skills: ["Ruby","Rails","jQuery","HTML","CSS"]
// };

// var formattedMobile = HTMLmobile.replace('%data%',bio.contactInfo.mobile);
// $("#topContacts").append(formattedMobile);

// var formattedGitHub = HTMLgithub.replace('%data%',bio.contactInfo.github);
// $("#topContacts").append(formattedGitHub);

// var formattedBlog = HTMLblog.replace('%data%',bio.contactInfo.blog);
// $("#topContacts").append(formattedBlog);

// var formattedLocation = HTMLlocation.replace('%data%',bio.contactInfo.location);
// $("#topContacts").append(formattedLocation)

// var formattedPic = HTMLbioPic.replace('%data%',bio.pictureURL);
// $("#main").append(formattedPic);

// var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage)
// $("#main").append(formattedWelcomeMsg);

// $("#main").append(HTMLskillsStart)

// // When covering functions, go over this again.
// var formattedSkill = HTMLskills.replace('%data%',bio.skills[0]);
// $("#main").append(formattedSkill)

// var formattedTitle= HTMLworkTitle.replace('%data%',work["currentJobPosition"])
// $("#main").append(formattedTitle)
