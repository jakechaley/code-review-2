const seasonScores = {
  autumn: 20,
  winter: 15,
  summer: 45,
  spring: 10
}
// console.log(seasonScores)
// console.log(seasonScores.autumn)

const weekDayScores = {
  monday: 25,
  tuesday: 55,
  wednesday: 5,
  thursday: 60,
  friday: 95,
  saturday: 50,
  sunday: 80  
}

const catsOrDogsScores = {
  cats: 35,
  dogs: 70
}

const cartWheelScores = {
  yes: 100,
  no: 40
}


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    // $("#char1, #char2, #char3, #char4, #char5").hide();
    const ageScore = parseInt($("input#age").val());
    const season = $("select#season").val();
    const weekDay = $("select#weekDay").val();
    const catsOrDogs = $("select#catsOrDogs").val();
    const cartWheel = $("select#cartWheel").val();

    let seasonScore = 0
    let weekDayScore = 0
    let catsOrDogsScore = 0
    let cartWheelScore = 0

    if (season === "autumn") {
      seasonScore = seasonScores.autumn
    } else if (season === "winter") {
      seasonScore = seasonScores.winter
    } else if (season === "spring") {
      seasonScore = seasonScores.spring
    } else if (season === "summer") {
      seasonScore = seasonScores.summer
    }
    
    if (weekDay === "monday") {
      weekDayScore = weekDayScores.monday
    } else if (weekDay === "tuesday") {
      weekDayScore = weekDayScores.tuesday
    } else if (weekDay === "wednesday") {
      weekDayScore = weekDayScores.wednesday
    } else if (weekDay === "thursday") {
      weekDayScore = weekDayScores.thursday
    }else if (weekDay === "friday") {
      weekDayScore = weekDayScores.friday
    }else if (weekDay === "saturday") {
      weekDayScore = weekDayScores.saturday
    } else if (weekDay === "sunday") {
      weekDayScore = weekDayScores.sunday
    }

    if (catsOrDogs === "cats") {
      catsOrDogsScore = catsOrDogsScores.cats
    } else if (catsOrDogs === "dogs") {
      catsOrDogsScore = catsOrDogsScores.dogs
    }

    if (cartWheel === "yes") {
      cartWheelScore = cartWheelScores.yes
    } else if (cartWheel === "no") {
      cartWheelScore = cartWheelScores.no
    }

    let finalScore = (ageScore + seasonScore + weekDayScore + catsOrDogsScore + cartWheelScore)
    
    
    
    
    
    event.preventDefault();
    console.log(finalScore)
  });
});