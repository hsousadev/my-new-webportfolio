import React from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";

import getMessages from "./getMessages";
import { useLang } from "./LanguageProvider";

interface IIntlProvider {
  children: React.ReactNode;
}

const IntlProvider: React.FC<IIntlProvider> = ({
  children,
}: IIntlProvider) => {
  const { language } = useLang();

  return (
    <ReactIntlProvider
      locale={language}
      messages={getMessages[language]}
    >
      {children}
    </ReactIntlProvider>
  );
};

export default IntlProvider;
