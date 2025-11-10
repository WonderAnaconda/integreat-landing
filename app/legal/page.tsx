// app/legal/page.tsx
export const metadata = {
    title: "Legal Notice – Integreat AI Systems & Consulting",
    description: "Legal information in accordance with the Maltese Electronic Commerce Act (Cap. 426).",
  };
  
  export default function LegalPage() {
    return (
      <main className="max-w-3xl mx-auto py-16 px-6 text-gray-300">
        <h1 className="text-3xl font-semibold mb-6">Legal Notice</h1>
  
        <p className="mb-4">This website is operated by:</p>
        <p className="mb-6">
          <strong>Integreat – AI Systems & Consulting</strong><br />
          Daniel Kretschmer<br />
          Triq Birkirkara<br />
          St. Julians, Malta
        </p>
  
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p className="mb-6">E-Mail: hello@integreat.ing</p>
  
        <h2 className="text-xl font-semibold mb-2">Business Information</h2>
        <p className="mb-6">
          Independent consulting and technical implementation of AI automation systems.<br />
        </p>
  
        <h2 className="text-xl font-semibold mb-2">Legal Basis</h2>
        <p className="mb-6">
          This information is provided in accordance with the Electronic Commerce Act (Cap. 426, Laws of Malta)
          and the Information to be Provided by Service Providers Regulations (L.N. 251 of 2002).
        </p>
      </main>
    );
  }
  