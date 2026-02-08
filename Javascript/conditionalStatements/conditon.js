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
