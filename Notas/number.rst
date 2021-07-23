Number
==============

``Number`` es un objeto primitivo envolvente que permite representar y manipular valores numéricos. El constructor Number_ contiene propiedades_ y metodos_ para trabajar con números. Valores de otro tipo pueden ser convertidos a números usando la función ``Number()``.

Sintaxis
-------------

.. code-block:: javascripts

    var a = new Number('123'); // a === 123 es false ¿Por qué?
    var b = Number('123');     // b === 123 es true ¿Por qué?
    a instanceof Number;       // es true
    b instanceof Number;       // es false
    console.log("a === 123 es", a === 123);
    console.log("b === 123 es", b === 123);
    console.log("a instanceof Number es", a instanceof Number);
    console.log("b instanceof Number es", b instanceof Number);


Number(value)
~~~~~~~~~~~~~

``Number(value)`` devuelve un de tipo numérico según el string (u otro valor) ``value`` ó, en caso contrario, ``NaN``.

``value``, a su vez, será el valor numérico de un objeto que está siendo creado.

.. code-block:: javascripts

    Number('123')          // retorna el número 123
    Number('123') === 123  // retorna true
    Number("foo")          // retorna NaN
    Number(undefined)      // retorna NaN


Constructor
------------

``Number()`` crea un nuevo valor Numérico (Number value).



.. _propiedades:

Propiedades
---------------------

Number.EPSILON (en-US)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

El intervalo más pequeño entre dos números representables

.. code-block:: javascripts

    const value = Number.EPSILON
    console.log(value); // 2.220446049250313e-16
    const aValue = 0.1;
    const bValue = 0.2;
    const cValue = 0.3;
    
    console.log("¿La suma de aValue + bValue == cValue?", aValue + bValue == cValue); // false
    console.log("¿aValue + bValue - cValue < value?", aValue + bValue - cValue < value); // true


Number.MAX_SAFE_INTEGER
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

El número máximo representable en JavaScript (:math:`2^{53}-1`).

Number.MAX_VALUE
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

El número más grande representable.

.. code-block:: javascripts

    const numMasGrande = Number.MAX_VALUE;
    console.log("El máximo valor es", numMasGrande );



Number.MIN_SAFE_INTEGER
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

El número mínimo representable en JavaScript ((:math:`-(2^{53}-1)`)).

Number.MIN_VALUE
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

El número más pequeño representable - que es el número positivo más cercano a cero (sin llegar a ser cero)-.

.. code-block:: javascripts

    const numMasChico = Number.MIN_VALUE;
    console.log("El mínimo valor es", numMasChico);


Number.NaN
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Valor especial "no es número" NaN.

.. code-block:: javascripts

    const noEsNum = Number.NaN;
    console.log("noEsNum es", noEsNum);


Number.NEGATIVE_INFINITY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Valor especial para representar infinitos negativos; retorno de un desborde de pila overflow.

.. code-block:: javascripts

    const notInfinitoNum = Number.NEGATIVE_INFINITY;
    console.log("El valor de notInfinitoNum es", notInfinitoNum);


Number.POSITIVE_INFINITY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Valor especial para representar infinitos positivos; retorno de un desborde de pila overflow.

.. code-block:: javascripts

    const infinitoNum = Number.POSITIVE_INFINITY;
    console.log("El valor de infinitoNum es", infinitoNum);



Number.prototype
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Permite la adición de propiedades a un objeto Number.

.. _metodos:

Métodos
-------------

Number.isNaN()
~~~~~~~~~~~~~~~~

Determina si el valor es ``NaN``.

.. code-block:: javascripts

    let num1 = 2
    let num2 = new Number(12)
    let num3 = 234567.34234
    console.log("num1 =", num1)
    console.log("num2 =", num2)
    console.log("num2 =", num3)
    console.log("isNaN(num1) es", isNaN(num1))
    console.log("isNaN(num2) es", isNaN(num2))
    console.log("isNaN(num3) es", isNaN(num3))


Number.isFinite()
~~~~~~~~~~~~~~~~~~

Determina si el valor es un número infinito.

.. code-block:: javascripts

    console.log("isFinite(num1)", isFinite(num1))
    console.log("isFinite(num2)", isFinite(num2))
    console.log("isFinite(num3)", isFinite(num3))



Number.isInteger()
~~~~~~~~~~~~~~~~~~~

Determina si un número es entero.

.. code-block:: javascripts

    console.log("Number.isInteger(num1)", Number.isInteger(num1))
    console.log("Number.isInteger(num2)", Number.isInteger(num2))
    console.log("Number.isInteger(num3)", Number.isInteger(num3))


Number.isSafeInteger()
~~~~~~~~~~~~~~~~~~~~~~~~~

Determine si el valor pasado es un entero seguro (número entre :math:`-(2^{53} - 1)` y :math:`2^{53} - 1`).

.. code-block:: javascripts

    console.log("Number.isSafeInteger(num1) es", Number.isSafeInteger(num1))
    console.log("Number.isSafeInteger(num2) es", Number.isSafeInteger(num2))
    console.log("Number.isSafeInteger(num3) es", Number.isSafeInteger(num3))

Number.parseFloat()
~~~~~~~~~~~~~~~~~~~~

El valor es el mismo que ``parseFloat()`` del objeto global.

.. code-block:: javascripts

    console.log("Number.parseFloat(num1) es", Number.parseFloat(num1))
    console.log("Number.parseFloat(num2) es", Number.parseFloat(num2))
    console.log("Number.parseFloat(num3) es", Number.parseFloat(num3))


Number.parseInt()
~~~~~~~~~~~~~~~~~~

El valor es el mismo que ``parseInt()`` del objeto global.

.. code-block:: javascripts

    console.log("Number.parseInt(num1) es", Number.parseInt(num1))
    console.log("Number.parseInt(num2) es", Number.parseInt(num2))
    console.log("Number.parseInt(num3) es", Number.parseInt(num3))



Instancias Number
-------------------------------

Todas las instancias Number heredan de ``Number.prototype``. El objeto prototipo del constructor de ``Number`` puede modificarse para aceptar a todas las instancias de Number.


Distintos Métodos
~~~~~~~~~~~~~~~~~~~~

- ``Number.prototype.toExponential(fractionDigits)``

    Devuelve una cadena que representa el número en notación exponencial.

.. code-block:: javascripts

    console.log("num1.toExponential() es", num1.toExponential())
    console.log("num2.toExponential() es", num2.toExponential())
    console.log("num3.toExponential() es", num3.toExponential())


- ``Number.prototype.toFixed(digits)``

    Devuelve una cadena que representa el número en notación de punto fijo.

.. code-block:: javascripts

    console.log("num1.toFixed() es", num1.toFixed(2))
    console.log("num2.toFixed() es", num2.toFixed())
    console.log("num3.toFixed() es", num3.toFixed(3))


- ``Number.prototype.toLocaleString([locales [, options]])``
    
    Devuelve una cadena con una representación sensible al idioma de este número. Invalida el método ``Object.prototype.toLocaleString()``.

.. code-block:: javascripts

    console.log("num1.toLocaleString() es", num1.toLocaleString())
    console.log("num2.toLocaleString() es", num2.toLocaleString())
    console.log("num3.toLocaleString() es", num3.toLocaleString())



Ejemplos Interesantes
----------------------

Utilizando el objecto Number para transformar un objeto Date

El siguiente ejemplo convierte el objeto Date a un valor numérico usando Number  como función:

.. code-block:: javascripts

    var dateConverse = new Date('December 17, 1995 03:24:00');
    console.log("El valor de dateConverse es", Number(dateConverse));


Convierte cadenas numéricas a números
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: javascripts

    console.log(Number('123'))     // 123
    console.log(Number('12.3'))    // 12.3
    console.log(Number('123e-1'))  // 12.3
    console.log(Number(''))        // 0
    console.log(Number('0x11'))    // 17
    console.log(Number('0b11'))    // 3
    console.log(Number('0o11'))    // 9
    console.log(Number('foo'))     // NaN
    console.log(Number('100a'))    // NaN

Utilizando el objeto Number para modificar todos los objetos Number
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

El siguiente ejemplo crea un objeto ``Number``, miNro, luego añade la propiedad descripción a todos los objetos Number. Luego el valor es asignado a la propiedad descripción del objeto miNúmero.

.. code-block:: javascripts
    
    miNro = new Number(65);
    Number.prototype.description = null;
    miNro.description = "velocidad del viento";

Utilizando el objecto Number para transformar un objeto Date
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

El siguiente ejemplo convierte el objeto Date a un valor numérico usando Number  como función:

.. code-block:: javascripts
    
    var d = new Date('December 17, 1995 03:24:00');
    console.log(Number(d));

Esto muestra "``819199440000``".

El objeto Math
El objeto integrado Math tiene propiedades y métodos para constantes y funciones matemáticas. Por ejemplo, la propiedad PI del objeto Math tiene el valor de pi (3.141...), que usarías en una aplicación como:

Math.PI
Copy to Clipboard
De manera similar, las funciones matemáticas estándar son métodos de Math. Estas incluyen funciones trigonométricas, logarítmicas, exponenciales y otras. Por ejemplo, si deseas utilizar la función trigonométrica «seno», debes escribir

Math.sin(1.56)
Copy to Clipboard
Ten en cuenta que todos los métodos trigonométricos de Math toman argumentos en radianes.

La siguiente tabla resume los métodos del objeto Math.

Métodos de Math
Método	Descripción
abs()	Valor absoluto
sin(), cos(), tan()	Funciones trigonométricas estándar; con el argumento en radianes.
asin(), acos(), atan(), atan2()	Funciones trigonométricas inversas; devuelven valores en radianes.
sinh() (en-US), cosh() (en-US), tanh()	Funciones hiperbólicas; argumento en ángulo hiperbólico.
asinh(), acosh(), atanh()	Funciones hiperbólicas inversas; devuelven valores en ángulo hiperbólico.
pow(), exp(), expm1(), log10(), log1p() (en-US), log2()

Funciones exponenciales y logarítmicas.
floor(), ceil()	Devuelve el entero más grande/más pequeño menor/mayor o igual que un argumento.
min(), max()	Devuelven el valor mínimo o máximo (respectivamente) de una lista de números separados por comas como argumentos.
random()	Devuelve un número aleatorio entre 0 y 1.
round(), fround() (en-US), trunc(),	Funciones de redondeo y truncamiento.
sqrt(), cbrt(), hypot()	Raíz cuadrada, raíz cúbica, raíz cuadrada de la suma de argumentos cuadrados.
sign()	El signo de un número, que indica si el número es positivo, negativo o cero.
clz32() (en-US),
imul() (en-US)	Número de bits cero iniciales en la representación binaria de 32 bits.
El resultado de la multiplicación de 32 bits similar a C de los dos argumentos.
A diferencia de muchos otros objetos, nunca creas un objeto Math propio. Siempre usas el objeto Math incorporado.
