import { setupServer } from "msw/node";
import { rest } from "msw";
import "whatwg-fetch";

import episodesHandler from "./episodesHandler";

const server = setupServer(episodesHandler);

export { server, rest };
