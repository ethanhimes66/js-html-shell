console.log('hi!');

function sleepIn(weekday, vacation) {
  if (!weekday || vacation) {
    return true;
  } else {
    return false;
  }
}

function monkeyTrouble(aSmile, bSmile) {
  if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
    return true
  } else {
    return false;
  }
}

function sumDouble(a, b) {
  if (a == b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
}

function frontBack(str) {
  if (str.length >= 2) {
    const firstChar = str.charAt(0);
    const lastChar = str.charAt(str.length - 1);

    const newStr = lastChar + str.substring(1, str.length - 1) + firstChar;

    return newStr;
  } else {
    return str;
  }
}

function intMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

function arrayCount9(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 9) {
      count++;
    }
  }
  return count;
}

function array667(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] == 6) {
      if (nums[i + 1] == 6 || nums[i + 1] == 7) {
        count++;
      }
    }
  }
  return count;
}

function squirrelPlay(temp, isSummer) {

  if (isSummer) {

    if (temp >= 60 && temp <= 100) {
      return true;
    }
    return false;
  } else {
    if (temp >= 60 && temp <= 90) {
      return true;
    }
    return false;
  }

}

function withoutDoubles(die1, die2, noDoubles) {
  if (noDoubles) {

    if (die1 == die2) {
      if (die1 == 6 && die2 == 6) {
        die1 = 1;
        return die1 + die2;
      }
      return die1 + die2 + 1;
    }

  }
  return die1 + die2;
}

function greenTicket(a, b, c) {
  if (a == b && a == c && b == c) {
    return 20;
  } else if (a == b || a == c || b == c) {
    return 10;
  } else {
    return 0;
  }
}

function blackjack(a, b) {

  if (a > 21 && b > 21) {
    return 0;
  }

  if (a == 21) {
    return a;
  } else if (b == 21) {
    return b;
  }

  if (a <= 21 && b > 21) {
    return a;
  } else if (a > 21 && b <= 21) {
    return b;
  }

  if (a > b && a <= 21) {
    return a;
  } else if (b > a && b <= 21) {
    return b;
  }
}

function makeChocolate(small, big, goal) {

  let bigBarsAfter = (goal / 5) | 0;
  let bigUsed = Math.min(bigBarsAfter, big);
  let kilosLeft = goal - (bigUsed * 5);

  if (kilosLeft <= small) {
    return kilosLeft;
  }

  return -1;
}