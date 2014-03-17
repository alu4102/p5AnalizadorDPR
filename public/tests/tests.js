var assert = chai.assert;

suite('Resultados de los tests: ', function() {
   test('Generación correcta de plantilla', function() {
        original.value = "if Nombre == Antonio then Genero = Hombre";
        main();
		    assert.equal(OUTPUT.innerHTML,'{\n  "type": "IF",\n  "left": {\n    "type": "==",\n    "left": {\n      "type": "ID",\n      "value": "Nombre"\n    },\n    "right": {\n      "type": "ID",\n      "value": "Antonio"\n    }\n  },\n  "right": {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "Genero"\n    },\n    "right": {\n      "type": "ID",\n      "value": "Hombre"\n    }\n  }\n}');
    });
});
