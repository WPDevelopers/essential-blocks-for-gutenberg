import { __ } from "@wordpress/i18n";
import { ExternalLink } from "@wordpress/components";
import { useState } from "@wordpress/element";
const { saveEBSettingsData } = window.EBControls;

const Instagram = (props) => {
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
                    {__("Instagram Access Token", "essential-blocks")}
                </h3>
                <p className="option-modal__content">
                    {__(
                        "To get started please add an Instagram Access Token.",
                        "essential-blocks"
                    )}
                    {__(" You can follow 1 to 3 ", "essential-blocks")}
                    <ExternalLink href="https://developers.facebook.com/docs/instagram-basic-display-api/getting-started">
                        {__("steps", "essential-blocks")}{" "}
                    </ExternalLink>
                    {__("to generate token.", "essential-blocks")}{" "}
                    {__(
                        "Once you have a token, please paste and save.",
                        "essential-blocks"
                    )}
                </p>

                <div className="eb-form-control">
                    <label htmlFor="input-text">
                        {__("Access Token", "essential-blocks")}
                    </label>
                    <input
                        type="text"
                        id="input-text"
                        className="eb-input-control"
                        placeholder={__(
                            "Place your instagram access token",
                            "essential-blocks"
                        )}
                        value={apikey && "undefined" !== apikey ? apikey : ""}
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
export default Instagram;
