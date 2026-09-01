import { useState, useEffect } from 'react'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 5)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const waLink = "https://api.whatsapp.com/send/?phone=6285696351715&text=Halo+Admin+%E2%98%BA+Saya+ingin+menggunakan+layanan+Delivery+Aki+24+Jam.+Mohon+bantu+informasinya.+Terima+kasih.&type=phone_number&app_absent=0"

  const brands = [
    { name: "Brand 1", src: "/assets/brand/Desain tanpa judul.png" },
    { name: "Brand 2", src: "/assets/brand/Desain tanpa judul (1).png" },
    { name: "Brand 3", src: "/assets/brand/Desain tanpa judul (2).png" },
    { name: "Brand 4", src: "/assets/brand/Desain tanpa judul (3).png" },
    { name: "Brand 5", src: "/assets/brand/Desain tanpa judul (4).png" },
    { name: "Brand 6", src: "/assets/brand/Desain tanpa judul (5).png" },
    { name: "Brand 7", src: "/assets/brand/Desain tanpa judul (6).png" },
    { name: "Brand 8", src: "/assets/brand/Desain tanpa judul (7).png" }
  ]

  const advantages = [
    {
      title: "Respon Cepat",
      desc: "Layanan Cepat & Siap Antar-Pasang: Aki langsung diantar dan dipasang di lokasi Anda.",
      img: "/assets/keunggulan/1000400472-removebg-preview.png"
    },
    {
      title: "Gratis Pemasangan",
      desc: "Tidak ada biaya tambahan untuk pemasangan aki baru kendaraan Anda.",
      img: "/assets/keunggulan/1000400474-removebg-preview.png"
    },
    {
      title: "Teknisi Berpengalaman",
      desc: "Pemasangan dilakukan oleh teknisi profesional untuk menjaga keamanan kelistrikan mobil Anda.",
      img: "/assets/keunggulan/teknisi.png"
    },
    {
      title: "Aki Original",
      desc: "Dijamin 100% original, baru, dan bergaransi resmi pabrik.",
      img: "/assets/keunggulan/1000400475-removebg-preview.png"
    },
    {
      title: "Harga Transparan",
      desc: "Harga jujur dan transparan sudah mencakup unit aki, jasa antar, dan biaya pasang.",
      img: "/assets/keunggulan/1000400476-removebg-preview.png"
    },
    {
      title: "Tukar Tambah",
      desc: "Tukarkan aki bekas Anda untuk mendapatkan penawaran potongan harga terbaik.",
      img: "/assets/keunggulan/1000400477-removebg-preview.png"
    }
  ]

  const faqs = [
    {
      q: "Apakah layanan tersedia selama 24 jam?",
      a: "Ya. Kami siap melayani selama 24 jam, termasuk malam hari, akhir pekan, dan hari libur, sehingga Anda tetap mendapatkan bantuan saat aki kendaraan bermasalah."
    },
    {
      q: "Apakah teknisi datang langsung ke lokasi?",
      a: "Ya, teknisi kami akan datang langsung ke lokasi Anda untuk melakukan pengecekan dan pemasangan aki."
    },
    {
      q: "Apakah aki yang disediakan original dan bergaransi?",
      a: "Tentu saja. Semua produk aki yang kami sediakan adalah 100% original dan dilengkapi dengan garansi resmi."
    },
    {
      q: "Metode pembayaran apa saja yang tersedia?",
      a: "Kami menerima pembayaran tunai maupun transfer bank setelah pemasangan selesai dilakukan."
    }
  ]

  return (
    <div className="bg-surface text-text-main antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col font-sans">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 h-20 bg-white/95 backdrop-blur-md border-b border-surface-variant/80 transition-all duration-300 shadow-sm">
        <a className="flex items-center gap-3 hover:scale-105 transition-transform duration-300" href="#">
          <img src="/assets/logo/logo.png" alt="AkiSulSel Logo" className="h-12 w-auto object-contain rounded-md drop-shadow-sm" />
          <span className="font-extrabold text-2xl text-primary tracking-tighter hidden sm:inline-block">akisulsel.com</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-text-muted hover:text-primary font-bold text-sm tracking-wide hover:scale-115 transition-all duration-300" href="#">HOME</a>
          <a className="text-text-muted hover:text-primary font-bold text-sm tracking-wide hover:scale-115 transition-all duration-300" href="#services">LAYANAN</a>
          <a className="text-text-muted hover:text-primary font-bold text-sm tracking-wide hover:scale-115 transition-all duration-300" href="#kontak">KONTAK KAMI</a>
        </div>

        <a className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 hidden md:block text-center shimmer-btn shadow-md hover:shadow-lg" href={waLink} target="_blank" rel="noopener noreferrer">
          Hubungi Kami
        </a>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary hover:scale-110 active:scale-90 transition-all duration-200 flex items-center justify-center p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-surface-variant flex flex-col p-6 space-y-4 md:hidden shadow-xl animate-fade-in z-50">
            <a
              className="text-text-muted hover:text-primary font-bold text-base py-2 border-b border-surface-variant/50 transition-colors"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a
              className="text-text-muted hover:text-primary font-bold text-base py-2 border-b border-surface-variant/50 transition-colors"
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LAYANAN
            </a>
            <a
              className="text-text-muted hover:text-primary font-bold text-base py-2 border-b border-surface-variant/50 transition-colors"
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              KONTAK KAMI
            </a>
            <a
              className="bg-primary text-white font-bold text-base px-6 py-3 rounded-lg text-center shimmer-btn block shadow-md"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </nav>

      <main className="pt-20 flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] md:min-h-[800px] flex items-center px-6 md:px-16 py-20 overflow-hidden bg-surface">
          {/* Background with Zoom animation */}
          <div className="absolute inset-0 z-0 mix-blend-normal overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center absolute inset-0 filter brightness-110 contrast-105 saturate-110 animate-bg-zoom"
              style={{ backgroundImage: `url('/assets/hero.png')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/50 to-transparent md:bg-gradient-to-r md:from-surface/85 md:via-surface/60 md:to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl fade-in-up animate-float visible">
            <span className="inline-block px-4 py-1.5 mb-6 bg-primary/10 text-primary font-bold rounded-full border border-primary/20 uppercase tracking-widest text-xs shadow-sm">
              Buka 24 Jam Non-Stop
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-main mb-6 leading-[1.15] tracking-tight drop-shadow-sm">
              Toko Aki Makassar <span className="text-surface-tint relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[6px] after:bg-secondary-container/40 after:-z-10">Terbaik & Terpercaya</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-main bg-white/80 backdrop-blur-sm p-5 rounded-2xl mb-10 max-w-2xl leading-relaxed font-semibold shadow-sm border border-white/50">
              Mobil susah starter di jalan atau rumah? AkiSulSel adalah spesialis layanan antar pasang aki mobil 24 jam di Makassar dan seluruh wilayah Sulawesi Selatan. Produk bergaransi resmi pabrik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="inline-flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-fixed font-bold text-base px-8 py-4.5 rounded-xl hover:scale-105 transition-all duration-300 shimmer-btn shadow-xl shadow-secondary-container/40 hover:shadow-secondary-container/60 hover:rotate-1" href={waLink} target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                Hubungi Sekarang
              </a>
            </div>
          </div>
        </section>

        {/* Brands Section (Seamless Infinite Loop Marquee) */}
        <section className="w-full overflow-hidden py-12 bg-white border-y border-surface-variant/80 opacity-95">
          <div className="animate-marquee flex gap-16 items-center">
            {brands.map((brand, idx) => (
              <img
                key={`b1-${idx}`}
                alt={brand.name}
                className="h-20 w-auto object-contain transition-all duration-300 hover:scale-125 cursor-pointer"
                src={brand.src}
              />
            ))}
            {brands.map((brand, idx) => (
              <img
                key={`b2-${idx}`}
                alt={brand.name}
                className="h-20 w-auto object-contain transition-all duration-300 hover:scale-125 cursor-pointer"
                src={brand.src}
              />
            ))}
          </div>
        </section>

        {/* Why Choose Us (Interactive advantages cards) */}
        <section className="py-24 px-6 md:px-16 bg-primary text-on-primary" id="services">
          <div className="fade-in-up text-center mb-16 visible">
            <span className="text-secondary-fixed font-bold uppercase tracking-widest mb-3 block text-sm">Toko Aki Makassar Terbaik</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-primary mb-6 drop-shadow-sm">Kenapa Memilih Layanan Ganti Aki Kami?</h2>
            <div className="w-24 h-1 bg-secondary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 bg-primary-container/30 border border-primary-fixed/10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-primary-container/50 hover:border-secondary-container/40 group hover:shadow-lg"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-24 h-24 mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-115 group-hover:rotate-6">
                  <img alt={adv.title} className="w-full h-full object-contain filter brightness-110 drop-shadow" src={adv.img} />
                </div>
                <h3 className="text-xl md:text-2xl text-on-primary mb-3 font-bold">{adv.title}</h3>
                <p className="text-on-primary/80 text-sm md:text-base group-hover:text-secondary-fixed transition-colors leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="py-24 px-6 md:px-16 bg-primary-container text-on-primary" id="battery-types">
          <div className="text-center mb-16 fade-in-up visible">
            <span className="text-secondary-fixed font-bold uppercase tracking-widest mb-3 block text-sm">Layanan Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-primary mb-4 drop-shadow-sm">Solusi Tepat untuk Masalah Aki Kendaraan Anda</h2>
            <div className="w-24 h-1 bg-secondary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary p-8 border border-primary-fixed/10 card-hover-glow rounded-2xl fade-in-up flex flex-col visible shadow-md hover:border-secondary-container/30">
              <h3 className="text-xl md:text-2xl text-secondary-fixed font-bold mb-3">Pembelian Aki Baru</h3>
              <p className="text-on-primary/80 text-sm md:text-base leading-relaxed">Kami melayani pembelian Aki baru di outlet resmi kami dan bisa melakukan pengantaran langsung serta pemasangan aman di tempat Anda.</p>
            </div>

            <div className="bg-primary p-8 border border-primary-fixed/10 card-hover-glow rounded-2xl fade-in-up visible shadow-md hover:border-secondary-container/30" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl md:text-2xl text-secondary-fixed font-bold mb-3">Antar dan Pasang Aki</h3>
              <p className="text-on-primary/80 text-sm md:text-base leading-relaxed">Layanan *delivery* cepat dan pemasangan aki mobil ke lokasi manapun Anda berada 24 jam nonstop.</p>
            </div>

            <div className="bg-primary p-8 border border-primary-fixed/10 card-hover-glow rounded-2xl fade-in-up visible shadow-md hover:border-secondary-container/30" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl md:text-2xl text-secondary-fixed font-bold mb-3">Tukar Tambah Aki Lama</h3>
              <p className="text-on-primary/80 text-sm md:text-base leading-relaxed">Tukarkan aki lama Anda yang sudah rusak atau soak dan nikmati potongan harga (trade-in) terbaik agar belanja Anda jauh lebih hemat.</p>
            </div>

            <div className="bg-primary p-8 border border-primary-fixed/10 card-hover-glow rounded-2xl fade-in-up visible shadow-md hover:border-secondary-container/30" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-xl md:text-2xl text-secondary-fixed font-bold mb-3">Pemeriksaan Kelistrikan Gratis</h3>
              <p className="text-on-primary/80 text-sm md:text-base leading-relaxed">Teknisi profesional kami akan melakukan pengecekan kesehatan dinamo starter dan alternator secara gratis sebelum mengganti aki.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6 md:px-16 bg-surface-container-low text-text-main" id="testimonials">
          <div className="text-center mb-16 fade-in-up visible">
            <span className="text-surface-tint font-bold uppercase tracking-widest mb-3 block text-sm">Testimonial Pelanggan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4">Dipercaya oleh Ribuan Pelanggan</h2>
            <div className="w-24 h-1 bg-surface-tint mx-auto rounded-full"></div>
          </div>

          {/* Slideshow for all devices */}
          <div className="max-w-2xl mx-auto relative">
            {/* Prev Arrow */}
            <button
              onClick={() => setActiveTestimonial(prev => (prev - 1 + 5) % 5)}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-outline-variant/60 shadow-md flex items-center justify-center hover:bg-surface-container-low hover:scale-110 active:scale-95 transition-all duration-200 text-text-muted hover:text-surface-tint"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>chevron_left</span>
            </button>

            {/* Next Arrow */}
            <button
              onClick={() => setActiveTestimonial(prev => (prev + 1) % 5)}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-outline-variant/60 shadow-md flex items-center justify-center hover:bg-surface-container-low hover:scale-110 active:scale-95 transition-all duration-200 text-text-muted hover:text-surface-tint"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>chevron_right</span>
            </button>

            <div className="overflow-hidden rounded-2xl mx-8 md:mx-0">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                onTouchStart={(e) => { e.currentTarget.dataset.touchX = e.touches[0].clientX }}
                onTouchEnd={(e) => {
                  const startX = parseFloat(e.currentTarget.dataset.touchX)
                  const endX = e.changedTouches[0].clientX
                  const diff = startX - endX
                  if (Math.abs(diff) > 50) {
                    if (diff > 0) setActiveTestimonial(prev => (prev + 1) % 5)
                    else setActiveTestimonial(prev => (prev - 1 + 5) % 5)
                  }
                }}
              >
                {[
                  { initials: "AP", name: "Andi Pratama", loc: "Makassar", text: "Mobil saya tiba-tiba nggak bisa distarter malam hari. Tinggal chat WhatsApp, teknisinya cepat datang dan langsung ganti aki di tempat. Pelayanannya ramah, harganya juga jelas dari awal." },
                  { initials: "RM", name: "Rina Maharani", loc: "Makassar", text: "Awalnya panik karena mobil mogok pas mau berangkat kerja. Untung ketemu layanan ini. Nggak sampai satu jam teknisi sudah datang dan mobil langsung hidup lagi. Recommended banget." },
                  { initials: "BH", name: "Budi Hartono", loc: "Gowa", text: "Saya pesan aki jam 11 malam, teknisinya datang kurang dari 45 menit. Aki original dan langsung dipasangkan. Harga sangat bersaing dibanding toko offline. Pasti langganan!" },
                  { initials: "DS", name: "Dewi Sartika", loc: "Maros", text: "Pertama kali pakai layanan ini karena rekomendasi teman. Ternyata benar, pelayanannya sangat profesional. Teknisinya juga cek kelistrikan gratis. Top markotop!" },
                  { initials: "FA", name: "Farid Anwar", loc: "Makassar", text: "Sudah 3 kali pakai jasa AkiSulSel untuk kendaraan keluarga. Selalu puas dengan kecepatan respon dan kualitas aki yang dipasang. Garansi juga jelas. Sangat direkomendasikan." }
                ].map((t, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white p-8 rounded-2xl border border-outline-variant/60 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full font-extrabold text-lg">
                          {t.initials}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-0.5 text-text-main">{t.name}</h4>
                          <p className="text-text-muted text-xs">{t.loc}</p>
                        </div>
                      </div>
                      <p className="text-text-main text-sm md:text-base font-medium italic leading-relaxed">"{t.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3, 4].map(i => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'bg-surface-tint w-8' : 'bg-outline-variant/50 hover:bg-outline-variant w-3'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 md:px-16 bg-surface" id="faq">
          <div className="max-w-3xl mx-auto fade-in-up visible">
            <span className="text-surface-tint font-bold uppercase tracking-widest mb-3 block text-center text-sm">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6 text-center">Pertanyaan yang Sering Diajukan</h2>
            <div className="w-24 h-1 bg-surface-tint mx-auto rounded-full mb-12"></div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-outline-variant/60 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left p-6 text-text-main flex justify-between items-center focus:outline-none hover:bg-surface-container-low transition-colors"
                  >
                    <span className="font-bold text-base md:text-lg">{faq.q}</span>
                    <span className={`material-symbols-outlined transform transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-surface-tint' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === idx ? 'max-h-40 border-t border-surface-variant' : 'max-h-0'}`}
                  >
                    <p className="p-6 text-text-muted text-sm md:text-base leading-relaxed bg-white/50">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-6 md:px-16 bg-primary text-on-primary relative overflow-hidden" id="kontak">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-transparent pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center fade-in-up visible relative z-10">
            <span className="text-secondary-fixed font-bold uppercase tracking-widest mb-3 block text-sm">KAMI SIAP MEMBANTU ANDA 24 JAM</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-primary mb-8 drop-shadow-sm">Aki Bermasalah? Hubungi Kami Segera</h2>
            <a className="inline-flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-fixed font-bold text-base px-8 py-5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shimmer-btn shadow-2xl shadow-secondary-container/40" href={waLink} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              Hubungi Sekarang (WhatsApp)
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-24 px-6 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12 bg-primary border-t border-primary-container/40">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2">
            <img src="/assets/logo/logo.png" alt="AkiSulSel Logo" className="h-12 w-auto object-contain rounded" />
            <span className="text-2xl font-extrabold text-on-primary">akisulsel.com</span>
          </div>
          <p className="text-sm md:text-base text-on-primary/80 max-w-md leading-relaxed font-medium">
            AkiSulSel adalah pusat layanan aki mobil terbaik dan terpercaya di Makassar, melayani 24 jam hingga ke seluruh wilayah Sulawesi Selatan. Gratis cek kelistrikan, dijamin original bergaransi resmi.
          </p>
          <p className="text-on-primary/50 mt-4 text-xs">
            Copyright & design by ©akisulsel.com 2026. Hak cipta dilindungi.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-6 md:mt-0">
          <h4 className="text-base md:text-lg text-on-primary font-bold tracking-wide">Layanan</h4>
          <a className="text-sm md:text-base text-on-primary/75 hover:text-secondary-fixed transition-colors focus:outline-none" href="#services">Pembelian Aki Baru</a>
          <a className="text-sm md:text-base text-on-primary/75 hover:text-secondary-fixed transition-colors focus:outline-none" href="#services">Antar dan Pasang Aki</a>
          <a className="text-sm md:text-base text-on-primary/75 hover:text-secondary-fixed transition-colors focus:outline-none" href="#services">Tukar Tambah Aki Lama</a>
          <a className="text-sm md:text-base text-on-primary/75 hover:text-secondary-fixed transition-colors focus:outline-none" href="#services">Pemeriksaan Aki di Tempat</a>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        aria-label="Chat via WhatsApp"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full wa-green flex items-center justify-center wa-pulse hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-2xl"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.012 14.077.99 11.999.99c-5.439 0-9.861 4.37-9.865 9.801-.003 1.736.47 3.427 1.371 4.911l-.982 3.582 3.734-.968zM17.15 15.22c-.294-.146-1.74-.857-2.012-.955-.272-.098-.47-.147-.667.147-.197.294-.766.955-.939 1.15-.173.197-.347.221-.64.074-1.393-.697-2.274-1.238-3.088-2.636-.214-.37-.074-.57.074-.718.133-.133.294-.343.441-.515.147-.171.197-.294.294-.49.098-.196.049-.367-.025-.514-.074-.147-.667-1.605-.914-2.193-.24-.576-.484-.497-.667-.506-.173-.008-.371-.01-.57-.01-.197 0-.519.074-.791.368-.272.294-1.038 1.003-1.038 2.447 0 1.444 1.062 2.839 1.21 3.036.148.197 2.09 3.168 5.064 4.437.708.302 1.26.482 1.69.617.712.224 1.36.192 1.872.118.571-.082 1.74-.707 1.987-1.391.248-.684.248-1.272.173-1.391-.074-.12-.272-.22-.566-.367z" />
        </svg>
      </a>
    </div>
  )
}

export default App
