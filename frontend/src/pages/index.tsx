import CountryCard from "@/components/CountryCard";
import NewCountry from "@/components/NewCountry";
import { useCountriesQuery } from "@/graphql/generated/schema";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { data, refetch, error, loading } = useCountriesQuery();
  const countries = data?.countries || [];
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      refetch();
    }
  }, [isOpen, refetch]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="m-auto p-3 w-[90%] max-w-2xl border rounded-lg shadow-md mb-3">
        <button className="font-bold" onClick={onOpen}>
          Ajouter un pays
        </button>
        {isOpen && <NewCountry onOpen={onOpen} refetch={refetch} />}
      </div>

      {countries.map((country) => (
        <Link href={`/countries/${country.code}`}>
          <CountryCard key={country.id} country={country} />
        </Link>
      ))}
    </>
  );
}
