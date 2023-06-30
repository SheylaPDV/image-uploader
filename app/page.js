// import Image from "next/image";
"use client";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/uploader" className={styles.card} rel="noopener noreferrer">
        <h2>
          Subir imagen <span>-&gt;</span>
        </h2>
      </a>
    </main>
  );
}
