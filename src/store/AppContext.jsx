import { createContext, useState, useEffect } from "react";

export const HadithContext = createContext({
  bookName: "",
  hadithNo: 1,
  updateHadith: () => {},
});

export const HadithContextProvider = function ({ children }) {
  const [hadithState, setHadithState] = useState({
    bookName: "",
    hadithNo: 1,
  });

  const updateHadith = function (book, hadith) {
    setHadithState({
      bookName: book,
      hadithNo: hadith
    });
  };

  const hdthCtx = {
    bookName: hadithState.bookName,
    hadithNo: hadithState.hadithNo,
    updateHadith: updateHadith,
  };

  useEffect(() => {
    console.log(hadithState)
  }, hadithState)
  return (
    <HadithContext.Provider value={hdthCtx}>
      {children}
    </HadithContext.Provider>
  );
};
