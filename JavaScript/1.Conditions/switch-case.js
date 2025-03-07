/**
 * 1. Day of Week
 * 
 * Update the function to return the day of the week based on the day number, i.e. Sunday, Monday, Tuesday, etc.
 * Should return "Invalid day" if the day is not valid.
 */
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    // Write your code here
  }
}

/** 2. Grade Description
 * 
 * Using a switch-case, update the function to return the grade description based on the grade.
 * Grades range from A - F, with the following descriptions:
 * A: Excellent
 * B: Good
 * C: Average
 * D: Below Average
 * F: Fail
 * Should return "Invalid grade" if the grade is not valid.
 */
function getGradeDescription(grade) {
  switch (grade) {
    //  Write your code here
  }
}

/**
 * 3. Calculate Shipping Cost
 * 
 * Using a switch-case, update the function to calculate the shipping cost based on the country code and weight.
 * The shipping cost is calculated as the cost per kg multiplied by the weight.
 * The cost per kg varies based on the country code:
 * US: £10
 * CA: £12
 * MX: £14
 * UK: £5
 * AU: £20
 * Should return "Invalid country code" if the country code is not valid.
 */
function calculateShippingCost(countryCode, weight) {
  let costPerKg;
  switch (countryCode) {
    // Write your code here
  }

  return // Here you should return the calculated shipping cost
}

/**
 * 4. Zodiac Signs
 * 
 * Using a switch-case, update the function to return the zodiac sign based on the month and day of birth.
 * The zodiac signs are as follows:
 * Capricorn: December 22 - January 19
 * Aquarius: January 20 - February 18
 * Pisces: February 19 - March 20
 * Aries: March 21 - April 19
 * Taurus: April 20 - May 20
 * Gemini: May 21 - June 20
 * Cancer: June 21 - July 22
 * Leo: July 23 - August 22
 * Virgo: August 23 - September 22
 * Libra: September 23 - October 22
 * Scorpio: October 23 - November 21
 * Sagittarius: November 22 - December 21
 * Should return "Invalid date" if the date is not valid.
 * 
 */
function getZodiacSign(month, day) {
  // Write your code here
}

export { getDayOfWeek, getGradeDescription, calculateShippingCost, getZodiacSign };
