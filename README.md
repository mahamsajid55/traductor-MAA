# EN ESPAÑOL

# Traductor 

## 📌 Descripción

Este proyecto es un traductor básico de español a inglés y de inglés a español. No usa ninguna API externa, sino que emplea un diccionario en JavaScript para traducir palabras automáticamente.

![Home](home.png)

### 🚀 Características

✔ Traducción automática sin necesidad de botones.
✔ Sugerencias de palabras con datalist.
✔ No requiere conexión a internet.

## 📂 Estructura del Proyecto

- │── 📄 index.html # Página principal
- │── 📄 style.css # Estilos de la página
- │── 📄 main.js # Lógica de traducción
- │── 📄 README.md # Documentación del proyecto

## 🛠 Tecnologías Usadas

    HTML5 → Estructura de la página.
    CSS3 → Diseño y estilos.
    JavaScript → Lógica de traducción.

## 📜 Explicación del Código
### 1️⃣ index.html (Estructura de la Página)

Este archivo define la interfaz de usuario, que incluye:

- ## Cuatro campos de entrada (`input`)**:
    - Dos para escribir palabras en **español e inglés**.
    - Dos campos de solo lectura para mostrar la traducción.
- **Datalist**: Lista de sugerencias de palabras predefinidas.
- **Footer**: Muestra los nombres de los creadores.

![htmlList](htmllist.png)

## 2️⃣ main.js (Lógica de Traducción)

### 📖 Diccionario de Traducción

Este diccionario almacena palabras clave en español y sus traducciones al inglés.

![Dictionary](diccionario.png)

✦ Se utiliza un objeto en JavaScript para almacenar las traducciones.

## 📖 Diccionario Inverso (Inglés a Español)

Otro diccionario se genera automáticamente para la traducción inversa (inglés → español).

![ReverseDictionary](reversedictionary.png)

### 📌 Puntos clave sobre el código de inversión de diccionario

- 1️⃣ Convierte un diccionario de traducción (Español → Inglés) en su versión inversa (Inglés → Español).

- 2️⃣ Utiliza Object.entries(dictionary) para transformar el objeto en un array de pares [clave, valor].

- 3️⃣ Usa .map(([key, value]) => [value, key]) para intercambiar las claves y valores.

- 4️⃣ Aplica Object.fromEntries(...) para reconstruir el objeto con la estructura invertida.

- 5️⃣ Permite traducir palabras de inglés a español sin necesidad de escribir dos diccionarios manualmente.

- 6️⃣ Funciona de manera automática con cualquier conjunto de palabras en el diccionario original.

- 7️⃣ Es eficiente y limpio, evitando estructuras complejas como bucles for o múltiples if-else.

## 3️⃣ populateDatalists() (Agregando Sugerencias)

La función populateDatalists() agrega dinámicamente sugerencias de palabras a los campos de entrada usando diccionarios predefinidos. Esto permite a los usuarios seleccionar palabras de una lista en lugar de escribirlas manualmente.

### 📂 Explicación del Código
### 1️⃣ Obtener los Elementos Datalist

![Spanish](spanish.png)

- ✦ Obtiene referencias a los elementos <datalist> donde se agregarán las sugerencias.

###  2️⃣ Agregar Palabras en Español a la Lista

![Objectkeys](objectkeys.png)

- ✦ Extrae todas las palabras en español del diccionario (Object.keys(dictionary)).
- ✦ Crea un elemento <option> para cada palabra.
- ✦ Agrega las opciones al <datalist> de español.

### 3️⃣ Agregar Palabras en Inglés a la Lista

![Objectvalues](objectvalue.png)

- ✦ Extrae todas las palabras en inglés del diccionario (Object.values(dictionary)).
- ✦ Crea un elemento <option> para cada palabra.
- ✦ Agrega las opciones al <datalist> de inglés.

### 4️⃣ Llamar a la Función

![Populate](populate.png)

- ✦ Ejecuta la función para generar y mostrar las sugerencias cuando se carga la página.


- 0✦ Agrega opciones con palabras en español e inglés.

## 4️⃣ Traducción en Tiempo Real

Este código JavaScript permite la traducción en tiempo real entre español e inglés. Escucha la entrada del usuario y muestra instantáneamente la traducción correspondiente utilizando un diccionario predefinido.

## 📖 Español → Inglés

![Spanishenglish](spanishenglish.png)

- ✦ Escucha la entrada en el campo de español (spanishInput).
- ✦ Convierte el texto a minúsculas y elimina espacios (toLowerCase().trim()).
- ✦ Busca la traducción en el objeto dictionary.
- ✦ Muestra la traducción en englishOutput o muestra "No encontrado" si la palabra no está en el diccionario.

## 📖 Inglés → Español

![Englishspanish](englishspanish.png)

- ✦ Escucha la entrada en el campo de inglés (englishInput).
- ✦ Procesa el texto de la misma manera que la función en español.
- ✦ Usa reverseDictionary para encontrar el equivalente en español.
- ✦ Muestra la traducción en spanishOutput o muestra "Not found" si no está en el diccionario.



# IN ENGLISH

# Language Translator  


## 📌 Description  
This project is a basic Spanish-to-English and English-to-Spanish translator. It does not rely on any external API but instead uses a predefined **JavaScript dictionary** to translate words automatically.  

![Home](home.png)


## 🚀 Features  
✔ Automatic translation without buttons.  
✔ Word suggestions using `datalist`.  
✔ No internet connection required.  


## 📂 Project Structure  
### 📁 Language-Translator
- │── 📄 index.html # Main webpage
- │── 📄 style.css # Page styling
- │── 📄 main.js # Translation logic
- │── 📄 README.md # Project documentation


## 🛠 Technologies Used  
- **HTML5** → For page structure.  
- **CSS3** → For styling and design.  
- **JavaScript** → For translation logic.  

---

## 📜 Code Explanation  

### **1️⃣ `index.html` (Page Structure)**  
This file defines the user interface, which includes:  
- **Four input fields (`input`)**:  
  - Two for writing words in **Spanish and English**.  
  - Two read-only fields that display the translation.  
- **Datalist**: A list of predefined word suggestions.  
- **Footer**: Displays the creators' names.  

![htmlList](htmllist.png)


### **2️⃣ main.js (Translation Logic)**  

## 📖 Translation Dictionary
This dictionary stores key Spanish words and their English translations.

![Dictionary](diccionario.png)


✦ A JavaScript object stores the translations.

### 📖 Reverse Dictionary (English to Spanish)

Another dictionary is automatically created for reverse translation (English → Spanish).

![ReverseDictionary](reversedictionary.png)

### 📌 Key Points About the Dictionary Inversion Code

- 1️⃣ Converts a translation dictionary (Spanish → English) into its reverse version (English → Spanish).

- 2️⃣ Uses Object.entries(dictionary) to transform the object into an array of [key, value] pairs.

- 3️⃣ Uses .map(([key, value]) => [value, key]) to swap the keys and values.

- 4️⃣ Applies Object.fromEntries(...) to reconstruct the object with the inverted structure.

- 5️⃣ Allows translating words from English to Spanish without manually writing two dictionaries.

- 6️⃣ Works automatically with any set of words in the original dictionary.

- 7️⃣ It is efficient and clean, avoiding complex structures like for loops or multiple if-else statements.

# 3️⃣ populateDatalists() (Adding Suggestions)

The populateDatalists() function dynamically adds word suggestions to the input fields using predefined dictionaries. It allows users to select words from a list instead of typing them manually.

### 📂 Code Explanation
### 1️⃣ Retrieving Datalist Elements

![Spanish](spanish.png)

✦ Gets references to the <datalist> elements where suggestions will be added.

### 2️⃣ Adding Spanish Words to the List

![Objectkeys](objectkeys.png)

- ✦ Extracts all Spanish words from the dictionary (Object.keys(dictionary)).
- ✦ Creates an <option> element for each word.
- ✦ Appends the options to the Spanish <datalist>.

### 3️⃣ Adding English Words to the List

![Objectvalues](objectvalue.png)

✦ Extracts all English words from the dictionary (Object.values(dictionary)).
✦ Creates an <option> element for each word.
✦ Appends the options to the English <datalist>.


### 4️⃣ Calling the Function

![Populate](populate.png)

✦ Runs the function to generate and display the suggestions when the page loads.

##  Real-time Translation

This JavaScript code enables real-time translation between Spanish and English. It listens for user input and instantly displays the corresponding translation using a predefined dictionary.

## 📖 Spanish → English  

![Spanishenglish](spanishenglish.png)

- ✦ Listens for input on the Spanish field (spanishInput).
- ✦ Converts text to lowercase and removes spaces (toLowerCase().trim()).
- ✦ Finds the translation in the dictionary object.
✦-  Displays translation in englishOutput, or shows "No encontrado" if the word is missing.

## 📖 English → Spanish

![Englishspanish](englishspanish.png)

- ✦ Listens for input on the English field (englishInput).
- ✦ Processes the text similarly to the Spanish function.
- ✦ Uses the reverseDictionary to find the Spanish equivalent.
- ✦ Displays translation in spanishOutput, or shows "Not found" if missing.


## 👥 WE 3 CODERS

- **First Programmer:** Aleeza Sajid-  [GitHub](https://github.com/Aleeza951)
- **Second Programmer:** Azalfa Murtaza - [GitHub](https://github.com/zille5)
- **Third Programmer:** Maham Sajid - [GitHub](https://github.com/mahamsajid55)

