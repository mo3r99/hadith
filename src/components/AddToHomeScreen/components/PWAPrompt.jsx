import React, { Fragment, useEffect, useState } from "react";

import ShareIcon from "./ShareIcon";
import HomeScreenIcon from "./HomeScreenIcon";

import Styles from "./PWAPrompt.module.scss";

const PWAPrompt = ({
  delay,
  copyTitle,
  copyBody,
  copyAddHomeButtonLabel,
  copyShareButtonLabel,
  copyClosePrompt,
  permanentlyHideOnDismiss,
  promptData,
  maxVisits,
  onClose,
}) => {
  const [isVisible, setVisibility] = useState(!Boolean(delay));

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        // Prevent keyboard appearing over the prompt if a text input has autofocus set
        if (document.activeElement) {
          document.activeElement.blur();
        }

        setVisibility(true);
      }, delay);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add(Styles.noScroll);
    }
  }, [isVisible]);

  const isiOS13AndUp = /OS (13|14)/.test(window.navigator.userAgent);
  const visibilityClass = isVisible ? Styles.visible : Styles.hidden;
  const iOSClass = isiOS13AndUp ? Styles.modern : "legacy";

  const dismissPrompt = (evt) => {
    document.body.classList.remove(Styles.noScroll);
    setVisibility(false);

    if (permanentlyHideOnDismiss) {
      localStorage.setItem(
        "iosPwaPrompt",
        JSON.stringify({
          ...promptData,
          visits: maxVisits,
        })
      );
    }

    if (typeof onClose === "function") {
      onClose(evt);
    }
  };

  const onTransitionOut = (evt) => {
    if (!isVisible) {
      evt.currentTarget.style.display = "none";
    }
  };

  return (
    <Fragment>
      <div
        className={`${Styles.pwaPromptOverlay} ${visibilityClass} ${iOSClass} iOSPWA-overlay`}
        aria-label="Close"
        role="button"
        onClick={dismissPrompt}
        onTransitionEnd={onTransitionOut}
      />
      <div
        className={`${Styles.pwaPrompt} ${visibilityClass} ${iOSClass} iOSPWA-container`}
        aria-describedby="pwa-prompt-description"
        aria-labelledby="pwa-prompt-title"
        role="dialog"
        onTransitionEnd={onTransitionOut}
      >
        <div className={`${Styles.pwaPromptHeader} iOSPWA-header`}>
          <p
            id="pwa-prompt-title"
            className={`${Styles.pwaPromptTitle} iOSPWA-title`}
          >
            {copyTitle}
          </p>
          <button
            className={`${Styles.pwaPromptCancel} iOSPWA-cancel`}
            onClick={dismissPrompt}
          >
            {copyClosePrompt}
          </button>
        </div>
        <div className={`${Styles.pwaPromptBody} iOSPWA-body`}>
          <div className={`${Styles.pwaPromptDescription} iOSPWA-description`}>
            <p
              id="pwa-prompt-description"
              className={`${Styles.pwaPromptCopy} iOSPWA-description-copy`}
            >
              {copyBody}
            </p>
          </div>
        </div>
        <div className={`${Styles.pwaPromptInstruction} iOSPWA-steps`}>
          <div className={`${Styles.pwaPromptInstructionStep} iOSPWA-step1`}>
            <ShareIcon
              className={`${Styles.pwaPromptShareIcon} iOSPWA-step1-icon`}
              modern={isiOS13AndUp}
            />
            <p
              className={`${Styles.pwaPromptCopy} ${Styles.bold} iOSPWA-step1-copy`}
            >
              {copyShareButtonLabel}
            </p>
          </div>
          <div className={`${Styles.pwaPromptInstructionStep} iOSPWA-step2`}>
            <HomeScreenIcon
              className={`${Styles.pwaPromptHomeIcon} iOSPWA-step2-icon`}
              modern={isiOS13AndUp}
            />
            <p
              className={`${Styles.pwaPromptCopy} ${Styles.bold} iOSPWA-step2-copy`}
            >
              {copyAddHomeButtonLabel}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PWAPrompt;
