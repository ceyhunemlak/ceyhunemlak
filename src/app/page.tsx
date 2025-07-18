"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Countdown from 'react-countdown';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Geri sayım için hedef tarih - 8 Temmuz 2025 saat 12:00
  const targetDate = new Date("2025-07-08T12:00:00+03:00");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Sayaç renderer bileşeni
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return (
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ffbf00]">Sitemiz Yayında!</h2>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-16 animate-fadeIn-delay-2">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-[#ffbf00]">{days}</span>
            <span className="text-sm text-gray-300 mt-1">Gün</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-[#ffbf00]">{hours}</span>
            <span className="text-sm text-gray-300 mt-1">Saat</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-[#ffbf00]">{minutes}</span>
            <span className="text-sm text-gray-300 mt-1">Dakika</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-[#ffbf00]">{seconds}</span>
            <span className="text-sm text-gray-300 mt-1">Saniye</span>
          </div>
        </div>
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000000]">
        <div className="flex flex-col items-center">
          <Image 
            src="/images/SİYAH.png" 
            alt="Ceyhun Emlak Logo" 
            width={200} 
            height={60} 
            className="animate-pulse"
          />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Arkaplan overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Arkaplan görsel (isteğe bağlı) */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="text-[#ffbf00] text-2xl font-bold">
          <Image 
            src="/images/BEYAZ.png" 
            alt="Ceyhun Emlak Logo" 
            width={150} 
            height={45} 
            priority
          />
        </div>
        <a 
          href="#contact" 
          className="bg-[#ffbf00] text-black px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          İletişim
        </a>
      </header>

      {/* Ana içerik */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 py-10">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          {/* Ana başlık */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center text-white animate-fadeIn">
            ÇOK YAKINDA
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-12 text-[#ffbf00] text-center animate-fadeIn-delay">
            Yenilenmiş Yüzüyle Hizmette!
          </h2>

          {/* Geri sayım - React Countdown ile */}
          <Countdown 
            date={targetDate} 
            renderer={countdownRenderer}
          />

          {/* İlan Siteleri */}
          <div className="mb-12 w-full">
            <h3 className="text-center text-xl font-medium mb-6 text-[#ffbf00]">
              İlanlarımızı Görüntülemek İçin
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://ceyhun.sahibinden.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Image src="/images/sahibinden.png" alt="Sahibinden.com" width={24} height={24} className="mr-2" />
                <span>Sahibinden.com</span>
              </a>
              <a 
                href="https://www.hepsiemlak.com/emlak-ofisi/ceyhun-emlak-tokat-70414" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Image src="/images/hepsiemlak.png" alt="Hepsiemlak.com" width={24} height={24} className="mr-2" />
                <span>Hepsiemlak.com</span>
              </a>
              <a 
                href="https://www.emlakjet.com/emlak-ofisleri-detay/ceyhun-emlak-tokat-366865/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Image src="/images/emlakjet.png" alt="Emlakjet.com" width={24} height={24} className="mr-2" />
                <span>Emlakjet.com</span>
              </a>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div id="contact" className="w-full max-w-2xl mx-auto bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-center text-xl font-medium mb-6 text-[#ffbf00]">
              İletişim Bilgileri
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffbf00" className="w-5 h-5 mt-1 flex-shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm">Cep: 0 (532) 385 04 20</p>
                  <p className="text-sm">Sabit: 0 (356) 228 0 444</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffbf00" className="w-5 h-5 mt-1 flex-shrink-0">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <div>
                  <p className="text-sm">ceyhunemlak@hotmail.com</p>
                  <p className="text-sm">ceyhunemlak60@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffbf00" className="w-5 h-5 mt-1 flex-shrink-0">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm mb-2">Çarşı Ofis: Alipaşa Mah. Gazipaşa Cad. No:3/A Ceysuit Tokat/Merkez</p>
                  <p className="text-sm">Karşıyaka Ofis: Altıyüzevler Mah. Vali Ayhan Çevik Bulv. Yunus Emre Sit. A Blok Tokat/Merkez</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="mb-8">
            <h3 className="text-center text-lg font-medium mb-4 text-[#ffbf00]">
              Bizi Takip Edin
            </h3>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/CeyhunGayrimenkulEmlak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#ffbf00] text-black rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/ceyhungayrimenkul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#ffbf00] text-black rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 p-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Ceyhun Emlak. Tüm hakları saklıdır.</p>
        <p className="text-xs mt-1">Tokat&apos;ın Güvenilir Gayrimenkul Danışmanı</p>
      </footer>
    </main>
  );
}
