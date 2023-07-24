import { render, screen } from "@testing-library/react";

import ShowPage from "@/app/[showId]/page";

import { server } from "@/__mocks__/server";

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
});
afterEach(() => {
    server.resetHandlers();
});

describe("Show Page", () => {
    it("should render single show", async () => {
        render(
            await ShowPage({
                params: { showId: 1 },
            })
        );

        const title = await screen.findByRole("heading", { level: 1 });
        expect(title).toHaveTextContent("Show 1");
    });
});
