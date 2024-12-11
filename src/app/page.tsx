import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-8 container max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-primary">Etkinlik Akışı ve Konuşmacılar</h1>
      
      <section id="day1" className='container max-w-3xl my-5'>
        <h2 className="text-3xl font-semibold mb-4 text-primary">11 Aralık Çarşamba</h2>
        <div className="space-y-4">
          <EventItem 
            time="10.00" 
            title="Açılış Konuşmaları" 
            speakers={[
              { 
                name: "Arman Alpcan Bilgi", 
                company: "İYTE Enerji Topluluğu", 
                role: "Yönetim Kurulu Başkan Yardımcısı", 
                image: "/speakers/alpcanbilgi.png" 
              },
              { 
                name: "Prof. Dr. Yusuf Baran", 
                company: "İYTE", 
                role: "Rektör", 
                image: "/speakers/yusufbaran.png" 
              },
              { 
                name: "Dr. Sencer Özen", 
                company: "İZKA", 
                role: "Yenilik ve Girişimcilik Politikaları Birim Başkanı", 
                image: "/speakers/sencerozen.png" 
              },
              { 
                name: "Özkan Mucuk", 
                company: "Ege Bölgesi Sanayi Odası", 
                role: "Yenilenebilir Enerji ve Enerji Verimliliği Çalışma Grubu Başkanı", 
                image: "/speakers/ozkanmucuk.png" 
              }
            ]}
          />
          <EventItem 
            time="10.30" 
            title="Türkiye Yenilenebilir Enerji Stratejileri, Düzenlemeleri ve Yenilikler" 
            speakers={[
              { 
                name: "Özkan Mucuk", 
                company: "EBSO", 
                role: "Yen. En. ve Enerji Verimliliği Çalışma Grubu Başkanı", 
                image: "/speakers/ozkanmucuk.png" 
              },
              { 
                name: "Mustafa Yıldız", 
                company: "Enercon", 
                role: "İş Geliştirme Müdürü", 
                image: "/speakers/mustafayildiz.png" 
              },
              { 
                name: "Koray Öden", 
                company: "ARI-ES Enerji", 
                role: "Genel Koordinatör", 
                image: "/defaultProfile.jpg" 
              },
              { 
                name: "Ebru Arıcı", 
                company: "TÜREB", 
                role: "Başkan Yardımcısı - Moderatör", 
                image: "/speakers/ebruarici.png" 
              }
            ]}
          />
          <EventItem time="11.50" title="Networking" />
          <EventItem time="12.00 - 13.50" title="Öğle Yemeği" />
          <EventItem 
            time="14.00" 
            title="Güneş Enerjisi" 
            speakers={[
              { 
                name: "Mehmet Aybaş", 
                company: "HSA Enerji", 
                role: "Satış ve İş Geliştirme Direktörü", 
                image: "/speakers/mehmetaybas.jpeg" 
              },
              { 
                name: "Aşkın Balaban", 
                company: "ACS Enerji", 
                role: "Satış ve Pazarlama Müdürü", 
                image: "/speakers/askinbalaban.jpg" 
              },
              { 
                name: "Deniz Garip Yılmaz", 
                company: "Enisolar", 
                role: "Teknik Koordinatör", 
                image: "/speakers/denizgaripyilmaz.png" 
              }
            ]}
          />
          <EventItem time="15.10" title="Networking" />
          <EventItem 
            time="15.30" 
            title="Enerjide Dijitalleşme ve Yapay Zekanın Yeri" 
            speakers={[
              { 
                name: "Ufuk Yaman", 
                company: "USENS Energy Solutions", 
                role: "Kurucu", 
                image: "/speakers/ufukyaman.png" 
              },
              { 
                name: "Kıvanç Kırlı", 
                company: "Enerjeet", 
                role: "Kurucu", 
                image: "/speakers/kivanckirli.png" 
              }
            ]}
          />
          <EventItem time="16.40" title="Networking ve Kapanış" />
        </div>
      </section>

      <section id="day2" className='container max-w-3xl my-5'>
        <h2 className="text-3xl font-semibold mb-4 text-primary">12 Aralık Perşembe</h2>
        <div className="space-y-4">
          <EventItem 
            time="10.10" 
            title="Açılış Konuşmaları" 
            speakers={[
              { 
                name: "Ayşe Naz Akar", 
                company: "İYTE Enerji Topluluğu", 
                role: "Denetim Kurulu Başkan Yardımcısı", 
                image: "/speakers/aysenazakar.jpg" 
              },
            ]}
          />
          <EventItem 
            time="10.20" 
            title="Rüzgar Enerjisinde Bakım, İşletme ve Fırsatlar" 
            speakers={[
              { 
                name: "Nihat Arı", 
                company: "Enerjisa Üretim", 
                role: "Rüzgar ve Güneş Enerjisi İşletme ve Bakım Müdürü", 
                image: "/speakers/nihatari.jpg" 
              },
              { 
                name: "Ahmet Paksoy", 
                company: "Nordex Türkiye", 
                role: "Yerel Operasyon Müdürü", 
                image: "/speakers/ahmetpaksoy.png" 
              },
              { 
                name: "Meltem Köknar", 
                company: "RüzgarAdam", 
                role: "", 
                image: "/speakers/meltemkoknar.png" 
              }
            ]}
          />
          <EventItem time="12.20" title="Networking" />
          <EventItem time="12.20 - 13.50" title="Öğle Yemeği" />
          <EventItem 
            time="14.00" 
            title="Geleceğin Enerjisi, Hidrojen ve Enerji Depolama Sistemleri" 
            speakers={[
              { 
                name: "İbrahim Horoz", 
                company: "İzmirgaz", 
                role: "Ar-Ge Yöneticisi", 
                image: "/speakers/ibrahimhoroz.png" 
              },
              { 
                name: "Akgün Çağlar Erdoğan", 
                company: "KONTEK Enerji", 
                role: "Enerji Depolama Direktörü", 
                image: "/speakers/akguncaglarerdogan.png" 
              },
              { 
                name: "Dr. Başar Çağlar", 
                company: "İzmir Yüksek Teknoloji Enstitüsü", 
                role: "Enerji Sistemleri Mühendisliği Yardımcı Doçent", 
                image: "/speakers/basarcaglar.png" 
              }
            ]}
          />
          <EventItem time="15.10" title="Networking" />
          <EventItem 
            time="15.30" 
            title="Otomotiv Sektöründe Elektrikli Ulaşım Araçları" 
            speakers={[
              { 
                name: "Dr. Can Dikmen", 
                company: "TEMSA", 
                role: "Mobilite Teknolojileri Lideri", 
                image: "/speakers/candikmen.png" 
              },
              { 
                name: "Hande Bezci Zeren", 
                company: "Ford Otosan", 
                role: "Araç ve ATS Test Lideri", 
                image: "/speakers/handebezicizeren.png" 
              },
              { 
                name: "Buşra Nur Yüceur", 
                company: "Amperino", 
                role: "Termal Sistem Tasarımı ve CFD Mühendisi", 
                image: "/speakers/busranuryucenur.png" 
              }
            ]}
          />
          <EventItem time="17.00" title="Networking ve Kapanış" />
        </div>
      </section>
    </div>
  )
}

interface Speaker {
  name: string;
  company: string;
  role: string;
  image: string;
}

interface EventItemProps {
  time: string;
  title: string;
  speakers?: Speaker[];
}

function EventItem({ time, title, speakers }: EventItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="text-primary">{time}</span> - {title}
        </CardTitle>
      </CardHeader>
      {speakers && (
        <CardContent>
          <div className="space-y-2 flex flex-col gap-4">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Image className='w-24 h-24 border rounded-lg object-cover' src={speaker.image} alt={speaker.name || speaker.company || speaker.role} width={100} height={100} />
                <div className='flex flex-col gap-2 justify-center items-start'>
                  <span className='font-light'>{speaker.company}</span>
                  <div className='flex flex-col'>
                    <span className='font-black text-lg'>{speaker.name}</span>
                    <span className='font-thin leading-tight text-sm'>{speaker.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )
}

