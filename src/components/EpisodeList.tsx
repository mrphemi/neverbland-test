"use client";

import { motion } from "framer-motion";

import { Episode as EpisodeType } from "@/types";

import Episode from "./Episode";

import { slideDown, slideUp } from "@/utils/variants";

export const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delay: 0.3,
        },
    },
};

interface EpisodeListProps {
    episodes: EpisodeType[];
}

const EpisodeList = ({ episodes }: EpisodeListProps) => {
    return (
        <motion.div variants={container} initial="hidden" animate="visible">
            <motion.h2 variants={slideDown} className="text-2xl">
                Last Added Shows
            </motion.h2>
            <motion.ul
                variants={slideUp}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-10 md:gap-x-5 mt-5"
            >
                {episodes.map((episode) => (
                    <li key={episode.id}>
                        <Episode {...episode} />
                    </li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default EpisodeList;
