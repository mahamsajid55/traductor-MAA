# Language Translator  


## 📌 Description  
This project is a basic Spanish-to-English and English-to-Spanish translator. It does not rely on any external API but instead uses a predefined **JavaScript dictionary** to translate words automatically.  

## 🚀 Features  
✔ Automatic translation without buttons.  
✔ Real-time translation while typing.  
✔ Word suggestions using `datalist`.  
✔ No internet connection required.  


## 📂 Project Structure  
📁 Language-Translator
│── 📄 index.html # Main webpage
│── 📄 style.css # Page styling
│── 📄 main.js # Translation logic
│── 📄 README.md # Project documentationç


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


### **2️⃣ main.js (Translation Logic)**  

## 📖 Translation Dictionary
This dictionary stores key Spanish words and their English translations.

![Dictionary](diccionario.png)



✦ A JavaScript object stores the translations.

### 📖 Reverse Dictionary (English to Spanish)

Another dictionary is automatically created for reverse translation (English → Spanish).

![ReverseDictionary](reversedictionary.png)

✦ Converts { "ciudad": "city" } into { "city": "ciudad" }.

### 3️⃣ populateDatalists() (Adding Suggestions)

This function adds dictionary words to the datalist for input fields.

![PopulateDatalist](datalist.png)
✦ Adds options with Spanish and English words.

### 4️⃣ Real-time Translation

Every time the user types in an input field, an event runs that automatically translates the text.

📖 Spanish → English  

![Spanishenglish](spanishenglish.png)

✦ If the word is in the dictionary, the translation appears.
✦ If not found, it shows "Not found".

📖 English → Spanish

![Englishspanish](englishspanish.png)

✦ Works the same way but in the opposite direction.


