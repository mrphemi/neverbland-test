import { setupServer } from "msw/node";
import { rest } from "msw";
import "whatwg-fetch";

import episodesHandler from "./episodesHandler";
import showHandler from "./showHandlers";

const server = setupServer(episodesHandler, showHandler);

export { server, rest };
