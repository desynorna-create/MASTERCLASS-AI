/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { 
  Instagram, 
  ExternalLink, 
  BookOpen, 
  UserCircle, 
  Video, 
  Code, 
  Terminal,
  ChevronRight,
  MessageSquare,
  ChevronDown
} from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Fondasi Belajar Website Berbasis AI",
    description: "Mempelajari dasar-dasar pembuatan website yang ditenagai oleh kecerdasan buatan.",
    icon: <BookOpen className="w-6 h-6 text-neon-cyan" />,
    color: "cyan",
    link: "https://youtube.com"
  },
  {
    id: 2,
    title: "Tutorial Membuat Animasi di Canva AI",
    description: "Memanfaatkan fitur AI di Canva untuk membuat animasi yang memukau dengan cepat.",
    icon: <Video className="w-6 h-6 text-lime-green" />,
    color: "green",
    link: "https://youtube.com"
  },
  {
    id: 3,
    title: "Tutorial Membuat Animasi di Veo3",
    description: "Eksplorasi pembuatan video animasi tingkat lanjut menggunakan teknologi Veo3.",
    icon: <Code className="w-6 h-6 text-neon-cyan" />,
    color: "cyan",
    link: "https://youtube.com"
  },
  {
    id: 4,
    title: "Tutorial Membuat Animasi di Kling.ai",
    description: "Menguasai alat Kling untuk menghasilkan animasi AI yang realistis dan dinamis.",
    icon: <Terminal className="w-6 h-6 text-electric-purple" />,
    color: "purple",
    link: "https://youtube.com"
  },
  {
    id: 5,
    title: "Tutorial Membuat Storybook",
    description: "Cara membuat buku cerita visual yang menarik dengan bantuan ilustrasi AI.",
    icon: <BookOpen className="w-6 h-6 text-lime-green" />,
    color: "green",
    link: "https://youtube.com"
  },
  {
    id: 6,
    title: "Tutorial Membuat Aplikasi & Game Interaktif di Canva Code",
    description: "Membangun pengalaman interaktif dan game menggunakan Canva Code.",
    icon: <Code className="w-6 h-6 text-neon-cyan" />,
    color: "cyan",
    link: "https://youtube.com"
  },
  {
    id: 7,
    title: "Tutorial Membuat Animasi Presentasi",
    description: "Mengubah presentasi membosankan menjadi pertunjukan animasi yang interaktif.",
    icon: <Video className="w-6 h-6 text-lime-green" />,
    color: "green",
    link: "https://youtube.com"
  },
  {
    id: 8,
    title: "Tutorial Animasi Bernyanyi",
    description: "Teknik membuat karakter AI yang bisa bernyanyi dan berbicara secara sinkron.",
    icon: <MessageSquare className="w-6 h-6 text-neon-cyan" />,
    color: "cyan",
    link: "https://youtube.com"
  },
  {
    id: 9,
    title: "Tutorial Frelance Bisnis Digital",
    description: "Strategi membangun bisnis freelance yang sukses di era ekonomi digital.",
    icon: <UserCircle className="w-6 h-6 text-electric-purple" />,
    color: "purple",
    link: "https://youtube.com"
  },
  {
    id: 10,
    title: "Tutorial Membuat Video Affiliate dengan AI",
    description: "Cara membuat konten video affiliate yang menarik dan konversif menggunakan AI.",
    icon: <Video className="w-6 h-6 text-lime-green" />,
    color: "green",
    link: "https://youtube.com"
  }
];

const prompts = [
  {
    title: "ANIMASI CANVA",
    prompt: "Buat 5 scene animasi (Anime 2D/2.5D/Lego/Block ala Minecraft/Mainan /Miniatur/Realistis/3DCartoon/3D Cartoon Faceless/Claymation/Tiny Diorama/Donghua/StudioGhibli/Cyberpunk/Steampunk/Watercolor/Pixel Art/Comic Book) edukasi fakta menarik tentang (Tea Animasi/ Materi yang akan dianimasikan) Setiap scene berdurasi sekitar 8 detik. Gunakan bahasa netral, aman, dan ramah anak (tidak ada kata anak). Hindari kata sensitif, istilah medis, dan topik yang tidak sesuai kebijakan. Pertahankan gaya animasinya, visual jelas, dan suasana edukatif. Setiap scene harus berisi: Penjelasan detail dan jelas bagaimana adegan animasi yang ditampilkan. buatkan juga, kalimat narasi yang pas untuk dibacakan selama 8 detik. pada setiap scene adegan.dan berikan juga gabungan narasi dari setiap scene yang ditaruh diahir animasi. Pastikan gerakan animasi dan narasi saling sesuai, menyambung antar scene, dan aman untuk digunakan di Canva AI."
  },
  {
    title: "ANIMASI VEO3",
    prompt: "Buat kan prompt untuk membuat animasi (tipe animasi) dengan tema (materi) yang informatif. Gunakan (jumlah karakter) karakter utama pada foto di atas sebagai pemandu dan jaga konsistensi karakter di setiap scene, termasuk bentuk, warna, pakaian, ekspresi, dan gaya visual. Prompt Animasi terdiri dari beberapa scene yang tersusun beruntun dan saling terhubung, setiap scene terdiri dari 3 prompt terpisah. Pertama prompt untuk membuat gambar di nano banana, yang menampilkan karakter utama sesuai foto sedang menjelaskan adegan sesuai tema materi yang telah ditentukan, dengan latar belakang adegan yang mendukung, halus, penuh warna, dan adegan gambar sesuai dengan penjelasan karakter. Kedua, prompt untuk mengenerate gambar dari nano banana menjadi video untuk di bawa ke veo 3 yang mengubah gambar menjadi animasi dengan gerakan karakter halus, penjelasan terkait gerakan kamera, serta visual yang bergerak sesuai dengan materi yang dijelaskan karakter dengan durasi adegan 8 detik setiap scene. Ketiga buatkan narasi di setiap scene seperti sedang bertanya dan menjelaskan, adegan animasinya bergerak sesuai scene menyatu dengan audio, prompt di bawa ke Google Ai Studio dengan durasi audio sekitar 9 detik. Narasi di setiap scene tuliskan kembali, digabungkan menjadi satu di bagian paling bawah setelah scene terahir dan tidak dirubah kalimat narasinya. Semua prompt di atas berbahasa netral dan aman, hindari istilah rumit dan konten sensitif, serta pastikan hasil ahir aman digunakan di berbagai platform Ai dan menghasilkan animasi edukatif yang menarik."
  },
  {
    title: "ANIMASI KLING.AI",
    prompt: "Buat kan prompt untuk membuat animasi (tipe animasi) dengan tema (materi) yang informatif. Gunakan (jumlah karakter) karakter utama pada foto di atas sebagai pemandu dan jaga konsistensi karakter di setiap scene, termasuk bentuk, warna, pakaian, ekspresi, dan gaya visual. Prompt Animasi terdiri dari beberapa scene yang tersusun beruntun dan saling terhubung, setiap scene terdiri dari 3 prompt terpisah. Pertama prompt untuk membuat gambar di nano banana, yang menampilkan karakter utama sesuai foto sedang menjelaskan adegan sesuai tema materi yang telah ditentukan, dengan latar belakang adegan yang mendukung, halus, penuh warna, dan adegan gambar sesuai dengan penjelasan karakter. Kedua, prompt untuk mengenerate gambar dari nano banana menjadi video untuk di bawa ke kling 3 yang mengubah gambar menjadi animasi dengan gerakan karakter halus, penjelasan terkait gerakan kamera, serta visual yang bergerak sesuai dengan materi yang dijelaskan karakter dengan durasi adegan 8 detik setiap scene. Ketiga buatkan narasi di setiap scene seperti sedang bertanya dan menjelaskan, adegan animasinya bergerak sesuai scene menyatu dengan audio, prompt di bawa ke Google Ai Studio dengan durasi audio sekitar 9 detik. Narasi di setiap scene tuliskan kembali, digabungkan menjadi satu di bagian paling bawah setelah scene terahir dan tidak dirubah kalimat narasinya. Semua prompt di atas berbahasa netral dan aman, hindari istilah rumit dan konten sensitif, serta pastikan hasil ahir aman digunakan di berbagai platform Ai dan menghasilkan animasi edukatif yang menarik."
  },
  {
    title: "MEMBUAT STORYBOOK",
    prompt: "Buatkan Prompt atau perintah ai untuk membuatkan story book, dengan tema cerita \" .....\", ada 4 tugas yang harus dikerjakan pertama, buatkan satu atau lebih dari satu ciri master karakter yang kira-kira sesuai dengan tema cerita untuk di generate di nano banana, kedua, buatkan prompt untuk membuatkan ilustrasi covernya di nano banana seperti ilustrasi yang harus dilakukan master karakter yang telah ditentukan, gambar apa yang harus dimunculkan, pemilihan warna, bentuk karakter yang ada di dalam cover buku dan font cerita yang ada dicovernya, sesuai dengan tema beserta judul yang direkomendasikan. Ketiga, buatkan prompt untuk nano banana membuatkan beberapa adegan gambar yang beruntun satu sama lain dan melibatkan master karakter sesuai referensi di gambar, keempat, Buatkan narasi ceritanya (di bawah prompt gambar) yang seru dan menarik untuk di baca anak sekolah, jabarkan menjadi cerita yang menarik, seru, penuh teka-teki, tidak membosankan dan mengandung edukatif sesuai dengan poin materi yang menjadi tema, buatkan setiap part kalimat ceritanya menjadi beberapa part sampai part terahir, di part terahir sampaikan pesan moral yang bermanfaat untuk pembaca."
  },
  {
    title: "ANIMASI PRESENTASI",
    prompt: "Buat kan prompt untuk membuat animasi (tipe animasi) dengan tema (materi) yang informatif. Gunakan (jumlah karakter) karakter utama pada foto di atas sebagai pemandu dan jaga konsistensi karakter di setiap scene, termasuk bentuk, warna, pakaian, ekspresi, dan gaya visual. Prompt Animasi terdiri dari beberapa scene yang tersusun beruntun dan saling terhubung, setiap scene terdiri dari 3 prompt terpisah. Pertama prompt untuk membuat gambar di nano banana, yang menampilkan karakter utama sesuai foto sedang menjelaskan adegan sesuai tema materi yang telah ditentukan, dengan latar belakang adegan yang mendukung, halus, penuh warna, dan adegan gambar sesuai dengan penjelasan karakter. Kedua, prompt untuk mengenerate gambar dari nano banana menjadi video untuk di bawa ke veo 3 yang mengubah gambar menjadi animasi dengan gerakan karakter halus, penjelasan terkait gerakan kamera, serta visual yang bergerak sesuai dengan materi yang dijelaskan karakter dengan durasi adegan 8 detik setiap scene. Ketiga buatkan narasi di setiap scene seperti sedang bertanya dan menjelaskan, adegan animasinya bergerak sesuai scene menyatu dengan audio, prompt di bawa ke Google Ai Studio dengan durasi audio sekitar 9 detik. Narasi di setiap scene tuliskan kembali, digabungkan menjadi satu di bagian paling bawah setelah scene terahir dan tidak dirubah kalimat narasinya. Semua prompt di atas berbahasa netral dan aman, hindari istilah rumit dan konten sensitif, serta pastikan hasil ahir aman digunakan di berbagai platform Ai dan menghasilkan animasi edukatif yang menarik."
  },
  {
    title: "ANIMASI FAKTA MENARIK",
    prompt: "buatkan alur cerita yang menarik, tentang (.............) dengan hook pertanyaan yang menarik dan penuh penasaran, dan disajikan dengan cerita yang unik dan menarik untuk di animasikan dan menarik di tonton"
  },
  {
    title: "ANIMASI BERNYANYI",
    prompt: "Coming Soon"
  }
];

const Bubbles = () => {
  const [particles, setParticles] = useState<{ id: number; size: number; left: string; duration: string; drift: string }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 15 + 10}s`,
      drift: `${(Math.random() - 0.5) * 200}px`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            '--particle-duration': p.duration,
            '--particle-drift': p.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

interface InteractiveCardProps {
  key?: React.Key;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  color?: string;
  link?: string;
  lessonId?: number;
}

const InteractiveCard = ({ 
  title, 
  subtitle, 
  icon, 
  color, 
  link, 
  lessonId 
}: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getGlowClass = () => {
    if (color === 'cyan') return 'hover:neon-border-cyan hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]';
    if (color === 'purple') return 'hover:neon-border-purple hover:shadow-[0_0_30px_rgba(188,19,254,0.6)]';
    if (color === 'green') return 'hover:neon-border-green hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]';
    return 'hover:neon-border-cyan hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]';
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`p-6 rounded-2xl glass border-white/10 flex flex-col transition-all duration-500 cursor-pointer relative overflow-hidden group ${getGlowClass()}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {icon && <div className="p-2 rounded-lg bg-white/5">{icon}</div>}
          <div>
            {lessonId && <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Lesson {lessonId}</span>}
            <h3 className="text-lg font-bold leading-tight group-hover:text-white transition-colors">{title}</h3>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-white/30 group-hover:text-white" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/70 text-sm leading-relaxed mb-4 pt-2 border-t border-white/5">
              {subtitle}
            </p>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-neon-cyan hover:underline flex items-center gap-1 font-bold"
              >
                Buka Link <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-neon-cyan/30 bg-deep-forest forest-bg">
      <Bubbles />
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[10%] w-[60%] h-[60%] bg-fantasy-purple/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-fantasy-indigo/10 blur-[150px] rounded-full" />
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-fantasy-glow/5 blur-[180px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="neon-glow-cyan text-white">Masterclass AI</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-electric-purple to-lime-green">
              by nolacreate
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
            Meningkatkan Kreativitas dengan Kecerdasan Buatan.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan rounded-full font-bold text-lg neon-border-cyan hover:bg-neon-cyan hover:text-deep-charcoal transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Daftar Sekarang <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-neon-cyan rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-glow-purple uppercase leading-tight">SELAMAT DATANG DI MASTERCLASS AI</h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Di sini, teman-teman akan belajar mengubah materi pelajaran menjadi animasi menarik, mudah dipahami siswa, dan relevan dengan dunia digital masa kini.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-square rounded-2xl glass neon-border-purple overflow-hidden shadow-[0_0_30px_rgba(188,19,254,0.4)]">
              <img 
                src="https://drive.google.com/uc?export=view&id=12r25kziZiE9SphZEVnIFxpq02Df5AGTO" 
                alt="AI Masterclass Poster" 
                className="w-full h-full object-cover opacity-100 transition-all duration-500 cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime-green/20 blur-3xl rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Learning Path */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">The Learning Path</h2>
            <p className="text-white/50 text-xl">Perjalanan komprehensif dari nol hingga mahir AI.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <InteractiveCard
                key={lesson.id}
                title={lesson.title}
                subtitle={lesson.description}
                icon={lesson.icon}
                color={lesson.color}
                link={lesson.link}
                lessonId={lesson.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Library */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 neon-glow-green">Prompt Library</h2>
            <p className="text-white/50 text-xl">Kumpulan prompt terbaik untuk hasil AI berkualitas tinggi.</p>
          </div>
          <button className="flex items-center gap-2 text-lime-green font-bold hover:underline">
            Lihat Semua <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prompts.map((item, idx) => (
            <InteractiveCard
              key={idx}
              title={item.title}
              subtitle={item.prompt}
              icon={<MessageSquare className="w-5 h-5 text-lime-green" />}
              color="green"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 neon-glow-cyan">Masterclass AI</h3>
            <p className="text-white/40 text-sm">© 2024 nolacreate. Hak cipta dilindungi undang-undang.</p>
          </div>

          <div className="flex gap-6">
            <a href="https://tiktok.com/@nolacreate" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:neon-border-cyan transition-all">
              <span className="sr-only">TikTok</span>
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg>
            </a>
            <a href="https://instagram.com/normailahi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:neon-border-purple transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://lynk.id/normailahi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:neon-border-green transition-all">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
