import React from "react";
import "./bussines.css";
function BussinesCards(props) {
    return <div className="bussines-card bussines">
        <div className="main-card">
            <div className="card-title"></div>
            <div className="card-img"><img src="https://cdn.cnn.com/cnnnext/dam/assets/220919120101-kharkiv-091822-large-tease.jpg" alt="logo" /></div>
            <div className="card-sub-title">King Charles leaves handwritten note on top of the Queen's coffin</div>
            <div className="card-descr">Winter is fast approaching in Ukraine. Here's what comes next for the conflict</div>
        </div>
        <div className="little-card">
            <div className="card">
                <div className="card-title">{props.cardtitle}</div>
                <div className="card-img"><img src="https://cdn.cnn.com/cnnnext/dam/assets/220919215948-00-hurricane-fiona-091922-medium-tease.jpg" alt="logo" /></div>
                <div className="card-sub-title">King Charles leaves handwritten note on top of the Queen's coffin</div>
                <div className="card-descr">Winter is fast approaching in Ukraine. Here's what comes next for the conflict</div>
            </div>
            <div className="card">
                <div className="card-title">{props.cardtitle}</div>
                <div className="card-img"><img src="https://cdn.cnn.com/cnnnext/dam/assets/220919215948-00-hurricane-fiona-091922-medium-tease.jpg" alt="logo" /></div>
                <div className="card-sub-title">King Charles leaves handwritten note on top of the Queen's coffin</div>
                <div className="card-descr">Winter is fast approaching in Ukraine. Here's what comes next for the conflict</div>
            </div>
        </div>
        <div className="card-with-links">
            <div className="card">
                <div className="card-title">{props.cardtitle}</div>
                <div className="card-img"><img src="https://cdn.cnn.com/cnnnext/dam/assets/220920040901-china-tourism-0920-medium-tease.jpg" alt="logo" /></div>
                <div className="card-sub-title">King Charles leaves handwritten note on top of the Queen's coffin</div>
                <div className="card-descr">Winter is fast approaching in Ukraine. Here's what comes next for the conflict</div>
            </div>
            <div className="card">
                <div className="card-title">{props.cardtitle}</div>
                <div className="card-img"><img src="https://cdn.cnn.com/cnnnext/dam/assets/220920040901-china-tourism-0920-medium-tease.jpg" alt="logo" /></div>
                <div className="card-sub-title">King Charles leaves handwritten note on top of the Queen's coffin</div>
                <div className="card-descr">Winter is fast approaching in Ukraine. Here's what comes next for the conflict</div>
            </div>
        </div>
    </div>
}
export default BussinesCards;