import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

const Openverse = (props) => {
    const { setTrigger, settingsKey, settingsData, setSettingsData } = props;

    const [loadingApi, setLoadingApi] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [openverseRegError, setOpenverseRegError] = useState({
        status: false,
    });
    const [saveBtnText, setSaveBtnText] = useState("Generate API");
    const [openverseSettingsData, setOpenverseSettingsData] = useState({});
    const [error, setError] = useState("");

    // api Info
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    //Initial UseEffect
    useEffect(() => {
        setLoadingApi(true);

        if (settingsData[settingsKey] !== undefined) {
            setOpenverseSettingsData(settingsData[settingsKey]);
            if (settingsData[settingsKey].client_id) {
                setShowForm(false);
            } else {
                setShowForm(true);
            }

            setEmail(settingsData[settingsKey].email);
            setName(settingsData[settingsKey].name);
            setLoadingApi(false);

            setSaveBtnText("Regenerate API");
        } else {
            setOpenverseSettingsData({});
        }
    }, []);

    // email validation
    const [emailError, setEmailError] = useState("");

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);

        // return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }

    const handleEmailChange = (e) => {
        var email = e.target.value;

        setEmail(email);
    };

    useEffect(() => {
        if (!isValidEmail(email)) {
            setEmailError("Email is invalid");
        } else {
            setEmailError("");
        }
    }, [email]);

    const handleNameChange = (e) => {
        var name = e.target.value;

        setName(name);
    };

    // Generate API
    const generateAPI = (e) => {
        e.preventDefault();
        setLoadingApi(true);
        setSaveBtnText("Generating ........");

        let data = new FormData();
        data.append("action", "eb_get_registration");
        data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);
        // search
        data.append("openverseEmail", email);
        data.append("openverseName", name);

        /**
         * Fetch API for Client ID/Client Secret
         */
        fetch(EssentialBlocksLocalize.ajax_url, {
            method: "POST",
            body: data,
        }) // wrapped
            .then((res) => res.json())
            .then((data) => {
                if (data.hasOwnProperty("client_id")) {
                    //Success
                    setOpenverseRegError({
                        status: true,
                        type: "Success",
                        message: data.msg,
                    });

                    /**
                     * Another API call for generate Openverse Token
                     */
                    let apiData = new FormData();

                    apiData.append("action", "eb_openverse_token");
                    apiData.append(
                        "admin_nonce",
                        EssentialBlocksLocalize.admin_nonce
                    );

                    return fetch(EssentialBlocksLocalize.ajax_url, {
                        method: "POST",
                        body: apiData,
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            setShowForm(false);
                            setLoadingApi(false);

                            if (data) {
                                setSaveBtnText("Generated API");

                                setTimeout(() => {
                                    setTrigger(false);
                                }, 300);
                            } else {
                                setSaveBtnText("Generate API");
                                setError(
                                    typeof res.data === "string"
                                        ? res.data
                                        : "Something went wrong! Please tyr again."
                                );
                            }
                        })
                        .catch((err) => console.log(err));
                } else {
                    setLoadingApi(false);

                    setOpenverseRegError({
                        status: true,
                        type: "Error",
                        message: data.name[0],
                    });

                    setSaveBtnText("Generate API");
                }
            })

            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="option-modal-content">
                <h3 className="option-modal__title mb20">Openverse API</h3>
                {showForm && (
                    <div className="openverse-placheholderbox__description">
                        {__(
                            "Provide your Email ID & unique Project Name to get access to Openverse  using API, these are required field",
                            "essential-blocks"
                        )}

                        <span style={{ color: "#ff0000" }}>*</span>
                    </div>
                )}
                {!showForm && (
                    <>
                        {openverseRegError.status &&
                            openverseRegError.type == "Success" && (
                                <div className="eb-alert eb-alert-success">
                                    <strong>Hurray!</strong> You have generated
                                    an API successfully! Please verify your
                                    email to enjoy uninterrupted access to
                                    Openverse
                                    <span className="eb-alert-warning">
                                        Without verifying your email you can get
                                        access to Openverse as anonymous and
                                        your search limit will be 100 requests/
                                        day and 5 requests/ hr.
                                    </span>
                                    {/* {openverseRegError.message} */}
                                </div>
                            )}
                    </>
                )}

                <div
                    className={`eb-openverse-form-wrapper ${
                        loadingApi ? "loading-circle" : ""
                    }`}
                >
                    <div className="eb-form-control">
                        <label htmlFor="openverse-mail">Email</label>
                        <input
                            type="mail"
                            id="mail-form"
                            className="openverse-input eb-input-control"
                            placeholder={__(
                                "user@example.com",
                                "essential-blocks"
                            )}
                            defaultValue={!email ? "" : email}
                            onChange={(e) => handleEmailChange(e)}
                        />
                        {email && emailError && (
                            <span className="eb-alert-error">{emailError}</span>
                        )}
                    </div>
                    <div className="eb-form-control">
                        <label htmlFor="openverse-name">Project Name</label>
                        <input
                            type="text"
                            id="openverse-name"
                            className="openverse-input eb-input-control"
                            placeholder={__(
                                "My amazing project",
                                "essential-blocks"
                            )}
                            defaultValue={!name ? "" : name}
                            onChange={(e) => handleNameChange(e)}
                        />

                        {openverseRegError.status &&
                            openverseRegError.type == "Error" && (
                                <span className="eb-alert-error">
                                    {openverseRegError.message}
                                </span>
                            )}
                    </div>

                    <button
                        className="openverse-api-btn eb-btn eb-btn-border eb-btn-sm"
                        disabled={email && !emailError && name ? false : true}
                        onClick={(e) => generateAPI(e)}
                    >
                        {saveBtnText}
                    </button>

                    {error && (
                        <div>
                            <span className="error">{error}</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Openverse;
