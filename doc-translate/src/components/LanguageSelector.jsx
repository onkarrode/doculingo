function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
}) {
  const languages = [
    {
      code: "hi",
      name: "Hindi",
      nativeName: "हिन्दी",
    },
    {
      code: "mr",
      name: "Marathi",
      nativeName: "मराठी",
    },
    {
      code: "es",
      name: "Spanish",
      nativeName: "Español",
    },
    {
      code: "fr",
      name: "French",
      nativeName: "Français",
    },
    {
      code: "de",
      name: "German",
      nativeName: "Deutsch",
    },
  ];

  return (
    <div className="language-selector">
      <div className="language-label">
        <span className="language-label-title">
          Translate to
        </span>

        <span className="language-label-subtitle">
          Select target language
        </span>
      </div>

      <div className="language-control">
        <span className="language-icon">
          文
        </span>

        <select
          value={selectedLanguage}
          onChange={(event) =>
            onLanguageChange(event.target.value)
          }
          className="language-select"
          aria-label="Select target language"
        >
          {languages.map((language) => (
            <option
              key={language.code}
              value={language.code}
            >
              {language.name} — {language.nativeName}
            </option>
          ))}
        </select>

        <span className="select-arrow">
          ↓
        </span>
      </div>
    </div>
  );
}

export default LanguageSelector;