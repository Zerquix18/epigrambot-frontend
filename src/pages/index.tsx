import Header from "../components/Header";
import HeroHome from "../components/HeroHome";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
      </main>
    </div>
  );
}
