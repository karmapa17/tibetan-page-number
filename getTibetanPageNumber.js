var tibetanNumbers = ['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩'];
// palm leaf https://en.wikipedia.org/wiki/Palm-leaf_manuscript
var palmLeafMap = {
  a: 'ན',
  b: 'བ',
  c: 'ན་འོག',
  d: 'བ་འོག'
};

module.exports = function getTibetanPageNumber(pbId) {
  return pbId.replace(/\d+-\d+-/, '')
    .replace(/\d/g, function(digit) {
      return tibetanNumbers[digit];
    })
    .replace(/[abcd]/, function(palmLeafNumber) {
      return ' ' + palmLeafMap[palmLeafNumber];
    });
};
