import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Can you summarize upcming events at Long View?",
        value: "Can you summarize upcming events at Long View"
    },
    { text: "What is DPi60 at Long View?", value: "What is DPi60 at Long View?" },
    { text: "What is an Employee Resource Group?", value: "What is an Employee Resource Group?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
