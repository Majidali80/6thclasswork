import Image from "next/image";
import Form from "./components/Forms";
import Grid from "./components/Grid";


export default function Home() {
  return (
    <div>
      <Form />
      <div className=" text-center text-4xl p-2 text-cyan-500"> 2ND TOPIC </div>
      <Grid />
    </div>
    
  );
}
