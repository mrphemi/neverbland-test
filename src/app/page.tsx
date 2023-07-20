import { z } from "zod";

import { EpisodeSchema, Episode as EpisodeType } from "@/types";

import HomeHeader from "@/components/HomeHeader";

import EpisodeList from "@/components/EpisodeList";

const getEpisodes = async () => {
    const res = await fetch("https://api.tvmaze.com/schedule");
    const resJson = await res.json();
    const shows = z.array(EpisodeSchema).parse(resJson);
    return shows;
};

export default async function Home() {
    const episodes: EpisodeType[] = await getEpisodes();
    return (
        <>
            <HomeHeader />
            <main className="container">
                <EpisodeList episodes={episodes} />
            </main>
        </>
    );
}
