window.addEventListener("DOMContentLoaded", () => {
    const formButtons = document.querySelectorAll(".eb-form-submit-button");
    for (let button of formButtons) {
        button.onclick = function (e) {
            e.preventDefault();
            const id = button.getAttribute("data-id");
            const form_id = button.getAttribute("data-form-id");

            //Define classes
            const fieldWrapperClass = "eb-field-wrapper";
            const wrapperErrorClass = "eb-validation-error";
            const fieldErrorClass = "eb-form-validation";
            const recaptchaSelectorName = "g-recaptcha-response";

            const formWrapper = document.querySelector(`.${id}`);
            if (formWrapper) {
                const form = formWrapper.getElementsByClassName("eb-form")[0];
                const nonce = formWrapper.getElementsByClassName("form-nonce");

                const formData = new FormData(form); //Get All form item values

                const ajaxData = new FormData(); //Blank formdata
                ajaxData.append("action", "eb_form_submit");
                ajaxData.append("form_id", id);
                ajaxData.append("nonce", nonce[0]?.value);

                let formDataObj = {};
                [...form.elements].forEach((element) => {
                    if (element.name) {
                        formDataObj[element.name] = "";
                    }
                });
                // run through all entries and add to data object
                [...formData.entries()].forEach((entry) => {
                    if (
                        formDataObj[entry[0]].length > 0 &&
                        entry[1].length > 0 &&
                        Object.keys(formDataObj).includes(entry[0])
                    ) {
                        if (typeof formDataObj[entry[0]] === "string") {
                            formDataObj[entry[0]] = [
                                formDataObj[entry[0]],
                                entry[1],
                            ];
                        } else if (typeof formDataObj[entry[0]] === "object") {
                            formDataObj[entry[0]] = [
                                ...formDataObj[entry[0]],
                                entry[1],
                            ];
                        }
                    } else {
                        formDataObj[entry[0]] = entry[1];
                    }
                });
                delete formDataObj["form-nonce"];

                let sendAjax = true;

                //check recaptcha
                if (
                    Object.keys(formDataObj).includes(recaptchaSelectorName) &&
                    formDataObj[recaptchaSelectorName].length === 0
                ) {
                    const recaptchaSelector = formWrapper.querySelector(
                        `[name="${recaptchaSelectorName}"]`
                    );
                    if (recaptchaSelector) {
                        const closestWrapper = recaptchaSelector.closest(
                            `.${fieldWrapperClass}`
                        );
                        if (closestWrapper) {
                            closestWrapper.classList.add(wrapperErrorClass);
                            $errorHtml = `<div class="${fieldErrorClass}">reCAPTCHA isn't verified!</div>`;
                            // closestWrapper.innerHTML += $errorHtml
                        }
                    }
                    sendAjax = false;
                }

                // console.log("Form Data", formDataObj)

                if (sendAjax) {
                    button.classList.add("loading");
                    ajaxData.append("form_data", JSON.stringify(formDataObj));

                    return fetch(EssentialBlocksLocalize.ajax_url, {
                        method: "POST",
                        body: ajaxData,
                    }) // wrapped
                        .then((res) => res.text())
                        .then((data) => {
                            const res = JSON.parse(data);

                            button.classList.remove("loading");
                            removeValidationErrors(
                                formWrapper,
                                fieldWrapperClass,
                                wrapperErrorClass
                            ); //clear all error messages
                            let responseWrapper = formWrapper.getElementsByClassName(
                                "eb_form_submit_response"
                            )[0];
                            if (res.success) {
                                if (typeof res.data === "string") {
                                    addValidationMessage(
                                        responseWrapper,
                                        res.data,
                                        true
                                    );
                                }
                                form.reset();
                                button.classList.add("success");
                            }
                            if (!res.success && res.data) {
                                button.classList.remove("success");

                                if (typeof res.data === "string") {
                                    addValidationMessage(
                                        responseWrapper,
                                        res.data,
                                        false,
                                        false
                                    );
                                } else if (typeof res.data === "object") {
                                    if (
                                        res.data.message &&
                                        typeof res.data.message === "string"
                                    ) {
                                        addValidationMessage(
                                            responseWrapper,
                                            res.data.message,
                                            false,
                                            false
                                        );
                                    }
                                    if (
                                        res.data.validation &&
                                        typeof res.data.validation === "object"
                                    ) {
                                        Object.keys(res.data.validation).map(
                                            (item) => {
                                                if (
                                                    item ===
                                                    recaptchaSelectorName
                                                ) {
                                                    recaptchaReset(formWrapper);
                                                }
                                                const selector = formWrapper.querySelector(
                                                    `[name="${item}"]`
                                                );
                                                const closestFieldWrapper = selector.closest(
                                                    `.${fieldWrapperClass}`
                                                );
                                                closestFieldWrapper.classList.add(
                                                    wrapperErrorClass
                                                );
                                                const closestValidationDiv = closestFieldWrapper.querySelector(
                                                    `.${fieldErrorClass}`
                                                );
                                                if (closestValidationDiv) {
                                                    closestValidationDiv.innerHTML =
                                                        res.data.validation[
                                                            item
                                                        ];
                                                }
                                            }
                                        );
                                    }
                                }
                            }
                        })
                        .catch((err) => console.log(err));
                }
            }
        };
    }

    const formWrappers = document.getElementsByClassName(`eb-form-wrapper`);
    for (let formWrapper of formWrappers) {
        const inputs = formWrapper.getElementsByClassName("eb-field-input");

        for (let input of inputs) {

            if (input.value) {
                input.nextSibling?.classList.add("active");
            }

            input.addEventListener("focus", function (e) {
                if (!input.nextSibling?.classList.contains("active")) {
                    input.nextSibling?.classList.add("active");
                }
            });

            // Remove the class when the input loses focus
            input.addEventListener("blur", function () {
                if (!input.value) {
                    input.nextSibling?.classList.remove("active");
                }
            });
        }
    }
});

function removeValidationErrors(wrapper, selector, classname) {
    const validationErrors = wrapper.querySelectorAll(`.${selector}`);
    for (let errorItem of validationErrors) {
        errorItem.classList.remove(classname);
    }
}

function addValidationMessage(wrapper, data, isSuccess, defaultMessage = true) {
    wrapper.classList.add("show");
    const confirmationType = wrapper.getAttribute("data-confirmation-type");
    const successMessage = decodeHTMLEntities(
        wrapper.getAttribute("data-success")
    );
    const errorMessage = decodeHTMLEntities(wrapper.getAttribute("data-error"));
    const redirectUrl = decodeHTMLEntities(
        wrapper.getAttribute("data-redirect-url")
    );

    if (isSuccess && confirmationType === "redirect") {
        if (redirectUrl && redirectUrl.length > 0) {
            window.location.replace(redirectUrl);
        } else {
            window.location.replace("/");
        }
    }

    const success = "success";
    const error = "error";

    if (!data || data.length === 0) {
        wrapper.classList.remove("show", success, error);
    }

    if (isSuccess) {
        wrapper.classList.remove(error);
        wrapper.classList.add(success);
    }

    if (!isSuccess) {
        wrapper.classList.remove(success);
        wrapper.classList.add(error);
    }

    if (defaultMessage) {
        if (isSuccess) {
            wrapper.innerHTML = successMessage;
        } else {
            wrapper.innerHTML = errorMessage;
        }
    } else {
        wrapper.innerHTML = data;
    }
}

function recaptchaReset(selector) {
    grecaptcha.reset(selector);
}

function decodeHTMLEntities(htmlString) {
    if (
        !htmlString ||
        !typeof htmlString === "string" ||
        htmlString.length === 0
    ) {
        return htmlString;
    }
    return decodeURIComponent(htmlString.replace(/\+/g, " "));
}
