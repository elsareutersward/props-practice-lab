import React from 'react';

export const CardFirst = (props) => {
  const { cardTop, title, titleText, emoji, cardBottom, 
          subtitleText, button, changeState, buttonText } = props;

  return (
    <div className="Card">
      <div className={`CardTop ${cardTop}`}>
        <h1 className={title}>
          {titleText}
        </h1>
        <div className="emojiContainer">
          {emoji}
        </div>
      </div>
      <div className={`CardBottom ${cardBottom}`}>
        <p>{subtitleText}</p>
        <button type="button" className={button} onClick={changeState}>{buttonText}</button>
      </div>
    </div>
  );
}