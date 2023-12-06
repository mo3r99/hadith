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
            <div className={Styles.engar}>
              <h2>Sahih Al-Bukhari</h2>
              <h2>صحيح البخاري</h2>
            </div>
          </Card>
        </Link>

        <Link to="/hadith/sahih-muslim/1">
          <Card>
          <div className={Styles.engar}>
              <h2>Sahih Muslim</h2>
              <h2>صحيح مسلم</h2>
            </div>
          </Card>
        </Link>

        <Link to="/hadith/al-tirmidhi/1">
          <Card>
          <div className={Styles.engar}>
              <h2>Jami' al-Tirmidhi</h2>
              <h2>جامع الترمذي</h2>
            </div>
          </Card>
        </Link>

        <Link to="/hadith/abu-dawood/1">
          <Card>
          <div className={Styles.engar}>
              <h2>Sunan Abi Dawood</h2>
              <h2>سنن أبي داود</h2>
            </div>
          </Card>
        </Link>

        <Link to="/hadith/sunan-nasai/1">
          <Card>
          <div className={Styles.engar}>
              <h2>Sunan an-Nasa'ee</h2>
              <h2>سنن النسائي</h2>
            </div>
          </Card>
        </Link>

        <Link to="/hadith/ibn-e-majah/1">
          <Card>
          <div className={Styles.engar}>
              <h2>Sunan ibn Majah</h2>
              <h2>سنن ابن ماجه</h2>
            </div>
          </Card>
        </Link>
      </section>
    </>
  );
}

export default Collections;
