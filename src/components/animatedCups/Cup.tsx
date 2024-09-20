"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./animatedCup.module.scss";
import { CupProps } from "@/types/types";

const Cup: React.FC<CupProps> = ({
    result,
    isGameActive,
    onCupClick,
    index,
    cupRefs,
}) => {
    const gobletRef = useRef<HTMLDivElement>(null);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    useEffect(() => {
        if (gobletRef.current) {
            cupRefs.current![index] = gobletRef.current;
        }
    }, [gobletRef, index, cupRefs]);

    useGSAP(() => {
        if (!isClicked && isGameActive) {
            gsap.to(gobletRef.current, {
                rotate: 2,
                repeat: -1,
                yoyo: true,
                ease: "elastic",
                duration: 0.8,
                repeatDelay: 0.02,
            });
        }
    }, [isClicked, isGameActive]);

    const handleClick = () => {
        if (isGameActive && !isClicked) {
            setIsClicked(true);
            onCupClick();
            gsap.to(gobletRef.current, {
                y: -30,
                duration: 0.05,
                ease: "bounce",
            });
        }
    };

    return (
        <div
            className={`${styles.cupContainer} ${
                isClicked ? styles.lifted : ""
            }`}>
            <div ref={gobletRef} className={styles.cup} onClick={handleClick}>
                <Image src="/assets/img/goblet.png" alt="Cup image" fill />
            </div>
            <div className={styles.resultText}>{result}</div>
        </div>
    );
};

export default Cup;
