import { useCountryQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import React from "react";

export default function CountryDetails() {
  const router = useRouter();
  const { code } = router.query;
  const { data, error, loading } = useCountryQuery({
    variables: { code: code as string },
  });
  const country = data?.country;

  if (!code) return <div>Chargement...</div>;
  if (!country) return <div>Pays non trouvé</div>;
  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="m-auto p-3 w-[90%] max-w-2xl border rounded-lg shadow-md text-center">
      <div>{country.emoji}</div>
      <h1>
        Name: {country.name} ({country.code})
      </h1>
      <p>Continent : {country.continent ? country.continent.name : "N/A"}</p>
    </div>
  );
}
