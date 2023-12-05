import React from "react";
import "./SingleHadithPage.scss";
import HadithComponent from "../../components/hadithComponent/HadithComponent";
import CommentaryComponent from "../../components/commentaryComponent/CommentaryComponent";

const SingleHadith = () => {
    return (
        <div className="singleHadith">
            <HadithComponent />

            <div className="divider"></div>

            <CommentaryComponent />
        </div>
    );
};

export default SingleHadith;
