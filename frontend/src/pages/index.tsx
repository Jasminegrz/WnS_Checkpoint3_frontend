import CountryCard from "@/components/CountryCard";
import { useCountriesQuery } from "@/graphql/generated/schema";

export default function Home() {
  const { data } = useCountriesQuery();
  console.log("data: ", data);
  const countries = data?.countries || [];
  return (
    <>
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </>
  );
}
