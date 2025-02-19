import {
  useContinentsQuery,
  useCreateCountryMutation,
} from "@/graphql/generated/schema";
import { useRouter } from "next/router";

type NewCountryProps = {
  onOpen: () => void;
  refetch: () => void;
};
export default function NewCountry({ onOpen, refetch }: NewCountryProps) {
  const [createCountry] = useCreateCountryMutation();
  const { data, error, loading } = useContinentsQuery();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJson: any = Object.fromEntries(formData.entries());
    formJson.continent = { id: parseInt(formJson.continent, 10) };
    console.log(formJson);

    try {
      await createCountry({ variables: { data: formJson } });
      refetch();
      onOpen();
      router.push(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-3  gap-3">
          <div className="flex flex-col">
            <label htmlFor="name">Nom du pays</label>
            <input
              className="rounded-sm"
              type="text"
              name="name"
              placeholder="Nom du pays"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="code">Code</label>
            <input
              className="rounded-sm"
              type="text"
              name="code"
              placeholder="Code"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emoji">Emoji</label>
            <input
              className="rounded-sm"
              type="text"
              name="emoji"
              placeholder="Emoji"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="continent">Continent</label>
            <select id="continent" name="continent">
              {data?.continents.map((continent) => (
                <option key={continent.id} value={continent.id}>
                  {continent.name}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-rose-500 rounded-lg w-max px-2 text-white"
            type="submit"
          >
            Ajouter
          </button>
        </div>
      </form>
    </>
  );
}
