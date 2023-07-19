"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Show } from "@/types";

import Logo from "./common/Logo";
import Ratings from "./common/Ratings";

import { slideDown, slideInLeft } from "@/utils/variants";

export const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delay: 0.2,
        },
    },
};

const ShowHeader = ({ rating, image, name, summary }: Show) => {
    const ratingScore = rating.average && Math.floor(rating.average / 2);

    return (
        <header className="py-10 lg:pb-0 bg-sh-blue-secondary md:bg-banner bg-no-repeat bg-cover w-full">
            <div className="container">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideDown}
                >
                    <Logo />
                </motion.div>

                <div className="mt-10 flex flex-col md:flex-row gap-5 md:gap-x-8 lg:gap-x-12 relative lg:top-10  overflow-hidden">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideInLeft}
                        className="w-full sm:max-w-[300px] relative aspect-[2/3]"
                    >
                        <Image
                            src={
                                image?.original ||
                                "/images/movie-poster-placeholder.png"
                            }
                            alt={name}
                            fill
                            priority
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL="/images/movie-poster-placeholder.png"
                            sizes="(max-width: 639px) 90vw, (min-width: 640px) 300px"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={container}
                        className="space-y-3 lg:pb-10 h-fit"
                    >
                        {rating.average && (
                            <motion.div variants={slideDown}>
                                <Ratings rating={ratingScore} />
                            </motion.div>
                        )}

                        <motion.h1 variants={slideDown} className="text-4xl">
                            {name}
                        </motion.h1>

                        {summary && (
                            <motion.div
                                variants={slideDown}
                                className="md:max-w-2xl"
                                dangerouslySetInnerHTML={{
                                    __html: summary,
                                }}
                            ></motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default ShowHeader;
