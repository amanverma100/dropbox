'use client'
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import * as motion from "motion/react-client"
import { useState } from "react";

export default function BrandShowcase() {

    const [centerBoxProps, setCenterBoxProps] = useState({
        text: "Our comprehensive Brand Guidelines shape every aspect of our visual identity and communication.",
        bg: "#fff",
        colour: "#2563eb",
        transitionDuration: "0.4s",
        width: "calc(-2px + min(800px, -64px + min(100vw, 100vh)))"
    })

    const { scrollYProgress } = useScroll();
    const scrollProgress = scrollYProgress.get();

    const centerBoxWidth = useTransform(scrollYProgress, [0.5, 1], [Math.min(500, Math.min(global?.window?.innerHeight, global?.window?.innerWidth) - 64), global?.window?.innerWidth > 991 ? 89 : 80])

    const card1XProp = useTransform(scrollYProgress, [0, 1], [-2000, 0])
    const card1YProp = useTransform(scrollYProgress, [0, 1], [-2000, 0])

    const card2XProp = useTransform(scrollYProgress, [0, 1], [100, 0])
    const card2YProp = useTransform(scrollYProgress, [0, 1], [-1200, 0])

    const card3XProp = useTransform(scrollYProgress, [0, 1], [1200, 0])
    const card3YProp = useTransform(scrollYProgress, [0, 1], [10, 0])

    const card4XProp = useTransform(scrollYProgress, [0, 1], [2000, 0])
    const card4YProp = useTransform(scrollYProgress, [0, 1], [-2000, 0])

    const card5XProp = useTransform(scrollYProgress, [0, 1], [-2000, 0])
    const card5YProp = useTransform(scrollYProgress, [0, 1], [2000, 0])

    const card6XProp = useTransform(scrollYProgress, [0, 1], [-1200, 0])
    const card6YProp = useTransform(scrollYProgress, [0, 1], [100, 0])

    const card7XProp = useTransform(scrollYProgress, [0, 1], [100, 0])
    const card7YProp = useTransform(scrollYProgress, [0, 1], [1200, 0])

    const card8XProp = useTransform(scrollYProgress, [0, 1], [2000, 0])
    const card8YProp = useTransform(scrollYProgress, [0, 1], [2000, 0])

    const cardsScale = useTransform(scrollYProgress, [0, 1], [2, 1])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest);
        if (latest <= 0.12043718301937157) {
            setCenterBoxProps({
                text: "Our comprehensive Brand Guidelines shape every aspect of our visual identity and communication.",
                bg: "#fff",
                colour: "#2563eb",
                transitionDuration: "0.4s",
                width: "calc(-2px + min(800px, -64px + min(100vw, 100vh)))"
            })
        }
        else if (latest <= 0.5) {
            setCenterBoxProps({
                text: "From visual elements to messaging strategy, this unified system ensures consistency across all touchpoints and platforms.",
                bg: "#2563eb",
                colour: "#fff",
                transitionDuration: "0.4s",
                width: "min(500px, min(100vw, 100vh) - 64px)"
            })
        }
        else {
            setCenterBoxProps({
                text: "",
                bg: "#2563eb",
                colour: "#fff",
                transitionDuration: "0s",
                width: centerBoxWidth.get() + "px"
            })
            console.log(centerBoxWidth.get() + "px");

        }
    })

    return (
        <main className="main">
            <section className="center-wrap">
                <motion.div
                    className={`center phase-${scrollProgress <= 0.1204 ? "one" : scrollProgress <= 0.5 ? "two" : "three"}`}
                    style={{
                        background: centerBoxProps.bg,
                        color: centerBoxProps.colour,
                        transitionDuration: centerBoxProps.transitionDuration,
                        height: centerBoxProps.width,
                        width: centerBoxProps.width,
                    }}
                >
                    <div className="center-text-cont">
                        <motion.p
                            className="center-text-one"
                            style={{
                                opacity: scrollProgress >= 0.5 ? 0 : scrollProgress <= 0.1204 ? 1 : 0,
                                transitionDuration: centerBoxProps.transitionDuration
                            }}
                        >
                            Our comprehensive Brand Guidelines shape every aspect of our visual identity and communication.
                        </motion.p>
                        <motion.p
                            className="center-text-two"
                            style={{
                                opacity: scrollProgress <= 0.5 && scrollProgress >= 0.1204 ? 1 : 0,
                                transitionDuration: centerBoxProps.transitionDuration
                            }}
                        >
                            From visual elements to messaging strategy, this unified system ensures consistency across all touchpoints and platforms.
                        </motion.p>
                        <div className="center-logo">
                            {/* <svg width="60px" height="60px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <g fill={centerBoxProps.colour}>
                                    <circle cx="50" cy="30" r="8" />
                                    <rect x="35" y="45" width="30" height="4" rx="2" />
                                    <rect x="30" y="55" width="40" height="4" rx="2" />
                                    <rect x="25" y="65" width="50" height="4" rx="2" />
                                    <rect x="35" y="75" width="30" height="4" rx="2" />
                                </g>
                            </svg> */}
                            <svg width="60px" height="60px" viewBox="0 -19 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <g fill={centerBoxProps.colour}>
                                    <polygon points="63.9945638 0 0 40.7712563 63.9945638 81.5425125 128 40.7712563">
                                    </polygon>
                                    <polygon points="192.000442 0 128 40.7750015 192.000442 81.5500031 256.000885 40.7750015">
                                    </polygon>
                                    <polygon points="0 122.321259 63.9945638 163.092516 128 122.321259 63.9945638 81.5500031">
                                    </polygon>
                                    <polygon points="192 81.5500031 128 122.324723 192 163.099442 256 122.324723">
                                    </polygon>
                                    <polygon points="64 176.771256 128.005436 217.542513 192 176.771256 128.005436 136">
                                    </polygon>
                                </g>
                            </svg>

                        </div>
                    </div>
                </motion.div>
            </section>
            <section className={`cards-cont ${card1XProp.get() == 0 ? "done" : ""}`}>
                <motion.div style={{ transform: `translateX(${card1XProp.get()}px) translateY(${card1YProp.get()}px) scale(${cardsScale.get()})` }}>Foundation</motion.div>
                <motion.div style={{ transform: `translateX(${card2XProp.get()}px) translateY(${card2YProp.get()}px) scale(${cardsScale.get()})` }}>Voice & Tone</motion.div>
                <motion.div style={{ transform: `translateX(${card3XProp.get()}px) translateY(${card3YProp.get()}px) scale(${cardsScale.get()})` }}>Identity</motion.div>
                <motion.div style={{ transform: `translateX(${card4XProp.get()}px) translateY(${card4YProp.get()}px) scale(${cardsScale.get()})` }}>Typography</motion.div>
                <motion.div style={{ transform: `translateX(${card5XProp.get()}px) translateY(${card5YProp.get()}px) scale(${cardsScale.get()})` }}>Graphics</motion.div>
                <motion.div style={{ transform: `translateX(${card6XProp.get()}px) translateY(${card6YProp.get()}px) scale(${cardsScale.get()})` }}>Palette</motion.div>
                <motion.div style={{ transform: `translateX(${card7XProp.get()}px) translateY(${card7YProp.get()}px) scale(${cardsScale.get()})` }}>Visuals</motion.div>
                <motion.div style={{ transform: `translateX(${card8XProp.get()}px) translateY(${card8YProp.get()}px) scale(${cardsScale.get()})` }}>Animation</motion.div>
            </section>
        </main>
    );
}