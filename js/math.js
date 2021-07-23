/* El objeto Math
===========================

El objeto integrado ``Math`` tiene propiedades y métodos para constantes y funciones matemáticas. Por ejemplo, la propiedad PI del objeto ``Math`` tiene el valor de pi (3.141...), que usarías en una aplicación como:

.. code-block:: javascripts
*/
    const piMat = Math.PI
    console.log("el valor de piMat es ", piMat)
/*
De manera similar, las funciones matemáticas estándar son métodos de ``Math``. Estas incluyen funciones trigonométricas, logarítmicas, exponenciales y otras. Por ejemplo, si deseas utilizar la función trigonométrica "seno", debes escribir


.. code-block:: javascripts
*/
    const k = Math.sin(1.56)
    console.log("el valor de k es ", k)
/*
Ten en cuenta que todos los métodos trigonométricos de ``Math`` toman argumentos en radianes.

La siguiente tabla resume los métodos del objeto ``Math``.

Métodos de Math
~~~~~~~~~~~~~~~~~~~~~~~~~
*/
//+--------+---------------------------------------------------------------------------+
//| Método   | Descripción                                                             |
//+==========+=========================================================================+
abs()    //| Valor absoluto                                                            |
//+--------+---------------------------------------------------------------------------+
sin()    //| Funciones trigonométricas estándar; con el argumento en radianes.         |
//+--------+                                                                           |
cos()    //|                                                                           |
//+--------+---------------------------------------------------------------------------+
tan()	 //| Funciones trigonométricas estándar; con el argumento en radianes.         |
//+--------+                                                                           |
asin()   //|                                                                           |
//+--------+                                                                           |
acos()   //|                                                                           |
//+--------+                                                                           |
atan()	 //|                                                                           |
//+--------+                                                                           |
atan2()	 //|                                                                           |
//+--------+---------------------------------------------------------------------------+
sinh()   //| Funciones hiperbólicas; argumento en ángulo hiperbólico.                  |
//+--------+                                                                           |
cosh()   //|                                                                           |
//+--------+                                                                           |
tanh()   //|                                                                           |
//+--------+---------------------------------------------------------------------------+
asinh()  //| Funciones hiperbólicas inversas; devuelven valores en ángulo hiperbólico. |
//+--------+                                                                           |
acosh()  //|                                                                           |
//+--------+                                                                           |
atanh()  //|                                                                           |
//+--------+---------------------------------------------------------------------------+
pow()    //| Funciones exponenciales y logarítmicas.                                   |
//+--------+                                                                           |
exp()    //|                                                                           |
//+--------+                                                                           |
expm1()  //|                                                                           |
//+--------+                                                                           |
log10()  //|                                                                           |
//+--------+                                                                           |
log1p()  //|                                                                           |
//+--------+                                                                           |
log2()   //|                                                                           |
//+--------+---------------------------------------------------------------------------+
floor()  //| Devuelve el entero más grande menor o igual que un argumento.             |
//+--------+---------------------------------------------------------------------------+
ceil()   //| Devuelve el entero más pequeño mayor o igual que un argumento.            |
//+--------+---------------------------------------------------------------------------+
min()    //| Devuelven el valor mínimo de una lista de números como argumentos.        |
//+--------+---------------------------------------------------------------------------+
max()    //| Devuelven el valor máximo de una lista de números como argumentos.        |
//+--------+---------------------------------------------------------------------------+
random() //| Devuelve un número aleatorio entre 0 y 1.                                 |
//+--------+---------------------------------------------------------------------------+
round()  //| Funciones de redondeo y truncamiento.                                     |
//+--------+                                                                           |
fround() //|                                                                           |
//+--------+                                                                           |
trunc(), //|                                                                           |
//+--------+---------------------------------------------------------------------------+
sqrt()   //| Raíz cuadrada de argumentos cuadrados.                                    |
//+--------+---------------------------------------------------------------------------+
cbrt()   //| Raíz cúbica de argumentos cúbicos.                                        |
//+--------+---------------------------------------------------------------------------+
hypot()  //| Raíz cuadrada de la suma de argumentos cuadrados.                         |
//+--------+---------------------------------------------------------------------------+
sign()   //| Deculeve el signo de un número.                                           |
//+--------+---------------------------------------------------------------------------+
clz32()  //| Número de bits cero iniciales en la representación                        |
imul()   //| binaria de :math:`32` bits.                                               |
//+--------+---------------------------------------------------------------------------+
/*
El resultado de la multiplicación de :math:`32` bits similar a ``C`` de los dos argumentos.

A diferencia de muchos otros objetos, nunca creas un objeto Math propio. Siempre usas el objeto Math incorporado.
*/