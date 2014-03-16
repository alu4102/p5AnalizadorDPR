
var assert = chai.assert;

suite('Resultados de los tests: ', function() {
   test('Comparación', function() {
        INPUT.value = ' if a == 1 then b = 4';
        main();
		assert.equal(OUTPUT.innerHTML,'');
    });

});

