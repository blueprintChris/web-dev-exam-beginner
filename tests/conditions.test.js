import {
  checkVotingEligibility,
  checkNumber,
  checkEvenOdd,
  checkString,
  getDayOfWeek,
  getGradeDescription,
  calculateShippingCost,
  getZodiacSign,
} from '../index';

describe('Conditions', () => {
  describe('if-else', () => {
    describe('1. Check Voting Eligibility', () => {
      test('Should return "Eligible to vote" if age is at or above 18.', () => {
        expect(checkVotingEligibility(18)).toBe('Eligible to vote');
        expect(checkVotingEligibility(19)).toBe('Eligible to vote');
        expect(checkVotingEligibility(100)).toBe('Eligible to vote');
      });

      test('Should return "Not eligible to vote" if age is below 18.', () => {
        expect(checkVotingEligibility(0)).toBe('Not eligible to vote');
        expect(checkVotingEligibility(17)).toBe('Not eligible to vote');
      });
    });

    describe('2. Check number', () => {
      test('Should return "Positive" if number is greater than 0', () => {
        expect(checkNumber(1)).toBe('Positive');
        expect(checkNumber(100)).toBe('Positive');
      });

      test('Should return "Negative" if number is less than 0', () => {
        expect(checkNumber(-1)).toBe('Negative');
        expect(checkNumber(-100)).toBe('Negative');
      });

      test('Should return "Zero" if number is equal to 0', () => {
        expect(checkNumber(0)).toBe('Zero');
      });
    });

    describe('3. Check string', () => {
      test('Should return "Empty string" if string is empty', () => {
        expect(checkString('')).toBe('Empty string');
      });

      test('Should return "Non-empty string" if string is not empty', () => {
        expect(checkString('Hello, World!')).toBe('Non-empty string');
      });
    });

    describe('4. Check even/odd', () => {
      test('Should return "Even" if number is even', () => {
        expect(checkEvenOdd(0)).toBe('Even');
        expect(checkEvenOdd(2)).toBe('Even');
        expect(checkEvenOdd(100)).toBe('Even');
      });

      test('Should return "Odd" if number is odd', () => {
        expect(checkEvenOdd(1)).toBe('Odd');
        expect(checkEvenOdd(3)).toBe('Odd');
        expect(checkEvenOdd(101)).toBe('Odd');
      });
    });
  });

  describe('switch-case', () => {
    describe('1. Day of Week', () => {
      test('Should return the correct days of the week', () => {
        expect(getDayOfWeek(0)).toBe('Sunday');
        expect(getDayOfWeek(1)).toBe('Monday');
        expect(getDayOfWeek(2)).toBe('Tuesday');
        expect(getDayOfWeek(3)).toBe('Wednesday');
        expect(getDayOfWeek(4)).toBe('Thursday');
        expect(getDayOfWeek(5)).toBe('Friday');
        expect(getDayOfWeek(6)).toBe('Saturday');
      });

      test('Should return "Invalid day" if the day is not valid', () => {
        expect(getDayOfWeek(-1)).toBe('Invalid day');
        expect(getDayOfWeek(7)).toBe('Invalid day');
      });
    });

    describe('2. Grade Description', () => {
      test('Should return the correct grade descriptions', () => {
        expect(getGradeDescription('A')).toBe('Excellent');
        expect(getGradeDescription('B')).toBe('Good');
        expect(getGradeDescription('C')).toBe('Average');
        expect(getGradeDescription('D')).toBe('Below Average');
        expect(getGradeDescription('F')).toBe('Fail');
      });

      test('Should return "Invalid grade" if grade is not valid', () => {
        expect(getGradeDescription('Z')).toBe('Invalid grade');
      });
    });

    describe('3. Calculate Shipping Cost', () => {
      test('Should return the correct shipping cost based on the country code and weight', () => {
        expect(calculateShippingCost('US', 1)).toBe(10);
        expect(calculateShippingCost('CA', 1)).toBe(12);
        expect(calculateShippingCost('MX', 1)).toBe(14);
        expect(calculateShippingCost('UK', 1)).toBe(5);
        expect(calculateShippingCost('AU', 1)).toBe(20);
      });

      test('Should return "Invalid country code" if the country code is not valid', () => {
        expect(calculateShippingCost('ZZ', 1)).toBe('Invalid country code');
      });
    });

    describe('4. Zodiac Signs', () => {
      test('Should return the correct zodiac sign based on the month and day of birth', () => {
        // Jan
        expect(getZodiacSign(1, 19)).toBe('Capricorn');
        expect(getZodiacSign(1, 20)).toBe('Aquarius');

        // Feb
        expect(getZodiacSign(2, 18)).toBe('Aquarius');
        expect(getZodiacSign(2, 19)).toBe('Pisces');

        // Mar
        expect(getZodiacSign(3, 20)).toBe('Pisces');
        expect(getZodiacSign(3, 21)).toBe('Aries');

        // Apr
        expect(getZodiacSign(4, 19)).toBe('Aries');
        expect(getZodiacSign(4, 20)).toBe('Taurus');

        // May
        expect(getZodiacSign(5, 20)).toBe('Taurus');
        expect(getZodiacSign(5, 21)).toBe('Gemini');

        // Jun
        expect(getZodiacSign(6, 20)).toBe('Gemini');
        expect(getZodiacSign(6, 21)).toBe('Cancer');

        // Jul
        expect(getZodiacSign(7, 22)).toBe('Cancer');
        expect(getZodiacSign(7, 23)).toBe('Leo');

        // Aug
        expect(getZodiacSign(8, 22)).toBe('Leo');
        expect(getZodiacSign(8, 23)).toBe('Virgo');

        // Sep
        expect(getZodiacSign(9, 22)).toBe('Virgo');
        expect(getZodiacSign(9, 23)).toBe('Libra');

        // Oct
        expect(getZodiacSign(10, 22)).toBe('Libra');
        expect(getZodiacSign(10, 23)).toBe('Scorpio');

        // Nov
        expect(getZodiacSign(11, 21)).toBe('Scorpio');
        expect(getZodiacSign(11, 22)).toBe('Sagittarius');

        // Dec
        expect(getZodiacSign(12, 21)).toBe('Sagittarius');
        expect(getZodiacSign(12, 22)).toBe('Capricorn');
      });

      test('Should return "Invalid date" if the date is not valid', () => {
        expect(getZodiacSign(13, 32)).toBe('Invalid date');
      });
    });
  });
});
