/**
 * get_eb_admin_templates
 * @param {*} slug
 * @param {*} file
 */
export const getTemplates = () => {
    let data = new FormData();
    data.append("action", "get_eb_admin_templates");
    data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);

    return fetch(EssentialBlocksLocalize.ajax_url, {
        method: "POST",
        body: data,
    }) // wrapped
        .then((res) => res.text())
        .then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                return res.data
            }
        })
        .catch((err) => console.log(err));
};

/**
 * get_eb_admin_template_count
 * @param {*} slug
 * @param {*} file
 */
export const getTemplateCount = () => {
    let data = new FormData();
    data.append("action", "get_eb_admin_template_count");
    data.append("admin_nonc", EssentialBlocksLocalize.admin_nonc);

    return fetch(EssentialBlocksLocalize.ajax_url, {
        method: "POST",
        body: data,
    }) // wrapped
        .then((res) => res.text())
        .then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                return res.data
            }
        })
        .catch((err) => console.log(err));
};
