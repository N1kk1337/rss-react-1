import React from "react";
class EmojiCounter extends React.Component {
    render() {
        const emojis = Array.from({ length: this.props.count }, (_, i) => (React.createElement("span", { key: i }, this.props.emoji)));
        return (React.createElement("span", null, emojis));
    }
}
;
export default EmojiCounter;
