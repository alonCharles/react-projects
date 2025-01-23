import type { Route } from "./+types/country";

export async function clientLoader({params}: Route.LoaderArgs) {
    const countryName = params.countryName
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await res.json();
    return data
}

export default function Country({loaderData}: Route.ComponentProps) {
    const country = {
        name: loaderData[0]?.name?.common || "N/A",
        official: loaderData[0]?.name?.official || "N/A",
        region: loaderData[0]?.region || "N/A",
        subregion: loaderData[0]?.subregion || "N/A",
        capital: loaderData[0]?.capital || "N/A",
        population: loaderData[0]?.population || "N/A",
        flagUrl: loaderData[0]?.flags?.png || "",
    }
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-gray-900">{country.name}</h2>
                <div className="space-y-2 text-gray-700">
                    <p>
                        <span className="font-semibold">Offcial Name: {country.official}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Region: {country.region}</span>
                    </p>
                    <p>
                        <span className="font-semibold"> Sub Region: {country.subregion}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Capital: {country.capital}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Population: {country.population.toLocaleString()}</span>
                    </p>
                </div>
            </div>
            {country.flagUrl && (
                <div className="flex justify-center items-center">
                    <img src={country.flagUrl} className="w-56 h-auto border rounded shadow-lg"/>
                </div>
            )}
        </div>
    )
}