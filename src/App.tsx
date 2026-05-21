import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const links = [
  { name: 'Diet With Shatakshi', url: 'https://www.instagram.com/dietwithshatakshi/' },
  { name: 'Aarvee Tours', url: 'https://www.instagram.com/aarveetours/' },
  { name: 'P & G Solar', url: 'https://www.instagram.com/p_and_g_solar/' },
  { name: 'Greenlight Solar Energy', url: 'https://www.instagram.com/greenlightsolar_energy/' },
  { name: 'Vishvam Holidays', url: 'https://www.instagram.com/vishvamholidays/' },
  { name: 'Solar Waves 47', url: 'https://www.instagram.com/solarwaves47/' },
  { name: 'Samarth Agro Product', url: 'https://www.instagram.com/samarthagroproduct/' },
  { name: 'All India Abacus Pvt Ltd', url: 'https://www.instagram.com/allindiaabacuspvtltd1/' },
  { name: 'Shravyas Herbal Product', url: 'https://www.instagram.com/shravyasherbalproduct24/' },
  { name: 'Groove 512', url: 'https://www.instagram.com/groove512/' },
  { name: 'KoolOn Coolant DEF', url: 'https://www.instagram.com/koolon_coolant_def/' },
  { name: 'Aryans Holidays', url: 'https://www.instagram.com/aryansholidays/' },
  { name: 'Komal Stylin', url: 'https://www.instagram.com/komal_stylin/' },
  { name: 'Prime Leads Solutions', url: 'https://www.instagram.com/primeleadssolutions/' },
  { name: 'Rutuja Organics', url: 'https://www.instagram.com/rutuja_organics/' },
  { name: 'Shri Venkatesha Nursery', url: 'https://www.instagram.com/shrivenkateshanursery/' },
  { name: 'Softland Technology', url: 'https://www.instagram.com/softlandtechnologgy/' },
  { name: 'Abhyankar Associate', url: 'https://www.instagram.com/abhyankarassociate/' },
  { name: 'Dr Sarika Beauty Parlour', url: 'https://www.instagram.com/drsarikabeautyparlour/' },
  { name: 'EIFT EXIM Institutes', url: 'https://www.instagram.com/eift_exim_institutes/' },
  { name: 'Timber Tales of Coorg', url: 'https://www.instagram.com/timbertalesofcoorg/' },
  { name: 'KozyClan Experiences', url: 'https://www.instagram.com/kozyclan.experiences/' },
  { name: 'Arraylogic Softwares Pvt Ltd', url: 'https://www.instagram.com/arraylogic_softwares_pvt.ltd/' },
  { name: 'Pizza Hut UZB', url: 'https://www.instagram.com/pizzahut.uzb/' },
  { name: 'Swift N Lift Media', url: 'https://www.instagram.com/swiftnliftmedia/' },
  { name: 'Prime Tycoon Event', url: 'https://www.instagram.com/primetycoonevent/' },
  { name: 'Eco Radient Infra LLP Solar', url: 'https://www.instagram.com/eco.radientinfrallpsolar/' },
  { name: 'Tadwalkar Associates', url: 'https://www.instagram.com/tadwalkarassociates/' },
  { name: 'Pizza Burst Pune', url: 'https://www.instagram.com/pizza_burst_pune/' },
  { name: 'Samara Beauty Care', url: 'https://www.instagram.com/samara_beauty_care_/' },
  { name: 'Garden Banva', url: 'https://www.instagram.com/garden_banva/' },
  { name: 'Laxmi Equipments', url: 'https://www.instagram.com/laxmiequipments24/' },
  { name: 'Nrutyangan Kathak Academy', url: 'https://www.instagram.com/nrutyangan_kathak_academy/' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-5 font-sans selection:bg-slate-700">
      <div className="max-w-[700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-xl shadow-slate-900/50">
            <span className="text-3xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">AP</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight">Akshay Patil</h1>
          <p className="text-slate-400 text-lg sm:text-xl font-medium">Social Media Client Portfolio</p>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-3.5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.04
              }
            }
          }}
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group flex items-center justify-between bg-slate-800 p-4 sm:p-5 rounded-2xl text-white text-lg transition-colors duration-300 border border-white/5 hover:bg-slate-700 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-900/50 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{link.name}</span>
              <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-pink-500 group-hover:to-purple-500 transition-colors duration-300">
                <Instagram className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
