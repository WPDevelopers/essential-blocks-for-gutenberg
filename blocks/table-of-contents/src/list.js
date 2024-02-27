/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";

const List = (props) => {
    const {
        visibleHeaders,
        headers,
        deleteHeaderList,
        listStyle,
        itemCollapsed,
    } = props.attributes;

    const getDynamicValue = async (value) => {
        let data = new FormData();
        data.append("action", "dynamic_field_value");
        data.append("value", value);
        data.append(
            "post_id",
            wp.data.select("core/editor").getCurrentPostId()
        );
        data.append("admin_nonce", EssentialBlocksProLocalize.admin_nonce);

        return fetch(EssentialBlocksProLocalize.ajax_url, {
            method: "POST",
            body: data,
        }) // wrapped
            .then((res) => res.text())
            .then((data) => {
                const result = JSON.parse(data);
                if (result.success) {
                    return result.data;
                } else {
                    return "Invalid response";
                }
            })
            .catch((err) => console.log(err));
    };

    const fetchData = async (headers) => {
        const dynamicValues = {};

        for (const { content } of headers) {
            let dynamicValue = content;

            if (typeof content === 'string' && content.startsWith(EssentialBlocksProLocalize?.eb_dynamic_tags + '/')) {
                dynamicValue = await getDynamicValue(content); // Fetch dynamic value for content
            }

            dynamicValues[content] = dynamicValue;
        }

        return dynamicValues;
    };

    const [dynamicValues, setDynamicValues] = useState({});
    useEffect(() => {
        if (typeof EssentialBlocksProLocalize !== "undefined") {
            fetchData(headers).then((dynamicValues) => setDynamicValues(dynamicValues));
        } else {
            const dynamicValues = headers.reduce((newHeaders, { content }) => {
                newHeaders[content] = content;
                return newHeaders;
            }, {});

            setDynamicValues(dynamicValues);
        }
    }, [headers]);

    const ebGenerateTOC = (data) => {
        let toc = `<${listStyle} class="eb-toc__list">`;
        let stack = [];
        let counter = 0;
        for (let i = 0;i < data.length;i++) {
            const { level, content, link } = data[i];


            while (stack.length > 0 && stack[stack.length - 1].level >= level) {
                stack.pop();
                toc += `</li></${listStyle}>`;
            }

            // Use the dynamic value from the state
            const dynamicValue = dynamicValues[content] || "";

            toc += `<li><a href="#${link}">${dynamicValue}</a> `;

            if (i < data.length - 1 && data[i + 1].level > level) {
                if (itemCollapsed && !stack.length) {
                    toc += `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M6.75 9.75L9 7.5L11.25 9.75" stroke="#252D3B" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 15.75C9.88642 15.75 10.7642 15.5754 11.5831 15.2362C12.4021 14.897 13.1462 14.3998 13.773 13.773C14.3998 13.1462 14.897 12.4021 15.2362 11.5831C15.5754 10.7642 15.75 9.88642 15.75 9C15.75 8.11358 15.5754 7.23583 15.2362 6.41689C14.897 5.59794 14.3998 4.85383 13.773 4.22703C13.1462 3.60023 12.4021 3.10303 11.5831 2.76381C10.7642 2.42459 9.88642 2.25 9 2.25C7.20979 2.25 5.4929 2.96116 4.22703 4.22703C2.96116 5.4929 2.25 7.20979 2.25 9C2.25 10.7902 2.96116 12.5071 4.22703 13.773C5.4929 15.0388 7.20979 15.75 9 15.75Z" stroke="#252D3B" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                }

                toc += `<${listStyle} class="eb-toc__list">`;
                stack.push({ level, content, link });
            }
            counter++;
        }

        while (stack.length > 0) {
            stack.pop();
            toc += `</li></${listStyle}>`;
        }

        toc += `</${listStyle}>`;

        return toc;
    };

    if (
        visibleHeaders != "undefined" &&
        headers &&
        headers.length > 0 &&
        headers.filter((header) => visibleHeaders[header.level - 1]).length > 0
    ) {
        let newHeaders = [];
        headers.forEach((item, index) => {
            if (
                deleteHeaderList &&
                deleteHeaderList.length > 0 &&
                deleteHeaderList[index] &&
                deleteHeaderList[index].hasOwnProperty("isDelete") &&
                deleteHeaderList[index].isDelete === false
            ) {
                newHeaders.push(headers[index]);
            }
        });

        return (
            <div
                className="eb-toc__list-wrap"
                dangerouslySetInnerHTML={{
                    __html:
                        newHeaders.length > 0
                            ? ebGenerateTOC(newHeaders)
                            : ebGenerateTOC(headers),
                }}
            ></div>
        );
    } else {
        return (
            <p className="eb_table-of-contents-placeholder">
                {__(
                    "Add a header to begin generating the table of contents",
                    "essential-blocks"
                )}
            </p>
        );
    }
};

export default List;
