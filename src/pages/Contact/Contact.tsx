// ContactPage.tsx
import React, { useState } from "react";
import styles from "./Contact.module.scss";
import Stripes from "@/components/Stripes/Stripes";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (name && message) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setName("");
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.sectionLine}></div>
      <div className={styles.mainContent}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>LET'S GET IN TOUCH </h1>
          <p className={styles.subtitle}>
            I promise I won't ghost you... maybe
          </p>
        </div>
        <div className={styles.formSection}>
          <div className={styles.formWindow}>
            <div className={styles.titleBar}>
              <span>delivery.exe</span>
              <button className={styles.windowBtn}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>

            <div className={styles.formContent}>
              <input
                id="betreff"
                type="text"
                placeholder="hello"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />

              <textarea
                id="message"
                placeholder="say something"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={8}
                className={styles.textarea}
              />
              <button
                onClick={handleSend}
                className={`${styles.sendBtn} ${sent ? styles.sent : ""}`}
              >
                ⟶ [ SEND ] ⟵
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
        <div className={styles.sectionLine}></div>
        <Stripes gapSize={32} number={40} addedClass={styles.stripe} />
      </footer>
    </div>
  );
}
