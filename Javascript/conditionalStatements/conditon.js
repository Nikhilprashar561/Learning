function cinemaPricing(age, weekend) {
  let price;
  if (typeof age !== "number" || isNaN(age) || age < 0) {
    return -1;
  } else if (age >= 0 && age <= 12) {
    if (weekend) {
      price = 11;
    } else if (!weekend) {
      price = 8;
    }
  } else if (age >= 13 && age <= 17) {
    if (weekend) {
      price = 15;
    } else if (!weekend) {
      price = 12;
    }
  } else if (age >= 18 && age <= 59) {
    if (weekend) {
      price = 18;
    } else if (!weekend) {
      price = 15;
    }
  } else if (age >= 60) {
    if (weekend) {
      price = 13;
    } else if (!weekend) {
      price = 10;
    }
  }
  return price;
}

cinemaPricing(2, true);

function getTrafficAction(color) {
  color = color.toLowerCase()
  let action;
  switch (color) {
    case "green":
      action = "GO";
      break;
    case "yellow":
      action = "SLOW DOWN";
      break;
    case "red":
      action = "STOP";
      break;
    case "flashing red":
      action = "STOP AND PROCEED WITH CAUTION";
      break;
    default:
      action = "INVALID SIGNAL";
      break;
  }
  return action;
}

getTrafficAction("Red")

function calculateGrade(score, hasExtraCredit) {
  let grade;
  if (score < 0 || score > 100) {
    return "INVALID";
  }
  if (hasExtraCredit) {
    score = score + 5;
    if(score > 100){
      score = 100
    }
  }

  if(score >= 90 && score <= 100){
    grade = "A"
  }
  if(score >= 80 && score <= 89){
    grade = "B"
  }
  if(score >= 70 && score <= 79){
    grade = "C"
  }
  if(score >= 60 && score <= 69){
    grade = "D"
  }
  if(score >= 0 && score <= 59){
    grade = "F"
  }

  return grade;
}

calculateGrade(24, false)