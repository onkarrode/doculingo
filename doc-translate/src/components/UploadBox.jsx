import { useState } from "react";
import { createWorker } from "tesseract.js";
import LanguageSelector from "./LanguageSelector";
import translateText from "../services/translationService";

function UploadBox() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const [loading, setLoading] = useState(false);
  const [translating, setTranslating] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("hi");

  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  // ==============================
  // IMAGE HANDLING
  // ==============================

  const processImage = (selectedImage) => {
    if (!selectedImage) return;

    if (!selectedImage.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }

    if (selectedImage.size > 10 * 1024 * 1024) {
      setError("Image size must be less than 10 MB.");
      return;
    }

    setError("");
    setImage(selectedImage);
    setText("");
    setTranslatedText("");
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    processImage(selectedImage);
  };

  // ==============================
  // DRAG & DROP
  // ==============================

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedImage = event.dataTransfer.files[0];

    processImage(droppedImage);
  };

  // ==============================
  // OCR
  // ==============================

  const extractText = async () => {
    if (!image) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    setError("");
    setText("");
    setTranslatedText("");

    try {
      const worker = await createWorker("eng");

      const result = await worker.recognize(image);

      setText(result.data.text);

      await worker.terminate();
    } catch (error) {
      console.error("OCR Error:", error);

      setError("Failed to extract text from the image.");
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // TRANSLATION
  // ==============================

  const handleTranslate = async () => {
    if (!text.trim()) {
      setError("Please extract some text first.");
      return;
    }

    setTranslating(true);
    setError("");
    setTranslatedText("");

    try {
      const result = await translateText(
        text,
        selectedLanguage
      );

      setTranslatedText(result);
    } catch (error) {
      console.error("Translation Error:", error);

      setError("Translation failed. Please try again.");
    } finally {
      setTranslating(false);
    }
  };

  // ==============================
  // COPY
  // ==============================

  const copyText = async () => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);

      alert("Text copied!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const copyTranslatedText = async () => {
    if (!translatedText) return;

    try {
      await navigator.clipboard.writeText(
        translatedText
      );

      alert("Translated text copied!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  // ==============================
  // CLEAR
  // ==============================

  const clearText = () => {
    setText("");
    setTranslatedText("");
    setError("");
  };

  const removeImage = () => {
    setImage(null);
    setText("");
    setTranslatedText("");
    setError("");
  };

  // ==============================
  // TEXT STATS
  // ==============================

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characterCount = text.length;

  // ==============================
  // UI
  // ==============================

  return (
    <div className="upload-workspace">

      {/* ERROR MESSAGE */}

      {error && (
        <div className="upload-error">
          <div className="error-icon">!</div>

          <span>{error}</span>

          <button
            className="error-close"
            onClick={() => setError("")}
            aria-label="Close error"
          >
            ×
          </button>
        </div>
      )}

      {/* MAIN WORKSPACE */}

      <div className="workspace-grid">

        {/* ==============================
            STEP 01
        ============================== */}

        <div className="panel">

          <div className="panel-header">

            <div>
              <span className="panel-step">
                STEP 01
              </span>

              <h2>
                Upload your image
              </h2>

              <p>
                Add an image containing the text
                you want to extract.
              </p>
            </div>

            <span className="panel-number">
              01
            </span>

          </div>

          {/* UPLOAD AREA */}

          <div
            className={`upload-area ${
              isDragging ? "dragging" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >

            {!image ? (

              <div className="upload-content">

                <div className="upload-icon">

                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16V4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M7 9L12 4L17 9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M5 20H19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <h3>
                  {isDragging
                    ? "Drop your image here"
                    : "Upload your image"}
                </h3>

                <p>
                  {isDragging
                    ? "Release to upload your image"
                    : "Drag & drop or choose an image from your device"}
                </p>

                <label className="browse-button">
                  Browse Image

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                  />
                </label>

                <span className="upload-hint">
                  PNG, JPG or JPEG • Max 10 MB
                </span>

              </div>

            ) : (

              <div className="image-preview-container">

                <div className="preview-image-wrapper">

                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded preview"
                    className="image-preview"
                  />

                </div>

                <div className="file-info">

                  <div className="file-icon">
                    IMG
                  </div>

                  <div className="file-details">

                    <p className="file-name">
                      {image.name}
                    </p>

                    <span>
                      Image ready for OCR
                    </span>

                  </div>

                </div>

                <div className="image-actions">

                  <label className="change-image-button">
                    Change Image

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      hidden
                    />
                  </label>

                  <button
                    type="button"
                    className="remove-image-button"
                    onClick={removeImage}
                  >
                    Remove
                  </button>

                </div>

              </div>

            )}

          </div>

          {/* EXTRACT BUTTON */}

          <button
            className="primary-button extract-button"
            onClick={extractText}
            disabled={!image || loading}
          >

            {loading ? (
              <>
                <span className="button-spinner"></span>

                Extracting Text...
              </>
            ) : (
              <>
                Extract Text

                <span className="button-arrow">
                  →
                </span>
              </>
            )}

          </button>

        </div>


        {/* ==============================
            STEP 02
        ============================== */}

        <div className="panel">

          <div className="panel-header">

            <div>
              <span className="panel-step">
                STEP 02
              </span>

              <h2>
                Extracted text
              </h2>

              <p>
                Review or edit the detected text.
              </p>
            </div>

            <span className="panel-number">
              02
            </span>

          </div>

          {/* TEXT EDITOR */}

          <div className="text-editor-wrapper">

            {!text && !loading && (
              <div className="text-empty-state">

                <div className="text-empty-icon">
                  Aa
                </div>

                <h3>
                  No text extracted yet
                </h3>

                <p>
                  Upload an image and click
                  <strong> Extract Text </strong>
                  to see the detected text here.
                </p>

              </div>
            )}

            {loading && (
              <div className="text-empty-state">

                <div className="ocr-loader">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <h3>
                  Reading your image...
                </h3>

                <p>
                  OCR is detecting text from your image.
                  This may take a few seconds.
                </p>

              </div>
            )}

            <textarea
              className={`text-editor ${
                !text ? "text-editor-empty" : ""
              }`}
              value={text}
              onChange={(event) =>
                setText(event.target.value)
              }
              placeholder=""
              disabled={loading}
            />

          </div>

          {/* TEXT FOOTER */}

          <div className="text-footer">

            <div className="text-stats">

              <span>
                {wordCount} words
              </span>

              <span>
                {characterCount} characters
              </span>

            </div>

            <div className="text-actions">

              <button
                onClick={copyText}
                disabled={!text}
                className="secondary-button"
              >
                Copy
              </button>

              <button
                onClick={clearText}
                disabled={!text}
                className="secondary-button"
              >
                Clear
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ==============================
          STEP 03
      ============================== */}

      <div className="translation-section">

        <div className="translation-header">

          <div>

            <span className="section-label">
              STEP 03
            </span>

            <h2>
              Translate your text
            </h2>

            <p>
              Select your target language and
              translate your extracted text.
            </p>

          </div>

          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />

        </div>

        <button
          className="primary-button translate-button"
          onClick={handleTranslate}
          disabled={!text || translating}
        >

          {translating ? (
            <>
              <span className="button-spinner"></span>

              Translating...
            </>
          ) : (
            <>
              Translate Text

              <span className="button-arrow">
                →
              </span>
            </>
          )}

        </button>

      </div>


      {/* ==============================
          TRANSLATION RESULT
      ============================== */}

      {translatedText && (

        <div className="translation-result">

          <div className="result-header">

            <div>

              <span className="section-label">
                TRANSLATED RESULT
              </span>

              <h2>
                Translation complete
              </h2>

            </div>

            <button
              className="secondary-button"
              onClick={copyTranslatedText}
            >
              Copy Translation
            </button>

          </div>

          <div className="translated-content">
            {translatedText}
          </div>

        </div>

      )}

    </div>
  );
}

export default UploadBox;