const translateText = async (text, targetLanguage) => {
  if (!text.trim()) {
    throw new Error("Text is required for translation.");
  }

  if (!targetLanguage) {
    throw new Error("Target language is required.");
  }

  const response = await fetch(
    "http://localhost:5000/api/translate",
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
    const errorData = await response.json();

    throw new Error(
      errorData.message || "Translation request failed."
    );
  }

  const data = await response.json();

  return data.translatedText;
};

export default translateText;