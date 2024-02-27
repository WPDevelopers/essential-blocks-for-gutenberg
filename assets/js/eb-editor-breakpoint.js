
//set breakpoint css variable to root
const breakpoints = EssentialBlocksLocalize.responsiveBreakpoints
const root = document.documentElement;
(Object.keys(breakpoints).length > 0) && Object.keys(breakpoints).map((item) => {
    root.style.setProperty(`--eb-${item}-breakpoint`, `${breakpoints[item]}px`);
})
