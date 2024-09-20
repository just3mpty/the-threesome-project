"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Cup from "./Cup";
import styles from "./animatedCup.module.scss";
import useDimension from "@/hooks/useDimensions";

type CupGameProps = {
    results: string[];
};

const CupGame: React.FC<CupGameProps> = ({ results }) => {
    const cupRefs = useRef<HTMLDivElement[]>([]);
    const [isGameActive, setIsGameActive] = React.useState(true);
    const { width } = useDimension();

    // MELANGE DES CUPS
    useEffect(() => {
        const mixCups = () => {
            const timeline = gsap.timeline({
                repeat: 2,
                delay: 1.6,
                onComplete: () => {
                    setIsGameActive(true);
                },
            });

            const cup1 = cupRefs.current[0];
            const cup2 = cupRefs.current[1];

            timeline.to(cup1, {
                x: width > 450 ? 300 : 200,
                duration: 0.3,
            });

            timeline.to(
                cup2,
                {
                    x: width > 450 ? -300 : -200,
                    duration: 0.3,
                },
                0
            );

            // CUPS RETOUR A POS. INIT.
            timeline.to(
                cup1,
                {
                    x: 0,
                    duration: 0.3,
                },
                0.6
            );
            timeline.to(
                cup2,
                {
                    x: 0,
                    duration: 0.3,
                },
                0.6
            );
        };

        mixCups();
    }, [width]);

    const handleCupClick = () => {
        setIsGameActive(false);
        gsap.killTweensOf(cupRefs.current);
    };

    return (
        <div className={styles.animatedCupsContainer}>
            {results.map((result, index) => (
                <Cup
                    key={index}
                    result={result}
                    isGameActive={isGameActive}
                    onCupClick={handleCupClick}
                    index={index}
                    cupRefs={cupRefs}
                />
            ))}
        </div>
    );
};

export default CupGame;
