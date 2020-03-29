import React from 'react';

export const CardSecond = (props) => {
  const { cardTop, title, titleText, emoji, cardBottom } = props;

  return (
    <div className="Card">
      <div className={`SecondCardTop ${cardTop}`}>
        <h1 className={title}>
          {titleText}
        </h1>
        
      </div>
      <div className={`SecondCardBottom ${cardBottom}`}>
        <div className="SecondEmojiContainer">
          {emoji}
        </div>
      </div>
    </div>
  );
}