import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Background() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0">
            {/* Base black background */}
            <div className="absolute inset-0 bg-black" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Mouse following glow */}
            <motion.div
                className="fixed w-[400px] h-[400px] bg-[#ffffff13] rounded-full blur-3xl"
                animate={{
                    x: mousePosition.x - 150,
                    y: mousePosition.y - 150,
                }}
                transition={{
                    type: "tween",
                    duration: 0.1,
                    ease: "linear"
                }}
            />

            {/* Animated squares */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {[...Array(64)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="relative border border-white/5"
                        animate={{
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>
    );
}

export default Background; 