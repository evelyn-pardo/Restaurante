import React from "react";
import { useState } from "react";
import styles from '../../app/styles/card.module.css';
export function Card( {cardTitle, cardSubTitle, cardDescription, cardMoreInfo, cardBtnTxt} ){
    const [showMore, setShowMore] = useState(false); 

    return (
        <div className={styles.descriptionContainer}>
          <h3 >{cardTitle}</h3>
          <h1>{cardSubTitle}</h1>
          <p>
            {cardDescription}
          </p>
          <p>
            {cardDescription}
          </p>
            <a href="#" 
              className={styles.readMoreLink} 
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Leer menos' : 'Leer más'}
            </a>
            {showMore && (
              <div className={styles.additionalInfo}>
                <p>
                  {cardMoreInfo}
                </p>
                <p>
                  {cardMoreInfo}
                </p>
              </div>
            )}
          <div className={styles.reserveBtn}>
            <a className={styles.textob} href="#" >{cardBtnTxt} </a> {/* Botón de reservar */}
          </div>
        </div>
    )
}