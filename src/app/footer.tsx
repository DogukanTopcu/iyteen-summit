import React from 'react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p>Email: info@techsummit.com</p>
            <p>Phone: +90 123 456 7890</p>
          </div> */}
          <div>
            <h3 className="font-bold text-lg mb-4">Konum</h3>
            <p>İYTE Gösteri Merkezi</p>
            <p>İzmir Yüksek Teknoloji Enstitüsü</p>
            <p>Urla, İzmir</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Bizi Takip Et</h3>
            <div className="flex space-x-4">
              <a target='_blank' href="https://www.instagram.com/iytenerjitoplulugu/" className="hover:text-green-300">Instagram</a>
              <a target='_blank' href="https://www.linkedin.com/company/i%CC%87yte-enerji-toplulu%C4%9Fu/posts/?feedView=all" className="hover:text-green-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© 2024 İYTE Enerji Topluluğu.</p> 
          <p>Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}