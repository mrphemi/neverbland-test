"use client";

import { motion } from "framer-motion";

import { Show } from "@/types";

import ShowInfo from "./ShowInfo";

import { convertMinsToHrsMins } from "@/utils";
import { slideDown } from "@/utils/variants";

export const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const ShowInfoList = ({
    network,
    schedule,
    runtime,
    genres,
    status,
    officialSite,
}: Show) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            <motion.h2 variants={slideDown} className="text-2xl">
                Show Info.
            </motion.h2>
            <motion.ul
                variants={container}
                className="space-y-5 mt-5 md:mt-10 text-sm md:text-base"
            >
                {network && (
                    <ShowInfo
                        title="Schedule"
                        value={network.name}
                        isLinkValue
                        link={officialSite ? officialSite : "#"}
                    />
                )}

                {schedule.days.length > 0 && (
                    <ShowInfo
                        title="Schedule"
                        value={schedule.days.join(", ")}
                    />
                )}

                <ShowInfo title="Time" value={schedule.time} />

                {runtime && (
                    <ShowInfo
                        title="Runs for"
                        value={convertMinsToHrsMins(runtime)}
                    />
                )}

                <ShowInfo title="Status" value={status} />

                {genres.length > 0 && (
                    <ShowInfo title="Genres" value={genres.join(", ")} />
                )}
            </motion.ul>
        </motion.div>
    );
};

export default ShowInfoList;
