import React from "react";
import { Link } from "react-router-dom";

import Styles from "./Collections.module.scss";
import Card from "../../components/ui/card/Card";

function Collections() {
  return (
    <>
      <header>
        <h3>Collections</h3>
      </header>
      <section className={Styles.collections}>
        <Link to="/hadith/sahih-bukhari/1">
          <Card>
            <h2>Sahih Al-Bukhari</h2>
          </Card>
        </Link>

        <Link to="/hadith/sahih-muslim/1">
          <Card>
            <h2>Sahih Muslim</h2>
          </Card>
        </Link>

        <Link to="/hadith/al-tirmidhi/1">
          <Card>
            <h2>Jami' Tirmidhi</h2>
          </Card>
        </Link>

        <Link to="/hadith/abu-dawood/1">
          <Card>
            <h2>Sunan Abi Dawood</h2>
          </Card>
        </Link>

        <Link to="/hadith/sunan-nasai/1">
          <Card>
            <h2>Sunan Nasa'i</h2>
          </Card>
        </Link>

        <Link to="/hadith/ibn-e-majah/1">
          <Card>
            <h2>Sunan ibn Majah</h2>
          </Card>
        </Link>
      </section>
    </>
  );
}

export default Collections;
