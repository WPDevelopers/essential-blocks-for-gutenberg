import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

const { saveEBSettingsData } = window.EBControls;

const SaveButton = (props) => {
    const {
        blocks
    } = props;

    const defaultBtntext = "Save Changes";

    useEffect(() => {
        setSaveBtnText(defaultBtntext)
    }, [blocks])

    const [saveBtnText, setSaveBtnText] = useState(defaultBtntext);
    const [isSaving, setIsSaving] = useState(false)
    const [error, setError] = useState("");

    const handleSave = () => {
        setSaveBtnText("Saving...");
        setIsSaving(true);
        saveEBSettingsData('', JSON.stringify(blocks), 'enable_disable').then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                setSaveBtnText("Saved")
            }
            else {
                setSaveBtnText(defaultBtntext)
                setError(typeof res.data === 'string' ? res.data : "Something went wrong! Please tyr again.")
            }
            setIsSaving(false)
        })
    }

    return (
        <div id="eb-save-admin-options">
            <button
                className="eb-btn eb-btn-border"
                onClick={() => handleSave()}
            >
                {isSaving && (
                    <img className="eb-install-loader" src={`${EssentialBlocksLocalize.eb_plugins_url}/assets/images/loading.svg`} />
                )}
                {__(saveBtnText, "essential-blocks")}
            </button>
        </div>
    )
};

export default SaveButton;
