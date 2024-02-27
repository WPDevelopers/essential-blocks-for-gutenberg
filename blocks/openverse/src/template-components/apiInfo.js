import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";

export const ApiInfo = (props) => {
	const {
		attributes,
		setAttributes,
		loadingApi,
		setLoadingApi,
		openverseRegError,
		setOpenverseRegError,
		setShowForm,
	} = props;
	const { apiInfo } = attributes;

	// email validation
	const [emailError, setEmailError] = useState("");

	function isValidEmail(email) {
		return /\S+@\S+\.\S+/.test(email);

		// return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	}

	const handleEmailChange = (e) => {
		var email = e.target.value;

		setAttributes({
			apiInfo: {
				...apiInfo,
				email: email,
			},
		});
	};

	useEffect(() => {
		if (!isValidEmail(apiInfo.email)) {
			setEmailError("Email is invalid");
		} else {
			setEmailError("");
		}
	}, [apiInfo.email]);

	const handleNameChange = (e) => {
		var name = e.target.value;

		setAttributes({
			apiInfo: {
				...apiInfo,
				name: name,
			},
		});
	};

	// Generate API
	const generateAPI = () => {
		setLoadingApi(true);

		let data = new FormData();
		data.append("action", "eb_get_registration");
		data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);
		// search
		data.append("openverseEmail", apiInfo.email);
		data.append("openverseName", apiInfo.name);

		fetch(EssentialBlocksLocalize.ajax_url, {
			method: "POST",
			body: data,
		}) // wrapped
			.then((res) => res.json())
			.then((data) => {
				if (data.hasOwnProperty("client_id")) {
					setOpenverseRegError({
						status: true,
						type: "Success",
						message: data.msg,
					});

					let apiData = new FormData();

					apiData.append("action", "eb_openverse_token");
					apiData.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);

					return fetch(EssentialBlocksLocalize.ajax_url, {
						method: "POST",
						body: apiData,
					});
				} else {
					setLoadingApi(false);
					setOpenverseRegError({
						status: true,
						type: "Error",
						message: data.name[0],
					});
				}
			})
			.then((response) => response.json())
			.then((responseData) => {
				// console.log(typeof responseData, responseData);
				setShowForm(false);

				setLoadingApi(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="api-info">
			<input
				type="mail"
				name="mail-form"
				id="mail-form"
				class="openverse-input"
				placeholder={__("user@example.com", "essential-blocks")}
				defaultValue={!apiInfo.email ? "" : apiInfo.email}
				onChange={(e) => handleEmailChange(e)}
			/>
			{apiInfo.email && emailError && (
				<span className="eb-alert-error">{emailError}</span>
			)}

			<input
				type="text"
				id="name"
				className="openverse-input"
				placeholder={__("My amazing project", "essential-blocks")}
				defaultValue={!apiInfo.name ? "" : apiInfo.name}
				onChange={(e) => handleNameChange(e)}
			/>

			{openverseRegError.status && openverseRegError.type == "Error" && (
				<span className="eb-alert-error">{openverseRegError.message}</span>
			)}
			<button
				className="openverse-api-btn"
				disabled={apiInfo.email && !emailError && apiInfo.name ? false : true}
				onClick={generateAPI}
			>
				{loadingApi
					? __("Generating ........", "essential-blocks")
					: __("Generate API", "essential-blocks")}
			</button>
		</div>
	);
};
