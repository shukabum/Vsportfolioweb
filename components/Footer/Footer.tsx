import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiDribbbleFill,
} from "react-icons/ri";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <span>find me in:</span>
      </div>
      <div>
        <a
          aria-label="Qudusayo linkedin profile"
          href="https://www.linkedin.com/in/shubham-sharma-49b54b248/"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Qudusayo twitter profile"
          href="https://twitter.com/shush__07"
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Qudusayo github profile"
          href="https://github.com/shukabum/"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          
        >
          <span className={styles.githubUsername}>
            Designed by Shubham Sharma
          </span>
          {/* <RiDribbbleFill fill="#607B96" size={25} /> */}
        </a>
      </div>
    </footer>
  );
}
