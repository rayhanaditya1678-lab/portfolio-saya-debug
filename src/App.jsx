import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';

// --- DATA DUMMY (Ganti dengan data Anda sendiri) ---
const projects = [
  { id: 1, title: 'Aritmatika Solver', img: 'https://via.placeholder.com/300', desc: 'Program untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis.', link: '#' },
  { id: 2, title: 'AutoChat-Discord', img: 'https://via.placeholder.com/300', desc: 'Solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.', link: '#' },
  { id: 3, title: 'Buku Catatan', img: 'https://via.placeholder.com/300', desc: 'Website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan.', link: '#' },
  { id: 4, title: 'Portofolio-V4', img: 'https://via.placeholder.com/300', desc: 'Versi sebelumnya dari website portofolio ini yang berisi informasi mengenai proyek.', link: '#' },
];

const certificates = [
  { id: 1, title: 'Dicoding Cert 1', img: 'https://via.placeholder.com/300x200' },
  { id: 2, title: 'Dicoding Cert 2', img: 'https://via.placeholder.com/300x200' },
  { id: 3, title: 'Dicoding Cert 3', img: 'https://via.placeholder.com/300x200' },
  { id: 4, title: 'Dicoding Cert 4', img: 'https://via.placeholder.com/300x200' },
  { id: 5, title: 'Dicoding Cert 5', img: 'https://via.placeholder.com/300x200' },
  { id: 6, title: 'Dicoding Cert 6', img: 'https://via.placeholder.com/300x200' },
];

const techStack = [
  { id: 1, name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 2, name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id: 3, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 4, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id: 5, name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { id: 6, name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id: 7, name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { id: 8, name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

// --- VARIAN ANIMASI ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

// --- KOMPONEN-KOMPONEN ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 py-4 px-8 bg-gray-900/50 backdrop-blur-sm">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-white">Ekizr</a>
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="text-gray-300 hover:text-indigo-400">Home</a>
        <a href="#about" className="text-gray-300 hover:text-indigo-400">About</a>
        <a href="#portfolio" className="text-gray-300 hover:text-indigo-400">Portfolio</a>
        <a href="#contact" className="text-gray-300 hover:text-indigo-400">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center container mx-auto px-8">
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          <TypeAnimation
            sequence={['Frontend Developer', 2000, 'Network & Telecom Student', 2000]}
            wrapper="span" speed={50} repeat={Infinity}
          />
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Menciptakan Website yang inovatif, fungsional, dan User-Friendly untuk Solusi Digital.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="#portfolio" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-indigo-500 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 p-8">
        {/* Ganti dengan ilustrasi Anda */}
        <img src="https://www.reshot.com/preview-assets/illustrations/Y924KJPWAV/computer-and-programming-Y924KJPWAV-w1600.jpg" alt="Developer Illustration" className="rounded-lg shadow-2xl" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 container mx-auto px-8">
    <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
    <p className="text-center text-gray-400 mb-16">Transforming ideas into digital experiences ✨</p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
      <motion.div 
        className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src="https://via.placeholder.com/320" alt="Eki Zulfar" className="object-cover w-full h-full rounded-full"/>
      </motion.div>
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl font-bold text-white mb-4">Hello, I'm Eki Zulfar Rachman</h3>
        <p className="text-gray-300 mb-8">
          Seorang siswa Teknik Jaringan Komputer dan Telekomunikasi yang tertarik dalam pengembangan Front-End. Saya berfokus pada menciptakan pengalaman digital yang menarik dan selalu berusaha memberikan solusi terbaik dalam setiap proyek.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mb-12">
          <a href="/cv.pdf" download className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">Download CV</a>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20">
      <div className="text-center p-4 bg-gray-800 rounded-lg w-40">
        <h4 className="text-4xl font-bold text-indigo-400">
          <CountUp end={11} duration={3} enableScrollSpy scrollSpyOnce />+
        </h4>
        <p className="text-gray-400">Total Projects</p>
      </div>
      <div className="text-center p-4 bg-gray-800 rounded-lg w-40">
        <h4 className="text-4xl font-bold text-indigo-400">
          <CountUp end={7} duration={3} enableScrollSpy scrollSpyOnce />+
        </h4>
        <p className="text-gray-400">Certificates</p>
      </div>
      <div className="text-center p-4 bg-gray-800 rounded-lg w-40">
        <h4 className="text-4xl font-bold text-indigo-400">
          <CountUp end={3} duration={3} enableScrollSpy scrollSpyOnce />+
        </h4>
        <p className="text-gray-400">Years of Experience</p>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(p => (
              <motion.div key={p.id} className="bg-gray-800 rounded-lg overflow-hidden group" whileHover={{ scale: 1.05, y: -5 }}>
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                  <a href={p.link} className="text-indigo-400 font-semibold hover:underline">Details →</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'certificates':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map(c => (
              <motion.div key={c.id} className="bg-gray-800 rounded-lg overflow-hidden group" whileHover={{ scale: 1.05 }}>
                 <img src={c.img} alt={c.title} className="w-full h-full object-cover"/>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'tech':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
            {techStack.map(t => (
              <div key={t.id} className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <img src={t.icon} alt={t.name} className="h-12 w-12 mb-2"/>
                <span className="text-sm text-gray-300">{t.name}</span>
              </div>
            ))}
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <section id="portfolio" className="py-20 container mx-auto px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Portfolio Showcase</h2>
      <div className="flex justify-center border-b border-gray-700 mb-8">
        <button onClick={() => setActiveTab('projects')} className={`py-2 px-6 font-semibold transition-colors ${activeTab === 'projects' ? 'border-b-2 border-indigo-500 text-indigo-400' : 'text-gray-400'}`}>Projects</button>
        <button onClick={() => setActiveTab('certificates')} className={`py-2 px-6 font-semibold transition-colors ${activeTab === 'certificates' ? 'border-b-2 border-indigo-500 text-indigo-400' : 'text-gray-400'}`}>Certificates</button>
        <button onClick={() => setActiveTab('tech')} className={`py-2 px-6 font-semibold transition-colors ${activeTab === 'tech' ? 'border-b-2 border-indigo-500 text-indigo-400' : 'text-gray-400'}`}>Tech Stack</button>
      </div>
      <div className="mt-8">{renderContent()}</div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 container mx-auto px-8">
    <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-400 mb-8">Have something to discuss? Send me a message and let's talk.</p>
        <form action="#" method="POST"> {/* Ganti dengan action EmailJS atau Formspree */}
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Comments (1)</h3>
        {/* Ini adalah UI statis. Untuk fungsionalitas, perlukan backend atau layanan seperti Disqus */}
        <div className="space-y-6">
          {/* Dummy Comment */}
          <div className="flex space-x-4">
            <img src="https://via.placeholder.com/48" alt="User" className="w-12 h-12 rounded-full"/>
            <div>
              <div className="flex items-baseline space-x-2">
                 <h4 className="font-bold text-white">Eki</h4>
                 <span className="text-xs text-gray-500">1h ago</span>
              </div>
              <p className="text-gray-300">Ngeliog logo koga bang?</p>
            </div>
          </div>
          {/* Comment Form */}
          <div>
            <textarea placeholder="Write your message here..." rows="3" className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 border-t border-gray-800">
    <div className="container mx-auto px-8 text-center text-gray-500">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-indigo-400"><FaGithub size={24}/></a>
        <a href="#" className="hover:text-indigo-400"><FaLinkedin size={24}/></a>
        <a href="#" className="hover:text-indigo-400"><FaInstagram size={24}/></a>
      </div>
      <p>&copy; 2025 Ekizr. All Rights Reserved.</p>
    </div>
  </footer>
);


// --- KOMPONEN UTAMA APP ---
function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Hero />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <About />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Portfolio />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;