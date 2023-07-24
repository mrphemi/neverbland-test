import { ShowSchema, Show } from "@/types";

import ShowHeader from "@/components/ShowHeader";
import ShowInfo from "@/components/ShowInfoList";
import Cast from "@/components/Cast";

const getShow = async (showId: number) => {
    const res = await fetch(
        `https://api.tvmaze.com/shows/${showId}?embed=cast`
    );
    const resJson = await res.json();
    const show = ShowSchema.parse(resJson);
    return show;
};

export default async function ShowPage({
    params,
}: {
    params: { showId: number };
}) {
    const show: Show = await getShow(params.showId);
    const cast = show._embedded?.cast.slice(0, 5);
    return (
        <>
            <ShowHeader {...show} />
            <main className="my-5 md:my-10 lg:mt-40 lg:mb-20">
                <div className="container grid lg:grid-cols-2 gap-10">
                    {/* Info */}
                    <ShowInfo {...show} />
                    {/* Cast */}
                    {cast && cast.length > 0 && <Cast cast={cast} />}
                </div>
            </main>
        </>
    );
}
