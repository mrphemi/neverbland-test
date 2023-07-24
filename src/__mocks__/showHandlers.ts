import { rest } from "msw";

import { Show } from "@/types/index";

const show: Show = {
    id: 1,
    name: "Show 1",
    summary: "Summary 1",
    genres: ["Drama", "Action", "Thriller"],
    status: "Running",
    runtime: 60,
    officialSite: "https://www.show1.com",
    image: {
        medium: "https://www.show1.com/image.jpg",
        original: "https://www.show1.com/image.jpg",
    },
    schedule: {
        time: "20:00",
        days: ["Monday"],
    },
    rating: {
        average: 8.1,
    },
    network: {
        name: "Network 1",
    },
    _embedded: {
        cast: [
            {
                person: {
                    id: 1,
                    name: "Person 1",
                    image: {
                        medium: "https://www.show1.com/image.jpg",
                        original: "https://www.show1.com/image.jpg",
                    },
                },
                character: {
                    name: "Character 1",
                },
            },
        ],
    },
};

const showHandler = rest.get(
    "https://api.tvmaze.com/shows/1",
    (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(show));
    }
);

export default showHandler;
