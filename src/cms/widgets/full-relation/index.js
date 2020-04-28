import { FullRelationControl } from "./control";

const Widget = (opts = {}) => ({
    name: "full-relation",
    controlComponent: FullRelationControl,
    ...opts
});

export const NetlifyCmsWidgetFullRelation = {
    Widget,
    controlComponent: FullRelationControl
};
