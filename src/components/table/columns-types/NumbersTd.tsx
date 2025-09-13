import React from "react";
import TextTd from "./TextTd";

type Props = {
    number: number;
    format?: "default" | "formatted" | "compact";
};

export default function NumbersTd({ number, format = "default" }: Props) {

    const formatNumber = (num: number): string => {

        switch (format) {

            case "formatted":
                return num.toLocaleString();

            case "compact":
                return new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    compactDisplay: "short",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3,
                }).format(num);

            case "default":
            default:
                return num.toString();

        }

    };

    return <React.Fragment>
        <TextTd text={formatNumber(number)} />
    </React.Fragment>;

}
