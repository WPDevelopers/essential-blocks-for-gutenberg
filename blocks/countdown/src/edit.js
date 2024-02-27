/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useRef } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

const { duplicateBlockIdFix } = window.EBControls;

import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
        name
    } = props;

    const daysRef = useRef(null);
    const hoursRef = useRef(null);
    const minutesRef = useRef(null);
    const secondsRef = useRef(null);

    const {
        resOption,
        blockId,
        blockMeta,

        //  deadline Date timestamp
        endTimeStamp,

        //
        showDays,
        showHours,
        showMinutes,
        showSeconds,

        //
        daysLabel,
        hoursLabel,
        minutesLabel,
        secondsLabel,

        //
        preset,
        classHook,
        isEvergreenTimer,
        evergreenTimerHours,
        evergreenTimerMinutes,
        recurringCountdown,
        restartTime,
        recurringCountdownEnd,
    } = attributes;

    // this useEffect is for creating a unique blockId for each block's unique className
    useEffect(() => {
        const BLOCK_PREFIX = "eb-countdown";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    // this useEffect is for the countdown animation effect
    useEffect(() => {
        const fakeElement = { current: { textContent: "3e" } };

        const daysRefUe = daysRef.current ? daysRef : fakeElement;
        const hoursRefUe = hoursRef.current ? hoursRef : fakeElement;
        const minutesRefUe = minutesRef.current ? minutesRef : fakeElement;
        const secondsRefUe = secondsRef.current ? secondsRef : fakeElement;

        const MINUTE_IN_SECONDS = 60;
        const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;
        const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS;
        const WEEK_IN_SECONDS = 7 * DAY_IN_SECONDS;
        const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS;
        const YEAR_IN_SECONDS = 365 * DAY_IN_SECONDS;
        const HOUR_IN_MILISECONDS = 60 * 60 * 1000;

        const timeLeft = (deadlineTimeStamp, intervalId = null) => {
            const now = Date.now();
            const secondsLeft = Math.round((deadlineTimeStamp - now) / 1000);
            const seconds = secondsLeft % 60;
            const minutes = Math.floor(secondsLeft / 60) % 60;
            const hours = Math.floor(secondsLeft / 3600) % 24;
            const days = Math.floor(secondsLeft / 86400);

            if (secondsLeft < 0) {
                clearInterval(intervalId);
                daysRefUe.current.textContent = "00";
                hoursRefUe.current.textContent = "00";
                minutesRefUe.current.textContent = "00";
                secondsRefUe.current.textContent = "00";
                return;
            }

            daysRefUe.current.textContent = days < 10 ? `0${days}` : `${days}`;
            hoursRefUe.current.textContent =
                hours < 10 ? `0${hours}` : `${hours}`;
            minutesRefUe.current.textContent =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            secondsRefUe.current.textContent =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
        };

        if (isEvergreenTimer) {
            let evergreenInterval = blockId + "_evergreen_interval",
                evergreenTimeKey = blockId + "_evergreen_time",
                interval = localStorage.getItem(evergreenInterval),
                date = localStorage.getItem(evergreenTimeKey),
                hours = parseInt(evergreenTimerHours || 0) * HOUR_IN_SECONDS,
                minutes =
                    parseInt(evergreenTimerMinutes || 0) * MINUTE_IN_SECONDS,
                evergreenTime = parseInt(hours + minutes);

            if (
                date === null ||
                interval === null ||
                interval != evergreenTime
            ) {
                date = Date.now() + parseInt(evergreenTime) * 1000;
                localStorage.setItem(evergreenInterval, evergreenTime);
                localStorage.setItem(evergreenTimeKey, date);
            }

            if (recurringCountdown) {
                let recurringAfter =
                    parseFloat(restartTime) * HOUR_IN_MILISECONDS;

                if (parseInt(date) + recurringAfter < Date.now()) {
                    date = Date.now() + parseInt(evergreenTime) * 1000;
                    localStorage.setItem(evergreenTimeKey, date);
                }

                if (recurringCountdownEnd < date) {
                    date = recurringCountdownEnd;
                }
            }

            timeLeft(date || 0);
            const intervalIdEver = setInterval(() => {
                timeLeft(date || 0, intervalIdEver);
            }, 1000);

            return () => {
                clearInterval(intervalIdEver);
            };
        }

        if (!isEvergreenTimer) {
            timeLeft(endTimeStamp || 0);

            const intervalId = setInterval(() => {
                timeLeft(endTimeStamp || 0, intervalId);
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [
        endTimeStamp,
        showDays,
        showHours,
        showMinutes,
        showSeconds,
        isEvergreenTimer,
        evergreenTimerHours,
        evergreenTimerMinutes,
        recurringCountdown,
        restartTime,
        recurringCountdownEnd,
    ]);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div className={`${blockId} eb-cd-wrapper ${preset}`}>
                        <div className="eb-cd-inner">
                            {showDays ? (
                                <div className="box cd-box-day">
                                    <span ref={daysRef} className="eb-cd-digit">
                                        00
                                    </span>
                                    {daysLabel ? (
                                        <span className="eb-cd-label">
                                            {daysLabel}
                                        </span>
                                    ) : null}
                                </div>
                            ) : null}

                            {showHours ? (
                                <div className="box cd-box-hour">
                                    <span
                                        ref={hoursRef}
                                        className="eb-cd-digit"
                                    >
                                        00
                                    </span>
                                    {hoursLabel ? (
                                        <span className="eb-cd-label">
                                            {hoursLabel}
                                        </span>
                                    ) : null}
                                </div>
                            ) : null}

                            {showMinutes ? (
                                <div className="box cd-box-minute">
                                    <span
                                        ref={minutesRef}
                                        className="eb-cd-digit"
                                    >
                                        00
                                    </span>
                                    {minutesLabel ? (
                                        <span className="eb-cd-label">
                                            {minutesLabel}
                                        </span>
                                    ) : null}
                                </div>
                            ) : null}

                            {showSeconds ? (
                                <div className="box cd-box-second">
                                    <span
                                        ref={secondsRef}
                                        className="eb-cd-digit"
                                    >
                                        00
                                    </span>
                                    {secondsLabel ? (
                                        <span className="eb-cd-label">
                                            {secondsLabel}
                                        </span>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
