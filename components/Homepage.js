import React from 'react';
import LoadPage from './LoadPage';
import {  useSelector } from 'react-redux';
import languages from './translator';

const Homepage = () => {
 
  const { language: selectedLanguage } = useSelector(state => state.language);


  let loadPage = languages.map(selected_lang =>{ 
      if(selected_lang.language===selectedLanguage.lang_code) {
        return <LoadPage language={selected_lang}/> 
      } 
    })
  

  return (
   <>
   {loadPage}
    </>
  );
}

export default Homepage;
