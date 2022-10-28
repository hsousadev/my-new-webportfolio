import { useState } from "react";
import { FormattedMessage } from "react-intl";

import smoothScroll from "../../../shared/utils/smoothScroll";

import copy from "copy-to-clipboard";

import useWindowSize from "../../../shared/hooks/useWindowSize";

import { ArrowUp, CopySimple, PaperPlaneTilt } from "phosphor-react";
import LetsTalkButton from "../../../shared/components/LetsTalkButton";
import TagSection from "../../../shared/components/TagSection";

import { Container } from "./styles";

const Contacts = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  const [copySuccess, setCopySuccess] = useState(false);

  function copyToClipboard() {
    copy("henriquesousa.dev@gmail.com");
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 4000);
  }

  return (
    <Container id="contacts">
      <div className="tag-and-title">
        <TagSection text="contact-emoji" />
        <h1>
          <FormattedMessage id="lets-talk-section" />{" "}
        </h1>
      </div>

      <div className="wpp-and-email">
        <LetsTalkButton />
        <div className="email">
          <PaperPlaneTilt weight="thin" size={40} color="#412C7C" />
          <h4>E-mail:</h4>
          {!isMobile ? (
            <>
              <h5 id="emailToCopy">henriquesousa.dev@gmail.com</h5>
              <CopySimple
                onClick={copyToClipboard}
                weight="thin"
                size={32}
                color="#412C7C"
              />
            </>
          ) : (
            <>
              <div className="email-and-copy">
                <h5 id="emailToCopy">henriquesousa.dev@gmail.com</h5>
                <CopySimple
                  onClick={copyToClipboard}
                  weight="thin"
                  size={32}
                  color="#412C7C"
                />
              </div>
            </>
          )}

          {copySuccess && (
            <h4>
              ✅ <FormattedMessage id="text-copied-to-clipboard" />
            </h4>
          )}
        </div>
      </div>

      <h3 onClick={() => smoothScroll("hero")}>
        <FormattedMessage id="back-to-the-top" /> <ArrowUp />
      </h3>
    </Container>
  );
};

export default Contacts;
