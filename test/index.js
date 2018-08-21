const test = require('ava');
const getTibetanPageNumber = require('../getTibetanPageNumber');

test('test digits in ones', t => {
  const tibetanPageNumber = getTibetanPageNumber('1-2-3a');
  t.is(tibetanPageNumber, '༣ ན');
});

test('test digits in tens', t => {
  const tibetanPageNumber = getTibetanPageNumber('44-55-66a');
  t.is(tibetanPageNumber, '༦༦ ན');
});

test('test digits in hundreds', t => {
  const tibetanPageNumber = getTibetanPageNumber('777-888-999a');
  t.is(tibetanPageNumber, '༩༩༩ ན');
});

test('test digits in thounsands', t => {
  const tibetanPageNumber = getTibetanPageNumber('1000-2222-3000a');
  t.is(tibetanPageNumber, '༣༠༠༠ ན');
});

test('test palm leaf number of "a"', t => {
  const tibetanPageNumber = getTibetanPageNumber('1-1-1a');
  t.is(tibetanPageNumber, '༡ ན');
});

test('test palm leaf number of "b"', t => {
  const tibetanPageNumber = getTibetanPageNumber('1-1-1b');
  t.is(tibetanPageNumber, '༡ བ');
});

test('test palm leaf number of "c"', t => {
  const tibetanPageNumber = getTibetanPageNumber('1-1-1c');
  t.is(tibetanPageNumber, '༡ ན་འོག');
});

test('test palm leaf number of "d"', t => {
  const tibetanPageNumber = getTibetanPageNumber('1-1-1d');
  t.is(tibetanPageNumber, '༡ བ་འོག');
});
