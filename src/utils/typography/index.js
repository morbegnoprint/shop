import Typography from "typography";
import { theme } from "../../styles/theme";

const typography = new Typography({
    baseFontSize: `${theme.spacing.unit * 4}px`,
    baseLineHeight: `${theme.spacing.unit * 5}px`,
    headerFontFamily: ["Montserrat", "sans-serif"],
    bodyFontFamily: ["Montserrat", "sans-serif"]
});

export default typography;
