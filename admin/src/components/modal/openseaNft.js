import { useEffect, useState } from "@wordpress/element";

const { saveEBSettingsData } = window.EBControls;

const OpenseaNft = (props) => {
    const { setTrigger, settingsKey, settingsData, setSettingsData } = props;

    const [apikey, setApiKey] = useState(settingsData[settingsKey]);
    const [saveBtnText, setSaveBtnText] = useState("Save Changes");
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState("");

    const handleClick = () => {
        setSaveBtnText("Saving...");
        saveEBSettingsData(settingsKey, apikey).then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                setSaveBtnText("Saved");
                setSettingsData({
                    ...settingsData,
                    [settingsKey]: apikey,
                });

                setTimeout(() => {
                    setTrigger(false);
                }, 300);
            } else {
                setSaveBtnText("Save Changes");
                setError(
                    typeof res.data === "string"
                        ? res.data
                        : "Something went wrong! Please tyr again."
                );
            }
        });
    };

    return (
        <>
            <div className="option-modal-content">
                <h3 className="option-modal__title mb20">Opensea API</h3>

                <div className="eb-form-control">
                    <label htmlFor="input-text">API Keys</label>
                    <input
                        type="text"
                        id="input-text"
                        value={apikey}
                        className="eb-input-control"
                        placeholder="Paste your Opensea API key here"
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
export default OpenseaNft;
