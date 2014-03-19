var assert = chai.assert;

suite('Resultados de los tests: ', function() {
   test('Generación correcta de plantilla', function() {
        original.value = "if Nombre == Antonio then Genero = Hombre";
        main();
		assert.equal(OUTPUT.innerHTML, '{\n  "type": "IF",\n  "left": {\n    "type": "==",\n    "left": {\n      "type": "ID",\n      "value": "Nombre"\n    },\n    "right": {\n      "type": "ID",\n      "value": "Antonio"\n    }\n  },\n  "right": {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "Genero"\n    },\n    "right": {\n      "type": "ID",\n      "value": "Hombre"\n    }\n  }\n}');
    });
    test('Generación correcta de una de las reglas de statement', function() {
        original.value = "while 5 > 1 do call funcion";
        main();
		assert.equal(OUTPUT.innerHTML, '{\n  "type": "WHILE",\n  "left": {\n    "type": "&gt;",\n    "left": {\n      "type": "NUM",\n      "value": 5\n    },\n    "right": {\n      "type": "NUM",\n      "value": 1\n    }\n  },\n  "right": {\n    "type": "call",\n    "rigth": {\n      "type": "ID",\n      "value": "funcion"\n    }\n  }\n}');
    });
   test('Detección de entrada erronea', function() {
        original.value = "a = 3 + (4; b = 5";
        main();
		assert.equal(OUTPUT.innerHTML, '<div class="error">Syntax Error. Expected ) found \';\' near \'; b = 5\'</div>');
    });
    test('Detección correcta de ID', function() {
        original.value = "Nombre = Antonio";
        main();
		assert.match(OUTPUT.innerHTML, /ID/);
    });
	 test('Detección correcta de NUM', function() {
        original.value = "a = 6";
        main();
		assert.match(OUTPUT.innerHTML, /NUM/);
    });
});
