import { Dispatch, SetStateAction } from "react";
import { Blip } from "../../Blip";
import "./blips.css";
export declare function Blips({ selected, setSelected, entries }: Props): JSX.Element;
declare type Props = {
    selected?: string;
    setSelected: Dispatch<SetStateAction<string | undefined>>;
    entries: Blip[];
};
export {};
