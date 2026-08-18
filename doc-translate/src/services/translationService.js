const API_URL = "https://doculingo-backend.onrender.com";

const translateText = async (text, targetLanguage) => {
  if (!text.trim()) {
    throw new Error("Text is required for translation.");
  }

  if (!targetLanguage) {
    throw new Error("Target language is required.");
  }

  const response = await fetch(
    `${API_URL}/api/translate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        targetLanguage,
      }),
    }
  );

  if (!response.ok) {
    let errorMessage = "Translation request failed.";

    try {
      const errorData = await response.json();
      errorMessage =
        errorData.message || errorMessage;
    } catch {
      // Keep the default error message
    }

    throw new Error(errorMessage);
  }

  const data = await response.json();

  return data.translatedText;
};

export default translateText;