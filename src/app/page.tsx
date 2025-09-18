import { getServerSession } from "next-auth";
import MainProducts from "./_components/MainProducts/MainProducts";
import MneuSlider from "./_components/MneuSlider/MneuSlider"

import SconedSlider from "./_components/SconedSlider/SconedSlider"
import { options } from "./api/auth/[...nextauth]/route";

export default async function Home() {

// const session=await getServerSession(options)
// console.log(session)
  return (
    <>
    <MneuSlider/>
    <SconedSlider/>
 <MainProducts/>
    </>
  );
}
