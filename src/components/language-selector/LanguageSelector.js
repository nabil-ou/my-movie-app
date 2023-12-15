"use client"

import Link from "next/link";
import {availableLocales} from "@/utils/i18n";
import styles from "./LanguageSelector.module.scss"
import {useCurrentLanguage} from "@/hooks/useCurrentLanguage";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false)
    const currentLangugae = useCurrentLanguage();

    useEffect(() => {
        setIsOpen(false)
    },[currentLangugae])
    return (
        <div className={`${styles.selector} ${isOpen ? styles.enebled : ""}`}>
            <p onClick={() => setIsOpen((currOpen) => !currOpen)}>
                {currentLangugae}{" "}
                <span>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </span>
            </p>
            <ul>
                {availableLocales
                    .filter((locale) => locale != currentLangugae)
                    .map((locale) => (
                        <li key={locale}>
                            <Link href={`/${locale}`}>{locale}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}
export default LanguageSelector
