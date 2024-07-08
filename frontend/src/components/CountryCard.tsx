import { Country } from "@/types";
import React from "react";
type CountryProps = {
  country: Country;
};
export default function CountryCard({
  country: { name, code, emoji, continent },
}: CountryProps) {
  return (
    <div className="m-auto p-3 w-[400px] border rounded-lg shadow-md mb-3">
      <h1>
        Pays: {name} {emoji}
      </h1>
      <p>Code: {code}</p>
      <p>Continent: {continent ? continent?.name : "N/A"}</p>
    </div>
  );
}
