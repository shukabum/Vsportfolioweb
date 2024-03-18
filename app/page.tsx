"use client";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainInfo}>
          <div>
            <span className={styles.hi}>Hi all. I am</span>
            <h1>Shubham</h1>
            <h2>&gt; Software developer</h2>
          </div>

          <div>
            <span className={styles.comment}>
              {`//`} find my profile on Github:
            </span>
            <p className={styles.githubLink}>
              <span>const</span> <span>githubLink</span> ={" "}
              <span>
                &quot;
                <a
                  target="_blank"
                  href="https://github.com/shukabum"
                  rel="noreferrer"
                >
                  https://github.com/shukabum
                </a>
                &quot;
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
