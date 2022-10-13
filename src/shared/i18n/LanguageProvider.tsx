import React, { createContext, useContext, useEffect, useState } from "react";

import { DEFAULT_LANGUAGE } from "./config";

interface ILanguageContextData {
  language: string;
  setLanguage: Function;
}

interface ILanguageProvider {
  children: React.ReactNode;
}

export const LanguageContext = createContext({} as ILanguageContextData);

const LanguageProvider: React.FC<ILanguageProvider> = ({
  children,
}: ILanguageProvider) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const getCurrentLanguage: any = () => {
    return localStorage.getItem("language");
  };

  const saveCurrentLanguage = () => {
    return localStorage.setItem("language", language);
  };

  useEffect(() => {
    if (language) saveCurrentLanguage();
  }, [language]);

  useEffect(() => {
    setLanguage(getCurrentLanguage());
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

function useLang(): any {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLang() must be used within an LanguageProvider");
  }

  return context;
}

export { LanguageProvider, useLang };
