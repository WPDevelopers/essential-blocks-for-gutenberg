import { __ } from "@wordpress/i18n";
import { ExternalLink } from "@wordpress/components";
import { useState } from "@wordpress/element";
const { saveEBSettingsData } = window.EBControls;

const GoogleMaps = (props) => {
    const { setTrigger, settingsKey, settingsData, setSettingsData } = props;
    const [apikey, setApiKey] = useState(settingsData[settingsKey]);
    const [saveBtnText, setSaveBtnText] = useState(
        __("Save Changes", "essential-blocks")
    );
    const [error, setError] = useState("");

    const handleClick = () => {
        setSaveBtnText(__("Saving...", "essential-blocks"));
        saveEBSettingsData(settingsKey, apikey).then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                setSaveBtnText(__("Saved", "essential-blocks"));
                setSettingsData({
                    ...settingsData,
                    [settingsKey]: apikey,
                });

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

    return (
        <>
            <div className="option-modal-content">
                <h3 className="option-modal__title">
                    {__("Google Map API", "essential-blocks")}
                </h3>
                <p className="option-modal__content">
                    {__(
                        "To enable location search, please ensure Places API is activated in the Google Developers Console ",
                        "essential-blocks" + " "
                    )}
                    <ExternalLink href="https://developers.google.com/places/web-service/intro">
                        {__("More info", "essential-blocks")}
                    </ExternalLink>
                </p>

                <div className="eb-form-control">
                    <label htmlFor="input-text">
                        {__("API Key", "essential-blocks")}
                    </label>
                    <input
                        type="text"
                        id="input-text"
                        className="eb-input-control"
                        placeholder={__(
                            "Place your Google Map API key here",
                            "essential-blocks"
                        )}
                        value={apikey}
                        onChange={(e) => setApiKey(e.target.value)}
                    />
                </div>

                <button
                    className="eb-btn eb-btn-border eb-btn-sm"
                    onClick={() => handleClick()}
                >
                    {saveBtnText}
                </button>
                {error && (
                    <div>
                        <span className="error">{error}</span>
                    </div>
                )}
            </div>
        </>
    );
};
export default GoogleMaps;
