import { wrapWithRedux } from "./src/gatsby/redux-provider";

export const wrapRootElement = ({ element }) => wrapWithRedux(element, false);
