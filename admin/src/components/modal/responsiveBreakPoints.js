import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
const { saveEBSettingsData, resetEBSettingsData } = window.EBControls;

const ResponsiveBreakPoints = (props) => {
    const { setTrigger, settingsData, setSettingsData } = props;

    const settingsKey = 'responsiveBreakpoints';

    const [loadingApi, setLoadingApi] = useState(false);
    const [saveBtnText, setSaveBtnText] = useState(
        __("Save Changes", "essential-blocks")
    );
    const [error, setError] = useState("");
    const [responsiveSettingsData, setResponsiveSettingsData] = useState({});

    // api Info
    const [tableSize, setTableSize] = useState(EssentialBlocksLocalize.responsiveBreakpoints?.tablet ? EssentialBlocksLocalize.responsiveBreakpoints.tablet : 1024);
    const [mobileSize, setMobileSize] = useState(EssentialBlocksLocalize.responsiveBreakpoints?.mobile ? EssentialBlocksLocalize.responsiveBreakpoints.mobile : 767);

    const handleClick = () => {
        setSaveBtnText(__("Saving...", "essential-blocks"));
        const saveData = { mobile: mobileSize, tablet: tableSize }
        saveEBSettingsData(settingsKey, JSON.stringify(saveData)).then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                setSaveBtnText(__("Saved", "essential-blocks"));

                setSettingsData({
                    ...settingsData,
                    [settingsKey]: saveData,
                });
                EssentialBlocksLocalize.responsiveBreakpoints = { ...saveData }

                setTimeout(() => {
                    setTrigger(false);
                }, 300);
            } else {
                setSaveBtnText(__("Save Changes", "essential-blocks"));
                setError(
                    typeof res.data === "string"
                        ? res.data
                        : __(
                            "Something went wrong! Please try again.",
                            "essential-blocks"
                        )
                );
            }
        });
    };

    const handleReset = () => {
        resetEBSettingsData(settingsKey).then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                const updatedSettingsData = { ...settingsData }
                delete updatedSettingsData[settingsKey]
                EssentialBlocksLocalize.responsiveBreakpoints = {
                    mobile: 767,
                    tablet: 1024
                }
                setSettingsData({ ...updatedSettingsData });
                setTimeout(() => {
                    setTrigger(false);
                }, 300);
            } else {
                //Code for reset failed
            }
        });
    }


    return (
        <>
            <div className="option-modal-content">
                <h3 className="option-modal__title mb20">Responsive Breakpoints</h3>

                <div
                    className={`eb-responsive-form-wrapper ${loadingApi ? "loading-circle" : ""
                        }`}
                >
                    <div className="eb-form-control">
                        <label htmlFor="tablet-breakpoints">{__(
                            "Tablet Breakpoints",
                            "essential-blocks"
                        )}</label>
                        <input
                            type="number"
                            id="tablet-breakpoints"
                            className="eb-input-control"
                            placeholder={tableSize}
                            defaultValue={!tableSize ? "" : tableSize}
                            onChange={(e) => setTableSize(Number(e.target.value))}
                        />
                        <span>px</span>
                    </div>

                    <div className="eb-form-control">
                        <label htmlFor="mobile-breakpoints">{__(
                            "Mobile Breakpoints",
                            "essential-blocks"
                        )}</label>
                        <input
                            type="number"
                            id="mobile-breakpoints"
                            className="eb-input-control"
                            placeholder={tableSize}
                            defaultValue={!mobileSize ? "" : mobileSize}
                            onChange={(e) => setMobileSize(Number(e.target.value))}
                        />
                        <span>px</span>

                    </div>

                    <button
                        className="eb-btn eb-btn-border eb-btn-sm"
                        onClick={() => handleClick()}
                    >
                        {saveBtnText}
                    </button>

                    <button
                        className="eb-btn eb-btn-reset eb-btn-sm"
                        onClick={() => handleReset()}
                    >Reset</button>

                </div>
            </div>
        </>
    );
};
export default ResponsiveBreakPoints;
