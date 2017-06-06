const expect = require('chai').expect;


function titleCase(title) {
  const splitWords = title.split(' ');
  const uppercasedFirst = splitWords.map(word => word[0].toUpperCase().concat(word.substring(1)))
  const finalStr = uppercasedFirst.join(' ');
  return finalStr;
}

expect(titleCase('the greate')).to.be.a('string');
expect(titleCase('s')).to.equal('S')
expect(titleCase('hazard')).to.equal('Hazard')
expect(titleCase('Fuck that shit')).to.equal('Fuck That Shit')
