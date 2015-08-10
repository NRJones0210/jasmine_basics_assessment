function Grade (testScore) {
  this.testScore = testScore;

  this.letterGrader = function(testScore) {
    if (this.testScore >= 90) {
      return 'A'
    }
    else if (this.testScore >= 80 && this.testScore < 90) {
      return 'B'
    }
    else if (this.testScore >= 70 && this.testScore < 80) {
      return 'C'
    }
    else if (this.testScore >= 60 && this.testScore < 70) {
      return 'D'
    }
    else if (this.testScore >= 0 && this.testScore < 60) {
      return 'F'
    }
  }

  this.averageScore = function(testScore) {
    var sum = this.testScore.reduce(function(a, b) {
      return a + b; 
    });
    var avg = sum / this.testScore.length;
    return avg;
  }

  this.medianScore = function(testScore) {
    this.testScore.sort( function(a,b) {return a - b;} );
    var half = Math.floor(this.testScore.length / 2);
    if (this.testScore.length % 2){
      return this.testScore[half];
    } else {
      return (this.testScore[half - 1] + this.testScore[half] / 2)
    }
  }
  this.modeScore = function(testScore) {
  }
}
module.exports = Grade;