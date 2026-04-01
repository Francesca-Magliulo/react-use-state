import { useState } from "react";

export default function BonusSelector({ languages }) {
    const [selected, setSelected] = useState(languages[0])

    return (
        <div className="card-bonus">
            <div className="btn-bonus">
                {languages.map((language) => (
                    <button key={language.id} className={selected === language ? "active" : ""} onClick={() => setSelected(language)}>
                        {language.title}
                    </button>
                ))}
            </div>

            <div className="selected">
                <h3>{selected.title}</h3>
                <p>{selected.description}</p>
            </div>
        </div>
    )
}