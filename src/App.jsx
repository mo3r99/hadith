import "./App.css";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
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
            What has been narrated regarding the prohibition of delving into
            al-Qadr
          </span>
        </div>
        <div>
          <p className="arabic">
            حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُعَاوِيَةَ الْجُمَحِيُّ
            الْبَصْرِيُّ، قَالَ حَدَّثَنَا صَالِحٌ الْمُرِّيُّ، عَنْ هِشَامِ
            بْنِ حَسَّانَ، عَنْ مُحَمَّدِ بْنِ سِيرِينَ، عَنْ أَبِي هُرَيْرَةَ،
            قَالَ خَرَجَ عَلَيْنَا رَسُولُ اللَّهِ صلى الله عليه وسلم وَنَحْنُ
            نَتَنَازَعُ فِي الْقَدَرِ فَغَضِبَ حَتَّى احْمَرَّ وَجْهُهُ حَتَّى
            كَأَنَّمَا فُقِئَ فِي وَجْنَتَيْهِ الرُّمَّانُ فَقَالَ ‏ "‏
            أَبِهَذَا أُمِرْتُمْ أَمْ بِهَذَا أُرْسِلْتُ إِلَيْكُمْ إِنَّمَا
            هَلَكَ مَنْ كَانَ قَبْلَكُمْ حِينَ تَنَازَعُوا فِي هَذَا الأَمْرِ
            عَزَمْتُ عَلَيْكُمْ أَلاَّ تَتَنَازَعُوا فِيهِ ‏"‏ ‏.‏ قَالَ أَبُو
            عِيسَى وَفِي الْبَابِ عَنْ عُمَرَ وَعَائِشَةَ وَأَنَسٍ ‏.‏ وَهَذَا
            حَدِيثٌ غَرِيبٌ لاَ نَعْرِفُهُ إِلاَّ مِنْ هَذَا الْوَجْهِ مِنْ
            حَدِيثِ صَالِحٍ الْمُرِّيِّ ‏.‏ وَصَالِحٌ الْمُرِّيُّ لَهُ غَرَائِبُ
            يَنْفَرِدُ بِهَا لاَ يُتَابَعُ عَلَيْهَا ‏.‏
          </p>
        </div>
        <div>
          <p>
            "The Messenger of Allah(s.a.w) came out to us while we were
            discussing about Al-Qadar. He became angry such that his face became
            red, as if a pomegranate was bursting through his cheeks. He said:
            'Is this what I ordered you to do?' - or: 'Is this what I have been
            sent to you with? The people before you were only ruined when they
            differed about this matter. I order you [I order you] to not debate
            about it.'".
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section className="commentary">
        <p>Commentary</p>
        <h3>The chapters of al-Qadr</h3>
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
        </p>
      </section>
      <footer>
        <a href="#">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>{" "}
          Go back
        </a>
        <p>
          © 2023 Bukhari Class Darul Uloom al Arabiya al Islamiya, all rights
          reserved{" "}
        </p>
      </footer>
    </>
  );
}

export default App;
