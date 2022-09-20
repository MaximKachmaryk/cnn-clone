import React from "react";

function CardHealth(props) {
    return <div className="card">
        <div className="card-title">{props.cardtitle}</div>
        <div className="card-img"><img src="https://cdn.cnn.com/cnnnext/dam/assets/220919072139-28-queen-funeral-large-169.jpg" alt="logo" /></div>
        <div className="card-sub-title">King Charles leaves handwritten note on top of the Queen's coffin</div>
        <div className="card-descr">Winter is fast approaching in Ukraine. Here's what comes next for the conflict</div>
    </div>
}
export default CardHealth;