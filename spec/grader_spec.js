var Grade = require('../grader');

describe('Grade', function() {
  describe('letterGrader', function() {

    it('returns property A for values 90-100', function () {
      var grade = new Grade(91);
      expect(grade.letterGrader()).toEqual('A');
    });

    it('returns property B for values 80-89', function () {
      var grade = new Grade(85);
      expect(grade.letterGrader()).toEqual('B');
    });

    it('returns property C for values 70-79', function () {
      var grade = new Grade(75);
      expect(grade.letterGrader()).toEqual('C');
    });

    it('returns property D for values 60-69', function () {
      var grade = new Grade(65);
      expect(grade.letterGrader()).toEqual('D');
    });

    it('returns property F for values 0-59', function () {
      var grade = new Grade(55);
      expect(grade.letterGrader()).toEqual('F');
    });
  });

  describe('averageScore', function() {

    it('returns the average of the given array', function () {
      var grade = new Grade([1,2,3]);
      expect(grade.averageScore()).toEqual(2);
    });
  });
  describe('medianScore', function() {
    it('returns the median of the given array', function() {
      var grade = new Grade([52,80,80,86,94]);
      expect(grade.medianScore()).toEqual(80);
    });
  });
  describe('modeScore', function() {
    it('returns the mode of the given array', function() {
      var grade = new Grade([82, 92, 75, 91, 92, 89, 95, 100, 86]);
      expect(grade.modeScore()).toEqual(92);
    });
  });
});