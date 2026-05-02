import HomePage from "@/Components/HomePage/card";
import Banner from "@/Components/HomePage/Banner";
import NewArrivals from "@/Components/Shared/NewArrivals";

export default function Home() {
  return (
    <>
      <Banner />
      <NewArrivals />
      <HomePage />
    </>
  );
}
