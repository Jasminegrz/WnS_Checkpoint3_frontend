import { useCreateCountryMutation } from "@/graphql/generated/schema";
import React from "react";

export default function NewCountry() {
  const [createCountry] = useCreateCountryMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
  };
  return <form onSubmit={handleSubmit}></form>;
}
