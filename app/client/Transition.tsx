"use client";

import {motion} from "framer-motion";

export default function Transition({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            animate={{ x: 100 }}
            transition={{ type: "spring" }}
            // initial={{y: 20, opacity: 0}}
            // animate={{y: 0, opacity: 10}}
            // transition={{ease: "easeInOut", duration: 0.75}}
        >
            {children}
        </motion.div>
        // <motion.div
        //     animate={{
        //         scale: [1, 1.5, 1.5, 1, 1],
        //         rotate: [0, 0, 180, 180, 0],
        //         borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        //     }}
        //     transition={{
        //         duration: 2,
        //         ease: "easeInOut",
        //         times: [0, 0.2, 0.5, 0.8, 1],
        //         repeat: Infinity,
        //         repeatDelay: 1
        //     }}
        // >
        //     {children}
        // </motion.div>
    );
}