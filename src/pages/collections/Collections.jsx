import React from "react";
import Navbar from "../../components/navbar/Navbar";

import Styles from "./Collections.module.scss";
import Card from "../../components/ui/card/Card";

function Collections() {
  return (
    <>
      <header>
        <h3>Collections</h3>
      </header>
      <section className={Styles.collections}>
        <Card>
          <h2>Sahih Bukhari</h2>
        </Card>
      </section>
    </>
  );
}

export default Collections;
