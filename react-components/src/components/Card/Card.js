import EmojiCounter from '../EmojiCounter/EmojiCounter';
import React from 'react';
import styles from './Card.module.scss';
class Card extends React.Component {
    render() {
        const handleLike = () => {
            alert('Do you like this cat? He likes you too!');
        };
        return (React.createElement("div", { className: styles.card },
            React.createElement("img", { className: styles.card__img, src: this.props.img, alt: "" }),
            React.createElement("ul", { className: styles.card__stats },
                React.createElement("li", null,
                    React.createElement("p", null,
                        "Breed: ",
                        React.createElement("span", null, this.props.breed))),
                React.createElement("li", null,
                    React.createElement("p", null,
                        "Fluffiness: ",
                        React.createElement(EmojiCounter, { emoji: "\uD83D\uDC31", count: this.props.sheddingLevel }))),
                React.createElement("li", null,
                    React.createElement("p", null,
                        "Cuteness: ",
                        React.createElement(EmojiCounter, { emoji: "\u2764\uFE0F", count: this.props.friendly }))),
                React.createElement("li", null,
                    React.createElement("p", null,
                        "Temperament: ",
                        this.props.temperament))),
            React.createElement("div", { className: styles.card__footer },
                React.createElement("button", { onClick: handleLike }, "Like \u2764\uFE0F"),
                React.createElement("button", { onClick: () => {
                        navigator.clipboard.writeText(this.props.img);
                    } }, "Share \uD83D\uDD17"),
                React.createElement("a", { href: this.props.wiki }, "Breed Info"))));
    }
}
export default Card;
