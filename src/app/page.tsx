import AnimatedText from "@/components/animatedText/AnimatedText";
import styles from "./page.module.scss";
import Image from "next/image";
import CupGame from "@/components/animatedCups/CupGame";

const vectors = [
    {
        path: "/assets/vectors/vector111.svg",
        size: 75,
    },
    {
        path: "/assets/vectors/vector112.svg",
        size: 75,
    },
    {
        path: "/assets/vectors/vector113.svg",
        size: 75,
    },
    {
        path: "/assets/vectors/vector114.svg",
        size: 75,
    },
];

export default function Home() {
    return (
        <main className={styles.main}>
            <Image
                src={"/assets/img/smiley.png"}
                alt="Smiley image"
                width={115}
                height={115}
            />
            <div className={styles.title}>
                <Image
                    className={styles.ponctuation}
                    src={"/assets/vectors/ponctuation.svg"}
                    alt="Smiley image"
                    width={215}
                    height={215}
                />
                <div className={styles.vectorsContainer}>
                    {vectors.map((vec, idx) => (
                        <Image
                            className={styles.text}
                            key={idx}
                            src={vec.path}
                            alt="Vector letter"
                            width={vec.size}
                            height={vec.size}
                        />
                    ))}
                </div>

                <h1>Prêts pour un plan à 3</h1>
                <p>vous nous et le succès</p>
            </div>

            {/* AFFICHAGES DES CUPS */}
            <CupGame results={["non", "oui"]} />

            {/* AFFICHAGE DES TEXTES ANIMES */}
            <AnimatedText textToAnimate="AHHH ATTEND" />
            <AnimatedText textToAnimate="ARRETE DE SCROLL" delay={0.8} />
            <AnimatedText
                textToAnimate="ON VEUT TE PROPOSER UN JEU"
                delay={1.6}
            />
        </main>
    );
}
