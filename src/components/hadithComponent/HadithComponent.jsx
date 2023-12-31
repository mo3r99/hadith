import React, { useContext, useEffect, useState } from "react";
import { HadithContext } from "../../store/AppContext";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HadithComponent.scss";
import Preloader from "../preloader/Preloader";

const HadithComponent = () => {
  const params = useParams();
  let book = params.book;
  let hadithId = params.id;

  useEffect(() => {
    book = params.book;
    hadithId = params.id
  }, [params])

  var hadithCtx = useContext(HadithContext);
  useEffect(() => {
    hadithCtx.updateHadith(book, hadithId);
  }, [params]);

  const getHadith = async () => {
    try {
      const response = await axios.get(
        `https://www.hadithapi.com/api/hadiths?book=${book}&hadithNumber=${hadithId}&apiKey=$2y$10$uNTrissszRc2NBpFeFjfVusflO10VfOEQaZ30PAsVSkl70KhQkLe`,
        {
          params: {
            book: book,
            hadithNumber: hadithId,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const {
    data: hadithData,
    isLoading,
    isError,
  } = useQuery("hadiths", getHadith);

  const prevHandler = () => {
    const {
      data: hadithData,
      isLoading,
      isError,
    } = useQuery("hadiths", getHadith);
  }

  const nextHandler = () => {
    const {
      data: hadithData,
      isLoading,
      isError,
    } = useQuery("hadiths", getHadith);
  }

  if (isLoading) return <Preloader />;
  if (isError) return <div className="preload">Error loading data</div>;

  return (
    <div className="hadithComponent">
      <div className="heading">
        <div className="arrow">
          <Link to="/collections" className="link">
            <span className="material-symbols-outlined back_home">
              arrow_back_ios_new
            </span>
          </Link>
        </div>
        <div className="book">
          <h2>{hadithData?.hadiths.data[0].book.bookName}</h2>
        </div>
      </div>
      <section className="hadith">
        <div className="chapter">
          <span>
            Chapter: {hadithData?.hadiths.data[0].chapter.chapterEnglish}
          </span>
        </div>

        <div className="textContainer">
          <div className="hadithNumber">
            <Link onClick={prevHandler} to={`/hadith/${book}/${parseInt(hadithId) - 1}`}>
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>

            <h2>{hadithData?.hadiths.data[0].hadithNumber}</h2>

            <Link onClick={nextHandler} to={`/hadith/${book}/${parseInt(hadithId) + 1}`}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="english">
            <p className="arabic">{hadithData?.hadiths.data[0].hadithArabic}</p>
            <p>{hadithData?.hadiths.data[0].hadithEnglish}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HadithComponent;
