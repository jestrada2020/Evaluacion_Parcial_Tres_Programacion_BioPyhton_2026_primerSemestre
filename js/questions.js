// questions.js — 30 preguntas Evaluación Parcial
// Secciones: Ciclos FOR, Ciclos WHILE, Estructuras de Datos, Algoritmos Clásicos, Matrices 2D
// ── Total: 50 pts ───────────────────────────────────────────────────────────

const QUIZ_SECTIONS = [
  { id: 1, name: "Ciclos FOR",          abbrev: "FOR",         color: "#3B82F6" },
  { id: 2, name: "Ciclos WHILE",        abbrev: "WHILE",       color: "#8B5CF6" },
  { id: 3, name: "Estructuras Datos",   abbrev: "Estructuras", color: "#10B981" },
  { id: 4, name: "Algoritmos Clásicos", abbrev: "Algoritmos",  color: "#F59E0B" },
  { id: 5, name: "Matrices 2D",         abbrev: "Matrices",    color: "#EF4444" },
];

const QUIZ_QUESTIONS = [

  // ══════════════════════════════════════════════════════
  // SECCIÓN 1 — Ciclos FOR (7 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 1, section: 1, points: 1,
    topic: "Clasificador Par/Impar con FOR",
    question: "Completa el código para clasificar números como pares o impares usando un ciclo FOR. Usa el operador módulo (%) para verificar si un número es par.",
    code:
`numeros = [12, 5, 8, 21, 30, 7]

[1] num in numeros:
    if num [2] 2 == 0:
        print(f"El número {num} es par.")
    [3]:
        print(f"El número {num} es impar.")`,
    blanks: [
      { id: 1, options: ["for", "while", "if", "loop"], correct: "for" },
      { id: 2, options: ["%", "+", "*", "-"], correct: "%" },
      { id: 3, options: ["else", "elif", "except", "finally"], correct: "else" },
    ],
  },

  {
    id: 2, section: 1, points: 1,
    topic: "Calificador de Exámenes con IF/ELIF",
    question: "Completa el sistema de calificaciones con múltiples rangos usando elif. Usa >= para comparar rangos.",
    code:
`puntajes = [92, 78, 45, 85, 60]

for puntaje in puntajes:
    if puntaje [1] 90:
        calificacion = "A (Excelente)"
    [2] puntaje >= 80:
        calificacion = "B (Notable)"
    elif puntaje >= 70:
        calificacion = "C (Aprobado)"
    [3]:
        calificacion = "F (Reprobado)"

    print(f"Puntaje {puntaje}: Calificación {calificacion}")`,
    blanks: [
      { id: 1, options: [">=", ">", "<", "=="], correct: ">=" },
      { id: 2, options: ["elif", "else if", "if", "else"], correct: "elif" },
      { id: 3, options: ["else", "elif", "except", "finally"], correct: "else" },
    ],
  },

  {
    id: 3, section: 1, points: 1,
    topic: "Uso de CONTINUE en FOR",
    question: "Completa el código que salta productos cortos usando continue. Usa len() para verificar la longitud.",
    code:
`productos = ["laptop", "mouse", "teclado", "monitor", "webcam"]

for producto in productos:
    if [1](producto) < 6:
        print(f"Saltando producto corto: {producto}")
        [2]

    if "monitor" [3] producto:
        print(f"Encontrado producto clave: {producto.upper()}")`,
    blanks: [
      { id: 1, options: ["len", "size", "count", "range"], correct: "len" },
      { id: 2, options: ["continue", "break", "pass", "exit"], correct: "continue" },
      { id: 3, options: ["in", "==", "not in", "-"], correct: "in" },
    ],
  },

  {
    id: 4, section: 1, points: 1,
    topic: "Contador de Vocales en String",
    question: "Completa el contador de vocales en una frase usando FOR. Usa .lower() para convertir a minúsculas.",
    code:
`frase = "Programacion en Python y Ciclos"
contador_vocales = 0
vocales = "aeiouáéíóú"

for caracter in frase.[1]():
    [2] caracter in vocales:
        contador_vocales [3] 1

print(f"Total de vocales: {contador_vocales}")`,
    blanks: [
      { id: 1, options: ["lower", "upper", "strip", "split"], correct: "lower" },
      { id: 2, options: ["if", "elif", "while", "for"], correct: "if" },
      { id: 3, options: ["+=", "-=", "*=", "="], correct: "+=" },
    ],
  },

  {
    id: 5, section: 1, points: 1,
    topic: "RANGE con Paso Específico",
    question: "Completa el uso de range() para iterar de 1 a 10 inclusive. range(inicio, fin+1) incluye el último número.",
    code:
`suma_total = 0

for i in [1](1, [2]):
    suma_total [3] i

print(f"Suma de 1 a 10: {suma_total}")`,
    blanks: [
      { id: 1, options: ["range", "len", "list", "array"], correct: "range" },
      { id: 2, options: ["11", "10", "9", "12"], correct: "11" },
      { id: 3, options: ["+=", "-=", "*=", "="], correct: "+=" },
    ],
  },

  {
    id: 6, section: 1, points: 1,
    topic: "FOR con BREAK - Búsqueda",
    question: "Completa el código que busca y detiene la ejecución al encontrar un valor. Usa == para comparar y break para detener.",
    code:
`numeros = [5, 12, 8, 15, 20, 7]
objetivo = 15

[1] num in numeros:
    if num [2] objetivo:
        print(f"Encontrado: {num}")
        [3]
    print(f"Revisando: {num}")`,
    blanks: [
      { id: 1, options: ["for", "while", "if", "loop"], correct: "for" },
      { id: 2, options: ["==", "!=", ">", "<"], correct: "==" },
      { id: 3, options: ["break", "continue", "pass", "exit"], correct: "break" },
    ],
  },

  {
    id: 7, section: 1, points: 1,
    topic: "Construcción de String con FOR",
    question: "Completa el código que construye una expresión matemática como string. Usa str() para convertir y += para concatenar.",
    code:
`n = 5
expresion = ""

for num in range(1, n + 1):
    if num [1] n:
        expresion += [2](num) + " + "
    [3]:
        expresion += str(num)

print(f"Expresión: {expresion}")`,
    blanks: [
      { id: 1, options: ["<", ">", "==", "!="], correct: "<" },
      { id: 2, options: ["str", "int", "float", "char"], correct: "str" },
      { id: 3, options: ["else", "elif", "except", "finally"], correct: "else" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 2 — Ciclos WHILE (12 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 8, section: 2, points: 2,
    topic: "Contador con WHILE Básico",
    question: "Completa el ciclo while que cuenta y verifica múltiplos de 3. Usa <= para la condición y += para incrementar.",
    code:
`contador = 1
limite = 10

[1] contador [2] limite:
    if contador % 3 == 0:
        print(f"{contador} es múltiplo de 3")
    contador [3] 1`,
    blanks: [
      { id: 1, options: ["while", "for", "if", "loop"], correct: "while" },
      { id: 2, options: ["<=", "<", "==", "!="], correct: "<=" },
      { id: 3, options: ["+=", "-=", "*=", "="], correct: "+=" },
    ],
  },

  {
    id: 9, section: 2, points: 2,
    topic: "WHILE True con BREAK",
    question: "Completa el ciclo infinito con condición de salida usando break. while True crea un ciclo infinito.",
    code:
`numero_secreto = 7

[1] [2]:
    intento = int(input("Adivina el número: "))
    if intento == numero_secreto:
        print("¡Correcto!")
        [3]
    else:
        print("Intenta de nuevo")`,
    blanks: [
      { id: 1, options: ["while", "for", "if", "loop"], correct: "while" },
      { id: 2, options: ["True", "False", "1", "0"], correct: "True" },
      { id: 3, options: ["break", "continue", "pass", "exit"], correct: "break" },
    ],
  },

  {
    id: 10, section: 2, points: 2,
    topic: "Descuentos Iterativos con WHILE",
    question: "Completa el sistema de descuentos que se aplica mientras el precio supera un umbral. Usa > y *= para aplicar el descuento.",
    code:
`precio_actual = 150.0
umbral_minimo = 100.0

while precio_actual [1] umbral_minimo:
    if precio_actual > 140.0:
        descuento = 0.10
    else:
        descuento = 0.05

    precio_actual [2] (1 - descuento)

print(f"Precio final: \${precio_actual[3].2f}")`,
    blanks: [
      { id: 1, options: [">", "<", "==", "!="], correct: ">" },
      { id: 2, options: ["*=", "+=", "-=", "="], correct: "*=" },
      { id: 3, options: [":", ";", ",", "."], correct: ":" },
    ],
  },

  {
    id: 11, section: 2, points: 2,
    topic: "Procesamiento de Lista con WHILE",
    question: "Completa el código que procesa tareas de una lista hasta vaciarla. Una lista vacía evalúa como False, .pop(0) extrae el primer elemento.",
    code:
`tareas = ["Limpiar datos", "Generar informe", "Revisar código"]

[1] tareas:
    tarea_actual = tareas.[2](0)
    print(f"Procesando: {tarea_actual}")
    print(f"Tareas pendientes: {[3](tareas)}")`,
    blanks: [
      { id: 1, options: ["while", "for", "if", "loop"], correct: "while" },
      { id: 2, options: ["pop", "remove", "append", "get"], correct: "pop" },
      { id: 3, options: ["len", "size", "count", "list"], correct: "len" },
    ],
  },

  {
    id: 12, section: 2, points: 2,
    topic: "Menú Interactivo con WHILE",
    question: "Completa el menú interactivo que se repite hasta que el usuario elija salir. Usa != para la condición y .lower() para normalizar.",
    code:
`opcion = ''

while opcion [1] 's':
    print("(1) Ver estado | (2) Configuración | (s) Salir")
    opcion = input("Elige: ").[2]()

    [3] opcion == '1':
        print("Mostrando estado...")
    elif opcion == 's':
        print("Saliendo...")`,
    blanks: [
      { id: 1, options: ["!=", "==", ">", "<"], correct: "!=" },
      { id: 2, options: ["lower", "upper", "strip", "split"], correct: "lower" },
      { id: 3, options: ["if", "elif", "else", "for"], correct: "if" },
    ],
  },

  {
    id: 13, section: 2, points: 2,
    topic: "WHILE con Contador Descendente",
    question: "Completa el contador que va desde n hasta 1 en orden descendente. Usa > 0 como condición y -= para decrementar.",
    code:
`n = 5
contador = n

while contador [1] 0:
    print(f"Contando: {contador}")
    contador [2] 1

print("¡Despegue!")`,
    blanks: [
      { id: 1, options: [">", "<", "==", "!="], correct: ">" },
      { id: 2, options: ["-=", "+=", "*=", "="], correct: "-=" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 3 — Iteración en Estructuras de Datos (12 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 14, section: 3, points: 2,
    topic: "Uso de ENUMERATE",
    question: "Completa el código que usa enumerate para obtener índice y valor simultáneamente. enumerate() devuelve tuplas (índice, valor).",
    code:
`frutas = ["manzana", "banana", "cereza"]

for [1], fruta in [2](frutas):
    print(f"Posición {i}: {fruta}")

# Salida esperada:
# Posición 0: manzana
# Posición [3]: banana
# Posición 2: cereza`,
    blanks: [
      { id: 1, options: ["i", "idx", "index", "j"], correct: "i" },
      { id: 2, options: ["enumerate", "zip", "range", "list"], correct: "enumerate" },
      { id: 3, options: ["1", "0", "2", "3"], correct: "1" },
    ],
  },

  {
    id: 15, section: 3, points: 2,
    topic: "Uso de ZIP para Listas Paralelas",
    question: "Completa el código que recorre dos listas en paralelo usando zip. zip() combina dos o más iterables en pares.",
    code:
`productos = ["Laptop", "Mouse", "Teclado"]
precios = [1200, 25, 75]

for producto, precio in [1](productos, precios):
    if precio [2] 100:
        categoria = "Económico"
    else:
        categoria = "Premium"
    print(f"{producto}: \${precio} - {[3]}")`,
    blanks: [
      { id: 1, options: ["zip", "enumerate", "range", "list"], correct: "zip" },
      { id: 2, options: ["<", ">", "==", "!="], correct: "<" },
      { id: 3, options: ["categoria", "precio", "producto", "precios"], correct: "categoria" },
    ],
  },

  {
    id: 16, section: 3, points: 2,
    topic: "Iteración en Tuplas",
    question: "Completa el recorrido de una tupla con condicionales. Las tuplas se recorren igual que las listas.",
    code:
`colores_rgb = ("Rojo", "Verde", "Azul", "Amarillo")

[1] color in colores_rgb:
    if color [2] ("Rojo", "Verde", "Azul"):
        print(f"Color Primario: {color}")
    [3]:
        print(f"Color Secundario: {color}")`,
    blanks: [
      { id: 1, options: ["for", "while", "if", "loop"], correct: "for" },
      { id: 2, options: ["in", "==", "not in", "-"], correct: "in" },
      { id: 3, options: ["else", "elif", "except", "finally"], correct: "else" },
    ],
  },

  {
    id: 17, section: 3, points: 2,
    topic: "Desempaquetado de Tuplas en FOR",
    question: "Completa el desempaquetado de tuplas anidadas. Puedes desempaquetar directamente: var1, var2 = tupla.",
    code:
`coordenadas = ((40.71, -74.00), (34.05, -118.24), (51.50, 0.12))

for i, coord in enumerate(coordenadas):
    [1], longitud = coord

    if longitud [2] 0:
        hemisferio = "Oeste"
    else:
        hemisferio = "Este"

    print(f"Ciudad {[3]+1}: {hemisferio}")`,
    blanks: [
      { id: 1, options: ["latitud", "lat", "x", "coord"], correct: "latitud" },
      { id: 2, options: ["<", ">", "==", "!="], correct: "<" },
      { id: 3, options: ["i", "j", "idx", "k"], correct: "i" },
    ],
  },

  {
    id: 18, section: 3, points: 2,
    topic: "Recorrido de Lista con Índices y WHILE",
    question: "Completa el recorrido manual de una lista usando while e índices. Usa len() para obtener el tamaño.",
    code:
`inventario = [150, 45, 10, 200, 75]
i = 0

while i [1] len(inventario):
    stock_actual = inventario[2]

    if stock_actual <= 50:
        print(f"Posición {i}: ¡ALERTA! Stock bajo")

    i [3] 1`,
    blanks: [
      { id: 1, options: ["<", ">", "==", "!="], correct: "<" },
      { id: 2, options: ["[i]", "[0]", "[j]", "[]"], correct: "[i]" },
      { id: 3, options: ["+=", "-=", "*=", "="], correct: "+=" },
    ],
  },

  {
    id: 19, section: 3, points: 2,
    topic: "Búsqueda en Lista con WHILE y Bandera",
    question: "Completa la búsqueda que se detiene al encontrar el elemento usando una bandera booleana y el operador and.",
    code:
`usuarios = ["Ana", "Beto", "Carlos", "Diana"]
buscado = "Carlos"
i = 0
encontrado = [1]

while i < len(usuarios) [2] not encontrado:
    if usuarios[i] == buscado:
        encontrado = [3]
        print(f"Encontrado en posición {i}")
    i += 1`,
    blanks: [
      { id: 1, options: ["False", "True", "None", "0"], correct: "False" },
      { id: 2, options: ["and", "or", "not", "if"], correct: "and" },
      { id: 3, options: ["True", "False", "None", "1"], correct: "True" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 4 — Algoritmos Clásicos (9 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 20, section: 4, points: 1,
    topic: "Suma de Gauss con FOR",
    question: "Completa la implementación de la suma de Gauss (1+2+...+n) usando for. Suma iterativa desde 1 hasta n inclusive.",
    code:
`n = 10
suma_gauss = 0

[1] i in range(1, n + 1):
    suma_gauss [2] i

print(f"Suma de 1 a {n}: {suma_gauss}")

# Verificación con fórmula
formula = n * (n + 1) [3] 2
print(f"Con fórmula: {formula}")`,
    blanks: [
      { id: 1, options: ["for", "while", "if", "loop"], correct: "for" },
      { id: 2, options: ["+=", "-=", "*=", "="], correct: "+=" },
      { id: 3, options: ["//", "/", "*", "-"], correct: "//" },
    ],
  },

  {
    id: 21, section: 4, points: 2,
    topic: "Factorial con FOR Descendente",
    question: "Completa el cálculo del factorial usando for en orden descendente. range(n, 0, -1) va desde n hasta 1.",
    code:
`n = 5
factorial = 1

for i in [1](n, 0, [2]):
    factorial [3] i

print(f"El factorial de {n} es: {factorial}")`,
    blanks: [
      { id: 1, options: ["range", "len", "list", "array"], correct: "range" },
      { id: 2, options: ["-1", "1", "-2", "0"], correct: "-1" },
      { id: 3, options: ["*=", "+=", "-=", "="], correct: "*=" },
    ],
  },

  {
    id: 22, section: 4, points: 2,
    topic: "Fibonacci con Variables (FOR)",
    question: "Completa la secuencia de Fibonacci usando solo variables y for. Mantén dos variables (a, b) y actualízalas.",
    code:
`n_terminos = 8
a, b = 0, 1

for i in [1](n_terminos):
    print(a, end=", ")
    [2], b = b, a + b

# Salida esperada: 0, 1, 1, 2, 3, 5, 8, [3],`,
    blanks: [
      { id: 1, options: ["range", "len", "list", "array"], correct: "range" },
      { id: 2, options: ["a", "b", "c", "temp"], correct: "a" },
      { id: 3, options: ["13", "8", "5", "21"], correct: "13" },
    ],
  },

  {
    id: 23, section: 4, points: 2,
    topic: "Fibonacci con WHILE y Límite de Valor",
    question: "Completa el Fibonacci que genera términos hasta que excedan un límite. El while continúa mientras b <= limite.",
    code:
`limite = 50
a, b = 0, 1
secuencia = [0]

[1] b [2] limite:
    secuencia.append(b)
    a, b = b, a + b

print(f"Fibonacci hasta {limite}: {secuencia}")
# Salida: [0, 1, 1, 2, 3, 5, 8, 13, 21, [3]]`,
    blanks: [
      { id: 1, options: ["while", "for", "if", "loop"], correct: "while" },
      { id: 2, options: ["<=", "<", ">", "=="], correct: "<=" },
      { id: 3, options: ["34", "21", "55", "50"], correct: "34" },
    ],
  },

  {
    id: 24, section: 4, points: 1,
    topic: "Suma de Gauss con WHILE",
    question: "Completa la suma de Gauss usando while en lugar de for. Inicializa contador en 1 y usa while contador <= n.",
    code:
`n = 10
suma_gauss = 0
contador = [1]

while contador <= n:
    suma_gauss += contador
    contador [2] 1

print(f"Suma de 1 a {n}: {suma_gauss}")`,
    blanks: [
      { id: 1, options: ["1", "0", "n", "-1"], correct: "1" },
      { id: 2, options: ["+=", "-=", "*=", "="], correct: "+=" },
    ],
  },

  {
    id: 25, section: 4, points: 1,
    topic: "Validación de Factorial",
    question: "Completa las validaciones para el cálculo del factorial. Valida números negativos y el caso base 0! = 1.",
    code:
`def calcular_factorial(n):
    if n [1] 0:
        return "No definido para negativos"
    if n [2] 0:
        return 1

    factorial = 1
    for i in range(1, n + 1):
        factorial *= i
    return factorial`,
    blanks: [
      { id: 1, options: ["<", ">", "==", "!="], correct: "<" },
      { id: 2, options: ["==", "!=", ">", "<"], correct: "==" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 5 — Matrices Bidimensionales (10 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 26, section: 5, points: 2,
    topic: "Recorrido de Matriz con FOR Anidado",
    question: "Completa el recorrido de una matriz usando ciclos for anidados. El ciclo externo recorre filas, el interno columnas.",
    code:
`matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

[1] fila in matriz:
    for elemento [2] fila:
        print(elemento, end=" ")
    [3]()  # Salto de línea`,
    blanks: [
      { id: 1, options: ["for", "while", "if", "loop"], correct: "for" },
      { id: 2, options: ["in", "==", "not in", "-"], correct: "in" },
      { id: 3, options: ["print", "input", "return", "pass"], correct: "print" },
    ],
  },

  {
    id: 27, section: 5, points: 2,
    topic: "Acceso por Índices en Matriz",
    question: "Completa el acceso a elementos de matriz usando índices [i][j]. Usa range(len()) para obtener índices.",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
suma_total = 0

for i in [1](len(matriz)):
    for j in range([2](matriz[i])):
        elemento = matriz[3][j]
        suma_total += elemento

print(f"Suma total: {suma_total}")`,
    blanks: [
      { id: 1, options: ["range", "len", "list", "enumerate"], correct: "range" },
      { id: 2, options: ["len", "range", "size", "count"], correct: "len" },
      { id: 3, options: ["[i]", "[j]", "[0]", "[]"], correct: "[i]" },
    ],
  },

  {
    id: 28, section: 5, points: 2,
    topic: "Búsqueda en Matriz con BREAK",
    question: "Completa la búsqueda en matriz que se detiene al encontrar el valor. Usa una bandera y break en ambos ciclos.",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
buscado = 5
encontrado = False

for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        if matriz[i][j] [1] buscado:
            print(f"Encontrado en [{i},{j}]")
            encontrado = [2]
            break
    if encontrado:
        [3]`,
    blanks: [
      { id: 1, options: ["==", "!=", ">", "<"], correct: "==" },
      { id: 2, options: ["True", "False", "None", "1"], correct: "True" },
      { id: 3, options: ["break", "continue", "pass", "return"], correct: "break" },
    ],
  },

  {
    id: 29, section: 5, points: 2,
    topic: "Creación de Matriz con FOR",
    question: "Completa la creación dinámica de una matriz usando ciclos for. Inicializa lista vacía y usa .append() para agregar filas.",
    code:
`filas = 2
columnas = 3
matriz = [1]

for i in range(filas):
    fila_actual = []
    for j in range(columnas):
        valor = i * columnas + j
        fila_actual.[2](valor)
    matriz.append([3])

print(matriz)  # [[0, 1, 2], [3, 4, 5]]`,
    blanks: [
      { id: 1, options: ["[]", "{}", "()", "None"], correct: "[]" },
      { id: 2, options: ["append", "add", "push", "insert"], correct: "append" },
      { id: 3, options: ["fila_actual", "fila", "i", "j"], correct: "fila_actual" },
    ],
  },

  {
    id: 30, section: 5, points: 2,
    topic: "Recorrido de Matriz con WHILE",
    question: "Completa el recorrido de matriz usando while con control manual de índices. Inicializa i=0 y actualiza manualmente.",
    code:
`matriz = [[1, 2], [3, 4], [5, 6]]
i = 0

while i [1] len(matriz):
    j = 0
    while j < len(matriz[i]):
        print(f"[{i},{j}]: {matriz[i][j]}")
        j += 1
    i [2] 1`,
    blanks: [
      { id: 1, options: ["<", ">", "==", "!="], correct: "<" },
      { id: 2, options: ["+=", "-=", "*=", "="], correct: "+=" },
    ],
  },

];
