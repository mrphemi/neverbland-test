import { render, screen, within } from "@testing-library/react";

import Home from "@/app/page";

import { server } from "@/__mocks__/server";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
    server.resetHandlers();
});

describe("render fetched episodes", () => {
    it("should render fetched episodes", async () => {
        render(await Home());

        const list = await screen.findByRole("list");
        expect(list).toBeInTheDocument();
        const { findAllByRole } = within(list);
        const items = await findAllByRole("listitem");
        expect(items).toHaveLength(items.length);
    });
});
