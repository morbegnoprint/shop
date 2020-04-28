import CMS from "netlify-cms-core";
import { it } from "netlify-cms-locales";
import { FullRelationControl } from "./widgets/full-relation";

CMS.registerLocale("it", it);
CMS.registerWidget("full-relation", FullRelationControl);
