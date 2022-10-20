const DAYS_OF_THE_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MALE_NAMES = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const FEMALE_NAMES = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  var akanName;
  var gender;
  var currentDate;
  var dateEntered;
  var day;
  
  // calculate today's date
  function getTodayDate() {
    currentDate = new Date();
    console.log(currentDate);
    return currentDate;
  }
  
  // FETCH DATE entered by user on input
  function getDate() {
    dateEntered = document.getElementById("Date").value;
    dateEntered = dateEntered.toString();
  
    // slice dateEntered to get century(CC), year(YY), month(MM), and date(DD) to be used in formular.
    var CC = dateEntered.slice(0, 2);
    // console.log(CC);
    CC = parseInt(CC);
    var YY = dateEntered.slice(2, 4);
    YY = parseInt(YY);
    var MM = dateEntered.slice(5, 7);
    MM = parseInt(MM);
    var DD = dateEntered.slice(8, 10);
    DD = parseInt(DD);
  
    console.log(DD, MM, CC, YY);
  
    // CALCULATE DAY OF BIRTH
    day =
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + (DD - 0.5)) %
      7;
  console.log("one day" + day);
    day = Math.floor(day);
    day = Math.abs(day);
  
  console.log("finalday" + day);
  }
  
  // function limiting date selection to today or before
  
  function noFutureDate() {
    parsedCurrentDate = Date.parse(currentDate);
  
     // converting entered date to local time (the date only formart is defaulting as UTC time).
  
    dateEntered = new Date(dateEntered); 
    let localDateEntered = dateEntered.toLocaleDateString(); 
    parsedDateEntered = Date.parse(localDateEntered);
  
    console.log("current" + parsedCurrentDate);
    console.log("entered" + parsedDateEntered);
  
    if (parsedDateEntered > parsedCurrentDate) {
      alert("Date of birth cannot be later than today");
      location.reload();
      throw Error();
    }
  }
  
  // FETCH GENDER from input
  
  function getGenderValue() {
    gender = document.querySelector("#floatingSelect").value;
    console.log(gender);
  
    return gender;
  }
  
  // CREATE AKAN NAME
  
  function getAkanName() {
    getTodayDate();
    getDate();
  
    // throw error for null date
    if (!dateEntered) {
      alert("Please pick your birthday!");
      return false;
    }
   // throw error for invalid date
    noFutureDate();
  
    // after all checks, now get Akan name
    if (gender === "Male") {
      akanName = MALE_NAMES[day];
      document.getElementById("result-button").innerHTML =
        "You were born on a " +
        DAYS_OF_THE_WEEK[day] +
        ". Your Akan name is " +
        akanName +
        ".";
    } else if (gender === "Female") {
      akanName = FEMALE_NAMES[day];
      document.getElementById("result-button").innerHTML =
        "You were born on a " +
        DAYS_OF_THE_WEEK[day] +
        ". Your Akan name is " +
        akanName +
        ".";
    }
  
    // throw error if no gender or something different was selected for gender
    else {
      alert("Please Pick Your Gender!");
    }
  }
  