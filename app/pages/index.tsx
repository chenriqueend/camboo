// pages/index.tsx
import { GetServerSideProps } from "next";
import { supabase } from "../../utils/supabaseClient";

interface HomeProps {
  data: any; // Substitua `any` pelo tipo correto dos seus dados, se souber
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Dados do Supabase:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await supabase.from("your_table").select("*");

  if (error) {
    console.log(error);
    return {
      props: {
        data: [],
      },
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default Home;
