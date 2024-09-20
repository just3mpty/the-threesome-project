"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import styles from "./animatedText.module.scss";

type AnimatedTextProps = {
    textToAnimate: string;
    delay?: number;
};

const AnimatedText = ({ textToAnimate, delay }: AnimatedTextProps) => {
    const textRef = useRef<HTMLDivElement>(null);

    // Fonction pour découper le texte en lettres
    const splitTextToSpans = (text: string) => {
        return text.split("").map((char, index) => (
            <span key={index} className={styles.char}>
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    useGSAP(() => {
        const chars = textRef.current?.querySelectorAll(`.${styles.char}`);

        if (chars) {
            gsap.from(chars, {
                opacity: 0,
                stagger: 0.08,
                ease: "power1.out",
                duration: 0.05,
                delay: delay,
            });
        }
    }, []);

    return (
        <div ref={textRef} className={styles.animatedText}>
            {splitTextToSpans(textToAnimate)}
        </div>
    );
};

export default AnimatedText;
