const priceCalculator = (drivingExperience, age) => {
    let points = 0
    if (age < 25) {
      points += 5
    }
    if (age >= 25 && age < 40) {
      points += 3
    }
    if (age >= 40) {
      points += 1
    }
    if (drivingExperience <= 1) {
      points += 10
    }
    if (drivingExperience > 1 && drivingExperience <= 3) {
      points += 5
    }
    if (drivingExperience > 3) {
      points += 2
    }
    // Most: 15
    // Least: 3
    if (points < 4) return "£2.90 per mile £1,044 p/y"
    if (points <= 10) return "£4.00 per mile £1440 p/y"
    if (points > 10) return "£5.20 per mile £1872 p/y"
   }

   module.exports = priceCalculator