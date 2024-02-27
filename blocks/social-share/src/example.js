import { __ } from "@wordpress/i18n";
const example = {
    attributes: {
        // endTimeStamp: Date.now() + 462878000,
        socialDetails: [
            {
                icon: "fab fa-facebook-f",
                iconText: __("Facebook", "essential-blocks"),
                isExpanded: false,
            },
            {
                icon: "fab fa-x-twitter",
                iconText: __("Twitter", "essential-blocks"),
                isExpanded: false,
            },
            {
                icon: "fab fa-linkedin-in",
                iconText: __("Linkedin", "essential-blocks"),
                isExpanded: false,
            },
        ],
        sclBdSd_Rds_Bottom: "10",
        sclBdSd_Rds_Left: "10",
        sclBdSd_Rds_Right: "10",
        sclBdSd_Rds_Top: "10",
    },
};

export default example;
