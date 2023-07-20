import { rest } from "msw";

import { Episode } from "@/types/index";

const episodes: Episode[] = [
    {
        id: 1,
        number: 1,
        show: {
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
        },
    },

    {
        id: 2,
        number: 30,
        show: {
            id: 122,
            name: "Show 122",
            summary: "lorem Ipsum",
            genres: ["Drama"],
            status: "Running",
            runtime: 60,
            officialSite: "https://www.show1.com",
            image: {
                medium: "https://www.show1.com/image.jpg",
                original: "https://www.show1.com/image.jpg",
            },
            schedule: {
                time: "20:00",
                days: ["Monday", "Tuesday"],
            },
            rating: {
                average: 6.7,
            },
            network: {
                name: "Network 1",
            },
        },
    },
];

const episodesHandler = rest.get(
    "https://api.tvmaze.com/schedule",
    (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(episodes));
    }
);

export default episodesHandler;
