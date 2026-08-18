# DocuLingo

**Image-to-text extraction and translation web application.**

DocuLingo allows users to upload an image, extract text from it using OCR, edit the extracted text, and translate it into a selected language through a simple and responsive interface.

---

## 🚀 Features

- 📷 Upload images for text extraction
- 🖱️ Drag-and-drop image upload
- 🔍 OCR-based text extraction using Tesseract.js
- ✏️ Edit extracted text before translation
- 🌐 Translate extracted text into multiple languages
- 📋 Copy extracted text
- 📋 Copy translated text
- 🔄 Change or remove uploaded images
- ⚠️ Input validation and error handling
- ⏳ Loading states for OCR and translation
- 📱 Responsive interface for desktop and mobile

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Tesseract.js

### Backend

- Node.js
- Express.js
- REST API
- CORS

### Translation

- MyMemory Translation API

---

## 🔄 How It Works

DocuLingo follows a simple three-step workflow:

### 1. Upload

The user uploads an image containing text using the file picker or drag-and-drop interface.

### 2. Extract

Tesseract.js processes the image and performs Optical Character Recognition (OCR) to extract the text.

The extracted text is displayed in an editable text area so the user can correct or modify it before translation.

### 3. Translate

The edited text is sent to the Express.js backend.

The backend communicates with the MyMemory Translation API and returns the translated result to the frontend.

---

## 🏗️ Project Structure

```text
doculingo/
│
├── doc-translate/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── LanguageSelector.jsx
│   │   │   └── UploadBox.jsx
│   │   │
│   │   ├── services/
│   │   │   └── translationService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── routes/
│   │   └── translationRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── package.json
└── package-lock.json