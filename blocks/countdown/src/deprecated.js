/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";
import { omit } from "lodash";

import attributes from "./attributes";

const deprecated = [
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                endTimeStamp,
                showDays,
                showHours,
                showMinutes,
                showSeconds,
                daysLabel,
                hoursLabel,
                minutesLabel,
                secondsLabel,
                classHook,
                isEvergreenTimer,
                evergreenTimerHours,
                evergreenTimerMinutes,
                recurringCountdown,
                restartTime,
                recurringCountdownEnd,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div className={`${blockId} eb-cd-wrapper`}>
                            <div
                                className="eb-cd-inner"
                                blockId={blockId}
                                data-deadline-time={`${endTimeStamp || 0}`}
                                data-is-evergreen-time={
                                    isEvergreenTimer || false
                                }
                                data-evergreen-time-hours={
                                    evergreenTimerHours || "11"
                                }
                                data-evergreen-time-minutes={
                                    evergreenTimerMinutes || "59"
                                }
                                data-evergreen-recurring={
                                    recurringCountdown || false
                                }
                                data-evergreen-restart-time={restartTime || "0"}
                                data-evergreen-deadline-time={`${
                                    recurringCountdownEnd || 0
                                }`}
                            >
                                {showDays ? (
                                    <div className="box cd-box-day">
                                        <span className="eb-cd-digit">00</span>
                                        {daysLabel ? (
                                            <span className="eb-cd-label">
                                                {daysLabel}
                                            </span>
                                        ) : null}
                                    </div>
                                ) : null}

                                {showHours ? (
                                    <div className="box cd-box-hour">
                                        <span className="eb-cd-digit">00</span>
                                        {hoursLabel ? (
                                            <span className="eb-cd-label">
                                                {hoursLabel}
                                            </span>
                                        ) : null}
                                    </div>
                                ) : null}

                                {showMinutes ? (
                                    <div className="box cd-box-minute">
                                        <span className="eb-cd-digit">00</span>
                                        {minutesLabel ? (
                                            <span className="eb-cd-label">
                                                {minutesLabel}
                                            </span>
                                        ) : null}
                                    </div>
                                ) : null}

                                {showSeconds ? (
                                    <div className="box cd-box-second">
                                        <span className="eb-cd-digit">00</span>
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
            );
        },
    },
    {
        attributes: omit(attributes, [
            "isEvergreenTimer",
            "evergreenTimerHours",
            "evergreenTimerMinutes",
            "recurringCountdown",
            "restartTime",
            "recurringCountdownEnd",
        ]),
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                endTimeStamp,
                showDays,
                showHours,
                showMinutes,
                showSeconds,
                daysLabel,
                hoursLabel,
                minutesLabel,
                secondsLabel,
                classHook,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div className={`${blockId} eb-cd-wrapper`}>
                            <div
                                className="eb-cd-inner"
                                data-deadline-time={`${endTimeStamp || 0}`}
                            >
                                {showDays ? (
                                    <div className="box cd-box-day">
                                        <span className="eb-cd-digit">00</span>
                                        {daysLabel ? (
                                            <span className="eb-cd-label">
                                                {daysLabel}
                                            </span>
                                        ) : null}
                                    </div>
                                ) : null}

                                {showHours ? (
                                    <div className="box cd-box-hour">
                                        <span className="eb-cd-digit">00</span>
                                        {hoursLabel ? (
                                            <span className="eb-cd-label">
                                                {hoursLabel}
                                            </span>
                                        ) : null}
                                    </div>
                                ) : null}

                                {showMinutes ? (
                                    <div className="box cd-box-minute">
                                        <span className="eb-cd-digit">00</span>
                                        {minutesLabel ? (
                                            <span className="eb-cd-label">
                                                {minutesLabel}
                                            </span>
                                        ) : null}
                                    </div>
                                ) : null}

                                {showSeconds ? (
                                    <div className="box cd-box-second">
                                        <span className="eb-cd-digit">00</span>
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
            );
        },
    },
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                endTimeStamp,
                showDays,
                showHours,
                showMinutes,
                showSeconds,
                daysLabel,
                hoursLabel,
                minutesLabel,
                secondsLabel,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`${blockId} eb-cd-wrapper`}>
                        <div
                            className="eb-cd-inner"
                            data-deadline-time={`${endTimeStamp || 0}`}
                        >
                            {showDays ? (
                                <div className="box cd-box-day">
                                    <span className="eb-cd-digit">00</span>
                                    {daysLabel ? (
                                        <span className="eb-cd-label">
                                            {daysLabel}
                                        </span>
                                    ) : null}
                                </div>
                            ) : null}

                            {showHours ? (
                                <div className="box cd-box-hour">
                                    <span className="eb-cd-digit">00</span>
                                    {hoursLabel ? (
                                        <span className="eb-cd-label">
                                            {hoursLabel}
                                        </span>
                                    ) : null}
                                </div>
                            ) : null}

                            {showMinutes ? (
                                <div className="box cd-box-minute">
                                    <span className="eb-cd-digit">00</span>
                                    {minutesLabel ? (
                                        <span className="eb-cd-label">
                                            {minutesLabel}
                                        </span>
                                    ) : null}
                                </div>
                            ) : null}

                            {showSeconds ? (
                                <div className="box cd-box-second">
                                    <span className="eb-cd-digit">00</span>
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
            );
        },
    },
];

export default deprecated;
