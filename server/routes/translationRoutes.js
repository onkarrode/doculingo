const express = require("express");

const router = express.Router();

// POST /api/translate
router.post("/", async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;

    // Validate text
    if (!text || !text.trim()) {
      return res.status(400).json({
        message: "Text is required.",
      });
    }

    // Validate target language
    if (!targetLanguage) {
      return res.status(400).json({
        message: "Target language is required.",
      });
    }

    // MyMemory uses language-pair format
    const languagePair = `en|${targetLanguage}`;

    const url =
      `https://api.mymemory.translated.net/get` +
      `?q=${encodeURIComponent(text)}` +
      `&langpair=${languagePair}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Translation API returned ${response.status}`
      );
    }

    const data = await response.json();

    if (
      !data.responseData ||
      !data.responseData.translatedText
    ) {
      throw new Error("No translation received.");
    }

    res.status(200).json({
      translatedText: data.responseData.translatedText,
    });
  } catch (error) {
    console.error("Translation error:", error);

    res.status(500).json({
      message: "Translation failed.",
    });
  }
});

module.exports = router;