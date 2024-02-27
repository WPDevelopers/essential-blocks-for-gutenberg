export const RSVP_FORM_TEMPLATE = [
    [
        "essential-blocks/advanced-heading",
        {
            preset: "preset-2",
            align: "center",
            displaySubtitle: true,
            displaySeperator: false,

            subtitleTagName: "h3",
            subtitleText: "AUG 20, 2023",
            subtitleColor: "#000",
            subtitleFontFamily: "Abhaya Libre",
            subtitleFontSize: 60,
            subtitleFontStyle: "normal",
            subtitleFontTransform: "uppercase",
            subtitleFontWeight: "600",
            subtitleLineHeight: 1.2,
            subtitleLineHeightUnit: "em",
            subtitleMarginLeft: "0",
            subtitleMarginTop: "0",
            subtitleMarginRight: "0",
            subtitleMarginBottom: "0",

            tagName: "p",
            titleText: "Save the date and RSVP",
            titleColor: "#6b6b6b",
            titleFontFamily: "Manrope",
            titleFontTransform: "uppercase",
            titleFontSize: 15,
            titleFontStyle: "normal",
            titleFontWeight: "700",
            titleLineHeight: 1.2,
            titleLineHeightUnit: "em",
        },
    ],
    [
        "essential-blocks/form-text-field",
        {
            labelText: "Full Name",
            fieldName: "full-name",
            placeholderText: "Full Name",
        },
    ],
    [
        "essential-blocks/form-email-field",
        {
            labelText: "Email Address",
            fieldName: "email",
            isIcon: false,
            showLabel: false,
            placeholderText: "Email Address",
        },
    ],
    [
        "essential-blocks/row",
        {
            isLayoutSelected: true,
            rowWidthName: "full",
        },
        [
            [
                "essential-blocks/column",
                { cw_Range: 50 },
                [
                    [
                        "essential-blocks/form-number-field",
                        {
                            labelText: "# of Guests",
                            fieldName: "guests",
                            placeholderText: "# of Guests",
                            isIcon: false,
                            showLabel: false,
                        },
                    ],
                ],
            ],
            [
                "essential-blocks/column",
                { cw_Range: 50 },
                [
                    [
                        "essential-blocks/form-text-field",
                        {
                            labelText: "Suggest a song",
                            fieldName: "suggest-song",
                            placeholderText: "Suggest a song",
                            isIcon: false,
                            showLabel: false,
                        },
                    ],
                ],
            ],
        ],
    ],
];
