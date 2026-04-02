import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import nathanImg from "@/assets/nathan.jpeg";
import danielImg from "@/assets/daniel.jpeg";
import peaceImg from "@/assets/peace.jpeg";

const team = [
  {
    name: "Ododo Joshua",
    role: "CEO & Founder",
    bio: "Visionary leading strategy and growth. Born and raised between Ibadan and Lagos, Joshua bootstrapped Karma Swap with zero external funding and an unwavering belief in circular economy.",
    initials: "OJ",
    link: "https://www.instagram.com/joshuaododo?igsh=NWw0NDN4d2U1NnRr",
    platform: "instagram",
  },
  {
    name: "Ikheloa Nathan",
    role: "CGO / COO",
    bio: "Operations and growth expert driving partnerships and user acquisition. Nathan brings a sharp focus on scaling community engagement and building sustainable business models.",
    initials: "IN",
    image: nathanImg,
    link: "https://wa.me/+2348121567008?text=Hello",
    platform: "whatsapp",
  },
  {
    name: "Iroye Peace Timileyin",
    role: "CPO",
    bio: "Product visionary shaping the user experience. Peace obsesses over every interaction, ensuring the platform feels intuitive and empowering for every community member.",
    initials: "IP",
    image: peaceImg,
    link: "https://www.instagram.com/thatgentleboy_?igsh=Z3JyOHA2cXBwcDZh&utm_source=qr",
    platform: "instagram",
  },
  {
    name: "Shokefun Daniel",
    role: "CTO",
    bio: "Tech lead building the scalable Flutter and Firebase platform. Daniel architects the systems that power millions of potential trades with reliability and speed.",
    initials: "SD",
    image: danielImg,
    link: "#",
    platform: "instagram",
  },
];

const TeamSection = () => (
  <section id="team" className="py-24 bg-muted/50 relative overflow-hidden">
    {/* Animated floating orbs in background */}
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 w-72 h-72 rounded-full bg-green-500 blur-3xl pointer-events-none"
    />
    <motion.div
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.07, 0.03] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-400 blur-3xl pointer-events-none"
    />
    <motion.div
      animate={{ y: [-10, 10, -10], opacity: [0.03, 0.06, 0.03] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-green-500 blur-3xl pointer-events-none"
    />

    <div className="container relative">
      {/* Header with staggered word animation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-green-600 dark:text-green-400 mb-3 px-3 py-1 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950"
        >
          The People
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
        >
          Founders
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-1 bg-green-500 rounded-full mx-auto mb-5"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed"
        >
          Four passionate young Nigerians building the future of sustainable
          commerce — just grit and vision.
        </motion.p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
            whileHover={{
              y: -10,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group relative bg-background border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/10 transition-colors duration-300 cursor-pointer"
          >
            {/* Glowing top border on hover */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full origin-center"
            />

            {/* Number badge */}
            <motion.span
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 1 }}
              className="absolute top-4 right-4 text-xs font-mono text-green-500/50 group-hover:text-green-500 transition-colors duration-300"
            >
              0{i + 1}
            </motion.span>

            {/* Avatar with pulse ring on hover */}
            <div className="relative mb-5">
              {/* Animated ring */}
              <motion.div
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.15, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-2xl border-2 border-green-500/40"
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="absolute inset-0 rounded-2xl border border-green-500/10"
              />

              {member.image ? (
                <motion.img
                  src={member.image}
                  alt={member.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="w-20 h-20 rounded-2xl object-cover ring-2 ring-border relative z-10"
                />
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center ring-2 ring-border relative z-10"
                >
                  <span className="text-primary-foreground font-bold text-xl">
                    {member.initials}
                  </span>
                </motion.div>
              )}

              {/* Pulsing green dot */}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background z-20">
                <motion.span
                  animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="absolute inset-0 rounded-full bg-green-500"
                />
              </span>
            </div>

            {/* Role pill */}
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 px-2.5 py-0.5 rounded-full mb-2"
            >
              {member.role}
            </motion.span>

            {/* Name */}
            <h4 className="font-bold text-foreground text-base mb-3 leading-snug">
              {member.name}
            </h4>

            {/* Animated divider */}
            <motion.div
              initial={{ width: "2rem" }}
              whileHover={{ width: "4rem" }}
              transition={{ duration: 0.3 }}
              className="h-px bg-green-500/40 mb-3"
            />

            {/* Bio */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {member.bio}
            </p>

            {/* Social link */}
            <motion.a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} contact`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors px-4 py-2 rounded-xl border border-border hover:border-green-500/40 hover:bg-green-50/50 dark:hover:bg-green-950/30"
            >
              {member.platform === "whatsapp" ? (
                <>
                  <FaWhatsapp className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </>
              ) : (
                <>
                  <FaInstagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </>
              )}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
