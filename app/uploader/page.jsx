"use client";
import { useEffect, useState } from "react";
import styles from "../page.module.css";

const Page = () => {
  const [file, setFile] = useState();
  const [pathImage, setPathImage] = useState("");

  const resetStates = () => {
    setFile();
  };

  const send = (e) => {
    e.preventDefault();
    console.log("Funciona");
  };

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      // el .length es porque las imagenes vienen en forma de arreglo.
      const file = e.target.files[0];
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          setPathImage(reader.result);
        };
        setFile(file);
      } else {
        console.log("esta no es una imagen");
      }
    }
  };

  return (
    <div className={styles.main}>
      <h1>Uploading!</h1>

      <form className={styles.card} onSubmit={send}>
        <div>
          <input type="file" onChange={onFileChange} />
          <img src={pathImage} width="150" />
        </div>
        <div>
          <button type="submit">Subir</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
