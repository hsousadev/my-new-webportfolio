import { createContext, useState } from "react";

import { IntlProvider } from "react-intl";

import ptLanguage from "./shared/i18n/pt.json";
import enLanguage from "./shared/i18n/en.json";

import Sections from "./sections";

import { Container } from "./styles/global";

interface ContextProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextProps>({
  language: "pt",
  setLanguage: () => {},
});

function App() {
  const [language, setLanguage] = useState("pt");

  return (
    <Context.Provider value={{ language, setLanguage }}>
      <IntlProvider
        messages={language === "pt" ? ptLanguage : enLanguage}
        locale="en"
        defaultLocale="pt"
      >
        <Container className="App">
          <Sections />
        </Container>
      </IntlProvider>
    </Context.Provider>
  );
}

export default App;
