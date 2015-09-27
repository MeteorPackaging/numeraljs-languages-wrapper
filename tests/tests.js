Tinytest.add("numeral - correct export", function(test) {
	// Simply check 'numeral' is not undefined...
  test.isNotUndefined(numeral, "numeral doesn't seem to be correctly exported");
});

Tinytest.add("numeral - be-nl language exists", function(test) {
  numeral.language('be-nl');
});

Tinytest.add("numeral - chs language exists", function(test) {
  numeral.language('chs');
});

Tinytest.add("numeral - cs language exists", function(test) {
  numeral.language('cs');
});

Tinytest.add("numeral - da-dk language exists", function(test) {
  numeral.language('da-dk');
});

Tinytest.add("numeral - de-ch language exists", function(test) {
  numeral.language('de-ch');
});

Tinytest.add("numeral - de language exists", function(test) {
  numeral.language('de');
});

Tinytest.add("numeral - en-gb language exists", function(test) {
  numeral.language('en-gb');
});

Tinytest.add("numeral - en language exists", function(test) {
  numeral.language('en');
});

/*
// waiting https://github.com/adamwdraper/Numeral-js/issues/298 to be solved...
Tinytest.add("numeral - es-ES language exists", function(test) {
  numeral.language('es-ES');
});
*/

Tinytest.add("numeral - es language exists", function(test) {
  numeral.language('es');
});

Tinytest.add("numeral - et language exists", function(test) {
  numeral.language('et');
});

Tinytest.add("numeral - fi language exists", function(test) {
  numeral.language('fi');
});

Tinytest.add("numeral - fr-CA language exists", function(test) {
  numeral.language('fr-CA');
});

Tinytest.add("numeral - fr-ch language exists", function(test) {
  numeral.language('fr-ch');
});

Tinytest.add("numeral - fr language exists", function(test) {
  numeral.language('fr');
});

Tinytest.add("numeral - hu language exists", function(test) {
  numeral.language('hu');
});

Tinytest.add("numeral - it language exists", function(test) {
  numeral.language('it');
});

Tinytest.add("numeral - ja language exists", function(test) {
  numeral.language('ja');
});

Tinytest.add("numeral - nl-nl language exists", function(test) {
  numeral.language('nl-nl');
});

Tinytest.add("numeral - pl language exists", function(test) {
  numeral.language('pl');
});

Tinytest.add("numeral - pt-br language exists", function(test) {
  numeral.language('pt-br');
});

Tinytest.add("numeral - pt-pt language exists", function(test) {
  numeral.language('pt-pt');
});

Tinytest.add("numeral - ru-UA language exists", function(test) {
  numeral.language('ru-UA');
});

Tinytest.add("numeral - ru language exists", function(test) {
  numeral.language('ru');
});

Tinytest.add("numeral - sk language exists", function(test) {
  numeral.language('sk');
});

Tinytest.add("numeral - th language exists", function(test) {
  numeral.language('th');
});

Tinytest.add("numeral - tr language exists", function(test) {
  numeral.language('tr');
});

Tinytest.add("numeral - uk-UA language exists", function(test) {
  numeral.language('uk-UA');
});
