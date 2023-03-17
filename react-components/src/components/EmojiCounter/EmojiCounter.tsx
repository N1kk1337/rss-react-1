import React from "react";



export interface EmojiCounterProps {
    emoji: string;
    count: number;
}

export interface EmojiCounterState {

}

class EmojiCounter extends React.Component<EmojiCounterProps, EmojiCounterState> {


    render() {
        const emojis = Array.from({ length: this.props.count }, (_, i) => (
            <span key={i}>{this.props.emoji}</span>
        ));
        return (<span>{emojis}</span>
        )
    }
};

export default EmojiCounter;