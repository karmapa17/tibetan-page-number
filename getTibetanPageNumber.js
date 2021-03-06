var tibetanNumbers = ['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩'];

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
