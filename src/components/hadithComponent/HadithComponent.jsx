import React from "react";

const HadithComponent = ({ book, chapter, number }) => {
    return (
        <div className="hadithComponent">
            <header>
                <h2>
                    {" "}
                    <span className="material-symbols-outlined back_home">
                        arrow_back_ios_new
                    </span>
                    Jami' al-Tirmdhi
                </h2>
            </header>
            <section className="hadith">
                <div>
                    <span>Chapters of al-Qadr</span>
                    <span> • </span>
                    <span>
                        What has been narrated regarding the prohibition of
                        delving into al-Qadr
                    </span>
                </div>
                <div>
                    <p className="arabic">
                        حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُعَاوِيَةَ الْجُمَحِيُّ
                        الْبَصْرِيُّ، قَالَ حَدَّثَنَا صَالِحٌ الْمُرِّيُّ، عَنْ
                        هِشَامِ بْنِ حَسَّانَ، عَنْ مُحَمَّدِ بْنِ سِيرِينَ،
                        عَنْ أَبِي هُرَيْرَةَ، قَالَ خَرَجَ عَلَيْنَا رَسُولُ
                        اللَّهِ صلى الله عليه وسلم وَنَحْنُ نَتَنَازَعُ فِي
                        الْقَدَرِ فَغَضِبَ حَتَّى احْمَرَّ وَجْهُهُ حَتَّى
                        كَأَنَّمَا فُقِئَ فِي وَجْنَتَيْهِ الرُّمَّانُ فَقَالَ ‏
                        "‏ أَبِهَذَا أُمِرْتُمْ أَمْ بِهَذَا أُرْسِلْتُ
                        إِلَيْكُمْ إِنَّمَا هَلَكَ مَنْ كَانَ قَبْلَكُمْ حِينَ
                        تَنَازَعُوا فِي هَذَا الأَمْرِ عَزَمْتُ عَلَيْكُمْ
                        أَلاَّ تَتَنَازَعُوا فِيهِ ‏"‏ ‏.‏ قَالَ أَبُو عِيسَى
                        وَفِي الْبَابِ عَنْ عُمَرَ وَعَائِشَةَ وَأَنَسٍ ‏.‏
                        وَهَذَا حَدِيثٌ غَرِيبٌ لاَ نَعْرِفُهُ إِلاَّ مِنْ هَذَا
                        الْوَجْهِ مِنْ حَدِيثِ صَالِحٍ الْمُرِّيِّ ‏.‏ وَصَالِحٌ
                        الْمُرِّيُّ لَهُ غَرَائِبُ يَنْفَرِدُ بِهَا لاَ
                        يُتَابَعُ عَلَيْهَا ‏.‏
                    </p>
                </div>
                <div>
                    <p>
                        "The Messenger of Allah(s.a.w) came out to us while we
                        were discussing about Al-Qadar. He became angry such
                        that his face became red, as if a pomegranate was
                        bursting through his cheeks. He said: 'Is this what I
                        ordered you to do?' - or: 'Is this what I have been sent
                        to you with? The people before you were only ruined when
                        they differed about this matter. I order you [I order
                        you] to not debate about it.'".
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HadithComponent;
