import CountryCard from "@/components/CountryCard";
import { useCountriesQuery } from "@/graphql/generated/schema";
import Link from "next/link";

export default function Home() {
  const { data } = useCountriesQuery();
  const countries = data?.countries || [];
  return (
    <>
      {countries.map((country) => (
        <Link href={`/countries/${country.code}`}>
          <CountryCard key={country.id} country={country} />
        </Link>
      ))}
    </>
  );
}
