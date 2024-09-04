import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setMarathiLang , setHindiLang , setEnglishLang} from "./redux/actions/LangAction";

export default function LanguageSelecter() {
    const currentLanguage = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const languages = [
        {
            label: "Marathi",
            value: "marathi",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 30" className="h-4 w-6 inline-block mr-2">
                    <rect width="45" height="30" fill="#FF9933" />
                    <rect y="10" width="45" height="10" fill="#FFFFFF" />
                    <rect y="20" width="45" height="10" fill="#138808" />
                    <circle cx="22.5" cy="15" r="4.5" fill="#000080" />
                    <path
                        d="M22.5,10.5 v9 M20.317,11.255 l4.365,6.49 M19.355,13.17 l6.29,3.66 M19.92,15.5 h6.96 M19.355,17.83 l6.29,-3.66 M20.317,19.745 l4.365,-6.49"
                        stroke="#000080"
                        strokeWidth="0.75"
                        fill="none"
                    />
                </svg>
            ),
        },
        {
            label: "English",
            value: "english",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="h-4 w-6 inline-block mr-2">
                    <clipPath id="t">
                        <path d="M0,0 v30 h60 v-30 z" />
                    </clipPath>
                    <g clipPath="url(#t)">
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#FFF" strokeWidth="10" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                    </g>
                </svg>
            ),
        },
        {
            label: "Korean",
            value: "korean",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="h-4 w-6 inline-block mr-2">
                    <rect width="900" height="600" fill="#FFFFFF" />
                    <circle cx="450" cy="300" r="150" fill="#C60C30" />
                    <path
                        d="M450,150 a150,150 0 0,1 0,300 a150,150 0 0,0 0,-300"
                        fill="#003478"
                    />
                    <g fill="none" stroke="#000" strokeWidth="40">
                        <path d="M200,400 h-140 M120,430 v-60 M160,430 v-60" />
                        <path d="M700,200 h140 M780,170 v60 M740,170 v60" />
                        <path d="M700,400 h140 M740,430 v-60" />
                        <path d="M200,200 h-140 M160,170 v60" />
                    </g>
                </svg>
            ),
        },
    ];

    const handleLanguageChange = async (e) => {
        e.preventDefault();
        const selectedLanguage = e.target.value;
        if (selectedLanguage === "marathi") {
            dispatch(setMarathiLang(selectedLanguage))
        }else if(selectedLanguage === "english"){
            dispatch(setEnglishLang(selectedLanguage))
        }else {
            dispatch(setHindiLang(selectedLanguage))
        }
    }

    return (
        <div style={{position: 'fixed', right: '5px',top: '10px'}} className="flex" key={currentLanguage}>
            {languages.map((language) => (
                <label key={language.value} className="inline-flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name="language"
                        value={language.value}
                        checked= {currentLanguage === language.value}
                        onChange={handleLanguageChange}
                        className="form-radio text-blue-600"
                    />
                    <span className="ml-2 flex items-center">
            {language.svg}
          </span>
                </label>
            ))}
        </div>
    );
}
