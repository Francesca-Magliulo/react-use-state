
import BaseCard from "./BaseCard"

export default function BaseCardList({ languages }) {
    return (
        <div>

            <div className="card-container">

                {languages.map((language) => (
                    <BaseCard
                        key={language.id}
                        title={language.title}
                        description={language.description}
                    />

                ))}
            </div>
        </div>
    )
}