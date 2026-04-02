import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import nathanImg from "@/assets/nathan.jpeg";
import danielImg from "@/assets/daniel.jpeg";
import peaceImg from "@/assets/peace.jpeg";

const team = [
  {
    name: "Ododo Joshua",
    role: "CEO & Founder",
    bio: "Visionary leading strategy and growth. Born and raised between Ibadan and Lagos, Joshua bootstrapped Karma Swap with zero external funding and an unwavering belief in circular economy.",
    initials: "OJ",
  },
  {
    name: "Ikheloa Nathan",
    role: "CGO / COO",
    bio: "Operations and growth expert driving partnerships and user acquisition. Nathan brings a sharp focus on scaling community engagement and building sustainable business models.",
    initials: "IN",
    image: nathanImg,
  },
  {
    name: "Iroye Peace Timileyin",
    role: "CPO",
    bio: "Product visionary shaping the user experience. Peace obsesses over every interaction, ensuring the platform feels intuitive and empowering for every community member.",
    initials: "IP",
    image: peaceImg,
  },
  {
    name: "Shokefun Daniel",
    role: "CTO",
    bio: "Tech lead building the scalable Flutter and Firebase platform. Daniel architects the systems that power millions of potential trades with reliability and speed.",
    initials: "SD",
    image: danielImg,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const TeamSection = () => (
  <section id="team" className="py-20 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Team</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Four passionate young Nigerians building the future of sustainable commerce — just grit and vision.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
          >
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
            ) : (
              <div className="w-20 h-20 rounded-full bg-primary mx-auto flex items-center justify-center mb-4">
                <span className="text-primary-foreground font-bold text-xl">{member.initials}</span>
              </div>
            )}
            <h4 className="font-bold text-foreground text-lg">{member.name}</h4>
            <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5 mx-auto" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
