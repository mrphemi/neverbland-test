"use client";

import { motion } from "framer-motion";

import { slideDown } from "@/utils/variants";

import Logo from "./common/Logo";

export const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const HomeHeader = () => {
    return (
        <header className="bg-banner bg-no-repeat bg-cover pt-5 pb-10 md:pt-10 md:pb-0 w-full">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="container space-y-8 md:pb-48"
            >
                <motion.div variants={slideDown}>
                    <Logo />
                </motion.div>
                <motion.p variants={slideDown} className="w-4/5 max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias optio eos id repellendus quam eveniet provident dolor
                    asperiores aliquam rerum!
                </motion.p>
            </motion.div>
        </header>
    );
};

export default HomeHeader;
