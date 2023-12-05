import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const HadithComponent = () => {
    const params = useParams();
    const book = params.book;
    const hadithId = params.id;

    // const VITE_API_KEY = process.env.REACT_APP_HADITH_API_KEY;

    const getHadith = async () => {
        try {
            const response = await axios.get(
                `https://www.hadithapi.com/public/api/hadiths?apiKey=$2y$10$uNTrissszRc2NBpFeFjfVusflO10VfOEQaZ30PAsVSkl70KhQkLe`,
                {
                    params: {
                        book: book,
                        id: hadithId,
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

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    console.log();

    return (
        <div className="hadithComponent">
            <header>
                <h2>
                    <span className="material-symbols-outlined back_home">
                        arrow_back_ios_new
                    </span>
                    {hadithData?.hadiths.data[0].book.bookName}
                </h2>
            </header>
            <section className="hadith">
                <div>
                    <span>
                        {hadithData?.hadiths.data[0].chapter.chapterEnglish}
                    </span>
                    <span> • </span>
                    <span>{}</span>
                </div>
                <div>
                    <p className="arabic">
                        {hadithData?.hadiths.data[0].hadithArabic}
                    </p>
                </div>
                <div>
                    <p>{hadithData?.hadiths.data[0].hadithEnglish}</p>
                </div>
            </section>
        </div>
    );
};

export default HadithComponent;
