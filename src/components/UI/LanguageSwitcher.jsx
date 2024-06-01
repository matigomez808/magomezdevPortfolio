import { useTorreStore } from "@/store/store";

function LanguageSwitcher() {
  const language = useTorreStore((state) => state.language);
  const setLanguage = useTorreStore((state) => state.setLanguage);

  return (
    <div className="flex sm:flex-col ">
      <button
        onClick={() => setLanguage("en")}
        className={`font-variant text-lg sm:text-sm px-4 rounded ${
          language === "en" ? "font-bold" : ""
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={`font-variant text-lg sm:text-sm px-4 rounded ${
          language === "es" ? "font-bold" : ""
        }`}
      >
        Español
      </button>
    </div>
  );
}

export default LanguageSwitcher;
