import Header from "../components/Header";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      <div className="pt-32">
        <h2 className="text-xl font-bold">Privacy Policy</h2>
        
        <div className="container mx-auto">
          The Epigram bot does not collect user information.
        </div>
      </div>
    </div>
  );
}
