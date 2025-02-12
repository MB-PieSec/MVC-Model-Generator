# **MVC Model Generator**  
*A Node.js script to generate directory structures for MVC-based applications.*  

## **📌 Features**
✅ Automatically creates directories for an MVC application  
✅ Supports configurable file structures  
✅ Simple and easy to use  

---

## **📥 Installation**  
### **Using npm (for general use)**
```sh
npm install -g mvc-model-generator
```

---

## **🚀 Usage**  
After linking the package, you can import and use it in your Node.js script:

```javascript
import { init } from "mvc-model-generator";

init();
```

This will generate the following directory structure in the current working directory:

```
📂 project-root
 ├── 📂 config
 ├── 📂 public
 │   ├── 📂 css
 │   ├── 📂 js
 │   ├── 📂 images
 ├── 📂 src
 │   ├── 📂 models
 │   ├── 📂 views
 │   ├── 📂 controllers
 │   ├── 📂 routes
 │   ├── 📂 middleware
 ├── 📂 test
```

---

## **⚙️ Configuration (Optional)**
If you want to customize the directory structure, modify the `fileTree` array inside `index.js`:

```javascript
const fileTree = [
    "config",
    {"public": ["css", "js", "images"]},
    {"src": ["models", "views", "controllers", "routes", "middleware"]},
    "test"
];
```

---

## **🛠️ Development**
### **Cloning the Repo**
```sh
git clone https://github.com/MB-PieSec/MVC-Model-Generator.git
cd MVC-Model-Generator
npm install
```

---

## **📜 License**
This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.  

---

## **📮 Contributing**
Feel free to submit issues or pull requests on GitHub:  
🔗 [GitHub Repository](https://github.com/MB-PieSec/MVC-Model-Generator)  
🔗 [NPM Repository](https://www.npmjs.com/package/mvc-model-generator?activeTab=readme)


