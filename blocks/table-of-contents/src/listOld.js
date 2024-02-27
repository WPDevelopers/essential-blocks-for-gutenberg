/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";

class List extends Component {
    render() {
        const {
            visibleHeaders,
            headers,
            deleteHeaderList,
        } = this.props.attributes;

        function ebGenerateTOC(data) {
            let toc = '<ul class="eb-toc__list">';
            let stack = [];
            let counter = 0;
            for (let i = 0; i < data.length; i++) {
                const { level, content, link } = data[i];

                while (
                    stack.length > 0 &&
                    stack[stack.length - 1].level >= level
                ) {
                    stack.pop();
                    toc += "</li></ul>";
                }

                toc += `<li><a href="#${link}">${content}</a>`;

                if (i < data.length - 1 && data[i + 1].level > level) {
                    toc += '<ul class="eb-toc__list">';
                    stack.push({ level, content, link });
                }
                counter++;
            }

            while (stack.length > 0) {
                stack.pop();
                toc += "</li></ul>";
            }

            toc += "</ul>";

            return toc;
        }

        if (
            visibleHeaders != "undefined" &&
            headers &&
            headers.length > 0 &&
            headers.filter((header) => visibleHeaders[header.level - 1])
                .length > 0
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
    }
}

export default List;
