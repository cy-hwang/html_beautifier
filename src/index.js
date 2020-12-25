/**

- [https://www.npmjs.com/package/pretty](https://www.npmjs.com/package/pretty)
- > pretty 모듈을 하나의 library로 사용할 수 있도록 번들링한 모듈
- 
- [버전]
- pretty 모듈: 2.0.0
- "dependencies": {
"condense-newlines": "^0.2.1",
"js-beautify": "^1.13.0"
},
*/

/*!
 * pretty <https://github.com/jonschlinkert/pretty>
 *
 * Copyright (c) 2013-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const beautify = require('js-beautify');
const condense = require('condense-newlines');
const defaults = {
  unformatted: ['code', 'pre', 'em', 'strong', 'span'],
  indent_inner_html: true,
  indent_char: ' ',
  indent_size: 2,
  sep: '\n'
};

const ocd = (str, options) => {
  // Normalize and condense all newlines
  return condense(str, options)
    // Remove empty whitespace the top of a file.
    .replace(/^\s+/g, '')
    // Remove extra whitespace from eof
    .replace(/\s+$/g, '\n')

    // Add a space above each comment
    .replace(/(\s*<!--)/g, '\n$1')
    // Bring closing comments up to the same line as closing tag.
    .replace(/>(\s*)(?=<!--\s*\/)/g, '> ');
};

const pretty = (str, options = {}) => {
  var opts = { ...defaults, ...options };
  str = beautify.html(str, opts);

  if (opts.ocd) {
    if (opts.newlines) opts.sep = opts.newlines;
    return ocd(str, opts);
  }

  return str;
};


module.exports = pretty;