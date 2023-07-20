import Image from "next/image";
import Link from "next/link";

import { Episode as EpisodeType } from "@/types";
import Ratings from "./common/Ratings";

const Episode = ({
    number,
    show: { id, name, rating, image },
}: EpisodeType) => {
    const ratingScore = rating.average ? Math.floor(rating.average / 2) : 0;
    return (
        <Link href={`/${id}`} className="block relative">
            <Image
                src={image?.medium || "/images/movie-poster-placeholder.png"}
                alt={name}
                width={210}
                height={295}
                className="w-full h-full aspect-[210/295]"
                placeholder="blur"
                blurDataURL="/images/movie-poster-placeholder.png"
            />

            <Ratings rating={ratingScore} />
            {number && (
                <p className="text-xs text-center font-medium bg-sh-red inline-flex justify-center items-center rounded-full absolute top-2 right-3 w-12 h-12 px-.5">
                    Ep. {number}
                </p>
            )}
            <p className="mt-4  text-lg font-medium">{name}</p>
        </Link>
    );
};

export default Episode;
