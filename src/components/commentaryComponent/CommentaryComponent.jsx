import React, { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

import parse from 'html-react-parser';

import "./CommentaryComponent.scss";
import { useParams } from "react-router-dom";

const CommentaryComponent = () => {
  const [commentary, setCommentary] = useState('');

  const params = useParams();
  let book, hadith;
  
  useEffect(() => {
    book = params.book;
    hadith = parseInt(params.id);
    console.log(book, hadith)
  }, [[params]])

  const getCommentary = async () => {
    const docRef = doc(db, `${book}`, `${hadith.toString()}`);
    console.log(docRef)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data().commentary
      let html = docSnap.data().html

      setCommentary(<p>{parse(html)}</p>)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setCommentary(qadr)
    }
  };

  useEffect(() => {
    getCommentary();
  }, [params]);

  const qadr = (<><h3>The chapters of al-Qadr</h3>
  <h4>What is al-Qadr?</h4>
  <p>
    al-Qadr comes from the Arabic قدَر يقدُِر - this has many meanings,
    one of which is to make a judgement. Believing in Qadr is one of the
    most important beliefs. There are three main sects in terms of beliefs
    of Qadr:
  </p>
  <ol>
    <li>
      Qadariyyah - those that complete deny the existence of Qadr. They
      believe that Allah has no knowledge of an action until it is done,
      and that humans create their own actions.
    </li>
    <li>
      Jabariyyah - those that believe that they have no free will, and
      that everything has already been predestined, so there is no purpose
      to action.
    </li>
    <li>
      Ahlus Sunnah Wal Jama’ah - the moderate ones who are on the way of
      the messenger of Allah (SAW) and also the salaf.
    </li>
  </ol>

  <p>
    Qadr or Taqdeer is not something that is understand through logic and
    intellect, rather it is a belief that we accept through امر منقول (a
    command given to us by Allah in the Quran and Sunnah). Trying to prove
    it with intellect and logic will only cause distress and trouble. If
    someone strives to understand Taqdeer through logic, they will either
    reject it altogether or say that they have no free will, both of which
    are agains the Qur'an and Sunnah.
  </p></>)
  return (
    <div>
    <section className="commentary">
      <p>Commentary</p>
      {commentary}
    </section>
  </div>
  );
};

export default CommentaryComponent;
