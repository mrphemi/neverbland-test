"use client";

import { motion } from "framer-motion";

import { Person as PersonType } from "@/types";

import Person from "./Person";
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

interface CastProps {
    cast: PersonType[];
}

const Cast = ({ cast }: CastProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            <motion.h2 variants={slideDown} className="text-2xl">
                Starring
            </motion.h2>
            <motion.ul variants={container} className="space-y-5 mt-5 md:mt-10">
                {cast.map((person) => (
                    <motion.li variants={slideDown} key={person.person.id}>
                        <Person {...person} />
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default Cast;
