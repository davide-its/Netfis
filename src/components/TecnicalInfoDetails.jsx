/* 
  TecnicalInfoDetails Component
  -----------------------------
  Displays additional technical information about a movie or TV series.
  - Shows tagline if available.
  - Lists spoken languages.
  - Lists production companies.
  - Props:
      details: object containing movie/series technical details (tagline, spoken_languages, production_companies)
*/

export default function TecnicalInfoDetails({ details }) {
    return (
        <>
            {details.tagline && (
                <div>
                    <span className="font-bold">Tagline:</span>
                    <p className="italic">{details.tagline}</p>
                </div>
            )}

            <div>
                <span className="font-bold">Lingue:</span>
                <p>{details.spoken_languages?.map((l) => l.english_name).join(", ")}</p>
            </div>

            <div>
                <span className="font-bold">Produzione:</span>
                <p>{details.production_companies?.map((c) => c.name).join(", ")}</p>
            </div>
        </>
    );
}