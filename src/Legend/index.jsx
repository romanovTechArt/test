import React from "react";
import './legend.css'

const Legend = () => {
    return (
        <section className={"legend"}>
            <p>Legend</p>
            <div className={"legend__list"}>
                <div className={"legend__list__item legend__list__item_urgent"}>= Urgent</div>
                <div className={"legend__list__item legend__list__item_bug-fix"}>= Bug fix</div>
                <div className={"legend__list__item legend__list__item_features"}>= Features</div>
            </div>
        </section>
    )
}
export default Legend