import Link from "next/link";

import { motion } from "framer-motion";

import { slideDown } from "@/utils/variants";

interface ShowInfoProps {
    title: string;
    value: string;
    isLinkValue?: boolean;
    link?: string;
}

const ShowInfo = ({
    title,
    value,
    isLinkValue = false,
    link,
}: ShowInfoProps) => {
    return (
        <motion.li variants={slideDown} className="flex gap-x-3">
            <span>{title}: </span>
            {!isLinkValue && <span className="text-sh-red">{value}</span>}
            {isLinkValue && link && (
                <Link
                    href={link}
                    className="text-sh-red underline underline-offset-4"
                >
                    {value}
                </Link>
            )}
        </motion.li>
    );
};

export default ShowInfo;
