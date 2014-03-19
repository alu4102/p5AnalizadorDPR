var assert = chai.assert;

suite('Tests relativos al árbol generado: ', function() {
   test('Generación correcta del árbol para una asignación', function() {
        original.value = "if Nombre == Antonio then Genero = Hombre";
        main();
		assert.equal(OUTPUT.innerHTML, '{\n  "type": "IF",\n  "left": {\n    "type": "==",\n    "left": {\n      "type": "ID",\n      "value": "Nombre"\n    },\n    "right": {\n      "type": "ID",\n      "value": "Antonio"\n    }\n  },\n  "right": {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "Genero"\n    },\n    "right": {\n      "type": "ID",\n      "value": "Hombre"\n    }\n  }\n}');
    });
    test('Generación correcta del árbol para un bucle con llamada a función', function() {
        original.value = "while 5 > 1 do call funcion";
        main();
		assert.equal(OUTPUT.innerHTML, '{\n  "type": "WHILE",\n  "left": {\n    "type": "&gt;",\n    "left": {\n      "type": "NUM",\n      "value": 5\n    },\n    "right": {\n      "type": "NUM",\n      "value": 1\n    }\n  },\n  "right": {\n    "type": "call",\n    "rigth": {\n      "type": "ID",\n      "value": "funcion"\n    }\n  }\n}');
    });
   test('Generación correcta del árbol para una entrada errónea', function() {
        original.value = "a = 3 + (4; b = 5";
        main();
		assert.equal(OUTPUT.innerHTML, '<div class="error">Syntax Error. Expected ) found \';\' near \'; b = 5\'</div>');
    });
});

suite('Tests relativos a la detección de elementos: ', function() {
    test('Detección correcta de un identificador', function() {
        original.value = "Nombre = Antonio";
        main();
		assert.match(OUTPUT.innerHTML, /ID/);
    });
	 test('Detección correcta de un número', function() {
        original.value = "a = 6";
        main();
		assert.match(OUTPUT.innerHTML, /NUM/);
    });
    test('Detección correcta de un bucle while', function() {
        original.value = "while 1 < 2 do p hola";
        main();
		assert.match(OUTPUT.innerHTML, /WHILE/);
    });
    test('Detección correcta de una llamada a método', function() {
        original.value = "call miMetodo";
        main();
		assert.match(OUTPUT.innerHTML, /call/);
    });
});

suite('Tests relativos a la página: ', function() {
    var localStor = new Boolean();
    if (window.localStorage) {
      localStor = true;
    } else {
      localStor = false;
	  }
    test('Comprobación del funcionamiento del almacenamiento local en el navegador', function () {
        assert.equal(localStor, true);
    });
    test('Comprobación del almacenamiento local del último análisis realizado', function () {
        assert.equal(localStorage.INPUT, "call miMetodo");
    });
});
