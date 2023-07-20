import { render, screen } from "@testing-library/react";

import { Episode } from "@/types/index";

import EpisodeList from "@/components/EpisodeList";

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

describe("Test Episodes List", () => {
    it("should render text when there are no episodes", async () => {
        render(<EpisodeList episodes={[]} />);
        const text = await screen.findByText(/no episodes available/i);
        expect(text).toBeInTheDocument();
    });
});
