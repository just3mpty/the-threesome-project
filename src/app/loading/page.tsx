"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./page.module.scss";

const LoadingPage: React.FC = () => {
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            repeatDelay: 0.5,
        });

        tl.to(circleRef.current, {
            scale: 5,
            rotate: 360,
            duration: 1.5,
            ease: "power1.inOut",
        }).to(circleRef.current, {
            scale: 1,
            rotate: 0,
            duration: 1.5,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <div className={styles.loadingContainer}>
            <div ref={circleRef} className={styles.circle} />
        </div>
    );
};

export default LoadingPage;
