const Advocate = require('../models/advocate');

module.exports = {
  getAdvocates: getAdvocates
}

const people = [
  new Advocate(1, 'Shayne Boyer', '@spboyer'),
  new Advocate(2, 'Ruth Yakubu', '@ruthieyakubu'),
  new Advocate(3, 'Allison Krug', '@allinison'),
  new Advocate(4, 'Abel Wang', '@AbelSquidHead'),
  new Advocate(5, 'Brian Clark', '@_clarkio'),
  new Advocate(6, 'Bernd Verst', '@BerndVerst'),
  new Advocate(7, 'Bridget Kromhout', '@bridgetkromhout'),
  new Advocate(8, 'Lena Hall', '@lenadroid'),
  new Advocate(9, 'Sarah Drasner', '@sarah_edo'),
  new Advocate(10, 'Jasmine Greenaway', '@paladique'),
  new Advocate(11, 'Asim Hussain', '@jawache'),
  new Advocate(12, 'Jess Frazelle', '@jessfraz'),
  new Advocate(13, 'Anthony Chu', '@nthonychu'),
  new Advocate(14, 'Golnaz Alibeigi', '@Golnaz89'),
  new Advocate(15, 'Aaron', '@as_w'),
  new Advocate(16, 'Donovan Brown', '@donovanbrown'),
  new Advocate(17, 'Jeremy Likness', '@jeremylikness'),
  new Advocate(18, 'Damian Brady', '@damovisa'),
  new Advocate(19, 'Jessica Deen', '@jldeen'),
  new Advocate(20, 'Maxime Rouiller', '@MaximRouiller'),
  new Advocate(21, 'Brian Benz', '@bbenz'),
  new Advocate(22, '@DynamicWebPaige', '@DynamicWebPaige'),
  new Advocate(23, 'Vadim Karpusenko', '@Vadi'),
  new Advocate(24, 'Zachary Deptawa', '@zdeptawa'),
  new Advocate(25, 'Seth Juarez', '@sethjuarez'),
  new Advocate(26, 'John Papa', '@John_Papa'),
  new Advocate(27, 'Brian Peek', '@BrianPeek'),
  new Advocate(28, 'Simona Cotin', '@simona_cotin'),
  new Advocate(29, 'Cecil L. Phillip', '@cecilphillip'),
  new Advocate(30, 'Bryan Liston', '@listonb'),
  new Advocate(31, 'Matthew Soucoup', '@CodeMillMatt'),
  new Advocate(32, 'Steven Murawski', '@StevenMurawski'),
  new Advocate(33, 'Ashley McNamara', '@AshleyMcNamara'),
  new Advocate(34, 'Brian Ketelsen', '@bketelsen'),
  new Advocate(35, 'Matthew Soucoup', '@CodeMillMatt'),
  new Advocate(36, 'Laurent Bugnion', '@LBugnion'),
  new Advocate(37, 'Christina Warren', '@film_girl'),
  new Advocate(38, 'Suz Hinton', '@noopkat'),
  new Advocate(39, 'Prashant', '@coolasspuppy'),
  new Advocate(40, 'Tim Heuer', '@timheuer'),
  new Advocate(41, 'Jeff Sandquist', '@jeffsand')
]

function getAdvocates() {
  return {
    count: people.length,
    results: people
  };
}