# tibetan-page-number

[![Build Status](https://travis-ci.org/karmapa17/tibetan-page-number.svg?branch=master)](https://travis-ci.org/karmapa17/tibetan-page-number)

Transfrom pbId to tibetan page number:

`1-1-1a` => `༡ ན`

`1-1-1b` => `༡ བ`

`1-1-1a` => `༡ ན་འོག`

`1-1-1a` => `༡ བ་འོག`

ps. The prefix `1-1-` will be removed.

# Usage
 
```
import getTibetanPageNumber from './getTibetanPageNumber';

const pbId = '1-1-1a';

getTibetanPageNumber(pbId); // return '༡ ན'
```

# Reference
palm leaf https://en.wikipedia.org/wiki/Palm-leaf_manuscript
