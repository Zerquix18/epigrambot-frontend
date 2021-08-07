import Header from "../components/Header";

export default function TOS() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      <div className="pt-32">
        <h2 className="text-xl font-bold">Terms and Conditions</h2>
        
        <div className="container mx-auto">
          <p>EpigramBot shall not be liable for any statements or conduct of any third party using the service. By using EpigramBot you may be exposed to Content that is indecent, objectionable or offensive.</p>

          <p>EpigramBot will not be liable in any way for any Content, including, but not limited to, any errors or omissions in any Content. EpigramBot will not be liable for any loss or damage of any kind incurred as a result of the use of any Content posted, emailed, transmitted or otherwise made available on EpigramBot. EpigramBot assumes no responsibility for the timeliness, deletion, miss-delivery or failure to store any User content, communication or personal settings.</p>

          <p>You agree to indemnify and hold EpigramBot, its officers and employees exempt from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of Content you submit, transmit, post or otherwise make available through EpigramBot.</p>
        </div>
      </div>
    </div>
  );
}
