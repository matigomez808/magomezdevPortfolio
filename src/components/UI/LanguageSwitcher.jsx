import { useTorreStore } from "@/store/store";

function LanguageSwitcher() {
  const language = useTorreStore((state) => state.language);
  const setLanguage = useTorreStore((state) => state.setLanguage);

  return (
    <div>
      <button
        onClick={() => setLanguage("en")}
        className={`font-extralight text-l px-4 rounded ${
          language === "en" ? "font-normal" : ""
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={`font-extralight text-l px-4 rounded ${
          language === "es" ? "font-normal" : ""
        }`}
      >
        Español
      </button>
    </div>
  );
}

export default LanguageSwitcher;
