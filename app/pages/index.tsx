// pages/index.js
import { supabase } from "../../utils/supabaseClient";

export default function Home({ data }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Dados do Supabase:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from("your_table").select("*");

  if (error) {
    console.log(error);
  }

  return {
    props: {
      data,
    },
  };
}
