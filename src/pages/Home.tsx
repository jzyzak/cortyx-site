// Logo is in public folder for reliable GitHub Pages deployment
const logo = "/FullLogo.jpg";
import harvardLogo from "../assets/harvard_university_logo.png";
import mitLogo from "../assets/mit_logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const partnerUniversities = [
  { name: "Harvard University", logo: harvardLogo },
  { name: "MIT", logo: mitLogo },
];

export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentUniversity, setCurrentUniversity] = useState(0);
  const [animateSection, setAnimateSection] = useState<string | null>(null);

  useEffect(() => {
    const moveBlob = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveBlob);
    return () => window.removeEventListener("mousemove", moveBlob);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUniversity((prev) => (prev + 1) % partnerUniversities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleSectionNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<{ anchor: string }>;
      const anchor = customEvent.detail.anchor;
      setAnimateSection(anchor);
      // Reset after animation completes
      setTimeout(() => setAnimateSection(null), 1100);
    };

    window.addEventListener('sectionNavigate', handleSectionNavigate as EventListener);
    return () => window.removeEventListener('sectionNavigate', handleSectionNavigate as EventListener);
  }, []);

  return (
    <main className="min-h-screen text-white px-4 sm:px-8 md:px-20 pt-32 relative bg-gradient-to-b from-[#0a0d14] via-[#1a1d29] to-[#0a0d14]">
      {/* Application Deadline Banner */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 relative z-10"
      >
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-primary/40 opacity-60 rounded-[20px]" />
            <div className="relative bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 backdrop-blur-2xl rounded-[20px] border-2 border-primary/50 p-4 sm:p-6 shadow-2xl">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <h2 className="text-1xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight drop-shadow-lg">
                  Applications for W26 Bootcamp Due January 1st!
                </h2>
                <p className="text-lg sm:text-xl text-white/90 font-semibold">
                  <a 
                    href="https://forms.gle/WXAanYWVfoqzyRMQ9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-bold"
                  >
                    Apply
                  </a> by January 1st, 2026 at 11:59PM EST
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Animated gradient mesh background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary/5 via-transparent to-transparent opacity-30" />
      </div>

      {/* Static Background Blobs with enhanced animation */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-primary/40 rounded-full filter blur-3xl opacity-70 animate-pulse z-0 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-primary/40 rounded-full filter blur-2xl opacity-50 animate-pulse z-0 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-primary/30 rounded-full filter blur-2xl opacity-40 animate-pulse z-0 pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-primary/25 rounded-full filter blur-3xl opacity-35 animate-pulse z-0 pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Animated grid pattern overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Cursor-Following Blob */}
      <div
        className="pointer-events-none fixed z-0 w-40 h-40 bg-primary/50 blur-2xl rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          top: `${cursor.y}px`,
          left: `${cursor.x}px`,
        }}
      />

      {/* About Section - Combined with Hero */}
      <motion.section
        id="about"
        initial={animateSection === "#about" ? { opacity: 0, y: 30 } : false}
        animate={animateSection === "#about" ? { opacity: 1, y: 0 } : {}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-32 relative z-10 scroll-mt-32 md:scroll-mt-40"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12 text-center tracking-tight"
        >
          About
        </motion.h2>
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-12">
          <div className="max-w-xl space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              Empowering the Next Generation of Innovators
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg text-gray-200 leading-relaxed tracking-wide"
            >
              Cortyx Labs is an educational initiative <span className="text-primary font-semibold">led by Harvard and MIT students</span> with experience in AI, scaling busineses/startups, building from the ground-up, and raising millions of dollars in funding. We are 
              focused on empowering high school students with the knowledge and skills needed to thrive in the rapidly evolving 
              world of technology and entrepreneurship. We believe that the next generation of innovators should have access to 
              cutting-edge education in artificial intelligence, startup culture, and business development.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg text-gray-200 leading-relaxed tracking-wide"
            >
              Our mission is to bridge the gap between traditional education and the real-world skills needed to succeed 
              in tech and business. Through hands-on workshops, mentorship programs, and collaborative projects, we help 
              students develop the confidence and expertise to turn their ideas into reality.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center md:justify-end md:pr-4"
          >
            <div className="p-4 md:p-6 rounded-2xl border border-gray-500 shadow-xl bg-[#1a1d29]/80 backdrop-blur-sm">
              <img
                src={logo}
                alt="Cortyx Labs Logo"
                className="w-64 md:w-80 h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Three Service Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-6 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary tracking-tight">Bootcamp</h3>
            <p className="text-gray-200 leading-relaxed tracking-wide">
              Our intensive bootcamp teaches you about AI, entrepreneurship, and startups. By the end of the program, 
              you will have fleshed out the details for, pitched, and built an MVP for your own AI project or startup idea.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-6 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary tracking-tight">College Consulting Services</h3>
            <p className="text-gray-200 leading-relaxed tracking-wide">
              Our team of Harvard and MIT students provides personalized guidance on college applications, essay writing, interview 
              preparation, and strategic planning to help you navigate the competitive admissions process. Benefit from 
              first-hand experience and insights from students who have successfully gained admission to top universities.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-6 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/20"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary tracking-tight">Project Advisory Studio</h3>
            <p className="text-gray-200 leading-relaxed tracking-wide">
              Harvard and MIT founders work alongside you to scope an idea, validate it with users, and build an MVP that can ship. 
              Whether you need help architecting an AI workflow, polishing your pitch, or finding beta users, our advisors provide 
              weekly feedback, office hours, and technical support to bring your startup concepts to life.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* University Highlight */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-32 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 blur-3xl bg-primary/30 opacity-40 rounded-[28px]" />
          <div className="relative bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-2xl rounded-[28px] border border-white/30 p-10 shadow-2xl">
            <p className="text-white/90 mb-6 text-xl sm:text-2xl font-semibold uppercase tracking-[0.35em]">
              Led by students from
            </p>
            <div className="relative flex justify-center items-center h-32 sm:h-36">
              <AnimatePresence mode="wait">
                <motion.div
                  key={partnerUniversities[currentUniversity].name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center gap-4"
                >
                  <img
                    src={partnerUniversities[currentUniversity].logo}
                    alt={partnerUniversities[currentUniversity].name}
                    className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
                  />
                  <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow">
                    {partnerUniversities[currentUniversity].name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>


      {/* FAQ Section */}
      <motion.section
        id="faq"
        initial={animateSection === "#faq" ? { opacity: 0, y: 30 } : false}
        animate={animateSection === "#faq" ? { opacity: 1, y: 0 } : {}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-32 relative z-10 scroll-mt-32 md:scroll-mt-40"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12 text-center tracking-tight">
          FAQ
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* FAQ Items organized by section */}
          {[
            { section: "General", items: [
              {
                question: "What is the program about?",
                answer: "Our intensive bootcamp is designed to educate high school students about artificial intelligence, entrepreneurship, and startups/entrepreneurship. Our program combines hands-on learning with real-world projects, mentorship, and collaborative experiences to help students develop the skills and confidence needed to succeed in tech and business. By the end of the bootcamp you will have fleshed out the details for, pitched, and built an MVP for your own AI project or startup idea."
              },
              {
                question: "When does the program take place?",
                answer: "Our Winter 2026 cohort has two groups. The first group will meet during the week of January 5th-9th from 7-9:30PM EST, and the second group will meet during the week of January 12th-16th from 6:30-9PM EST. If you would still like to participate in the bootcamp but are unable to find a time that works for you, please contact us to arrange accomodations."
              },
              {
                question: "Who is eligible to apply?",
                answer: "The program is open to all high school students (grades 9-12) who are interested in learning about AI, entrepreneurship, and startups. No prior experience is required. We welcome students with all levels of background knowledge and a passion for innovation, and we aim to give you the guidance and support you need to succeed."
              },
              {
                question: "What is the application process?",
                answer: "To apply for our bootcamp cohorts, be sure to fill out the application form linked in the \"Apply\" section of the website. Applications are reviewed on a rolling basis, and we will aim to notify applicants of their decisions within a week of submitting your application. If you have any questions about the application process, please contact us directly."
              }
            ]},
            { section: "Registration", items: [
              {
                question: "When are applications open and when do they close?",
                answer: "Applications are currently open for our Winter 2026 cohort! The applications will close on January 1st, 2026 at 11:59PM EST, and we will aim to notify applicants of their decisions by January 2nd. Please keep updated with our website or contact us for more information or updates."
              },
              {
                question: "How much does the bootcamp cost?",
                answer: "The bootcamp costs $800 for the entire cohort. However, we are committed to making quality education accessible, and we offer various pricing options. Please contact us directly for detailed pricing information and to discuss payment plans that may work for your situation."
              },
              {
                question: "When are payments due?",
                answer: "Payment is due in full upon acceptance into the program. We will provide you with a link to the payment portal after you are accepted into the program."
              },
              {
                question: "How does payment work?",
                answer: "We have a payment portal setup through Stripe that you can use to pay for the bootcamp or other college/project consulting services. Upon acceptance into the program or upon meeting your advisor, you'll receive detailed payment instructions and can choose the payment method that works best for you."
              },
              {
                question: "Are refunds available?",
                answer: "If a refund is requested within 3-5 days of the payment, a full refund is allowed. If a refund is requested after 5 days of the payment, we do offer a partial refund of 50% of the payment. Please contact us directly to discuss our specific refund policy and any extenuating circumstances."
              },
              {
                question: "How do referrals work?",
                answer: "If you have a friend who is also interested in the program, please refer them to our website, have them fill out the application form, and add your name under the referral field. If they are accepted into the program, you will receive a $100 credit towards your own bootcamp payment."
              },
              {
                question: "Do you offer financial aid or scholarships?",
                answer: "Yes! We are committed to making our program accessible to all qualified students regardless of financial circumstances. We offer need-based financial aid and merit-based scholarships. To apply for financial assistance, please indicate your interest in your application or contact us directly. We review all requests on a case-by-case basis."
              }
            ]},
            { section: "Other", items: [
              {
                question: "How can I contact you if I have more questions?",
                answer: (
                  <>
                    We're here to help! You can reach out to us in several ways. Click the "Contact" section below to fill out our contact form, 
                    or email us directly at{" "}
                    <a href="mailto:cortyxlabs@gmail.com" className="text-primary hover:underline">
                      cortyxlabs@gmail.com
                    </a>
                    . We typically respond within 24-48 hours and are happy to answer any questions you may have about the program, 
                    application process, or anything else related to Cortyx Labs.
                  </>
                )
              },
              {
                question: "How do I reach out about college consulting or project advisory services?",
                answer: (
                  <>
                    For inquiries about our college consulting or project advisory services, please reach out to us directly at{" "}
                    <a href="mailto:cortyxlabs@gmail.com" className="text-primary hover:underline">
                      cortyxlabs@gmail.com
                    </a>
                    . We'll be happy to discuss how we can help you with your college applications or startup project.
                  </>
                )
              }
            ]}
          ].map((sectionData, sectionIndex) => (
            <div key={sectionData.section} className="mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-primary mb-6 tracking-tight"
              >
                {sectionData.section}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sectionData.items.map((item, itemIndex) => {
                  // Calculate unique index: General (0-3), Registration (4-10), Other (11-12)
                  let faqIndex = itemIndex;
                  if (sectionIndex === 1) faqIndex = itemIndex + 4; // Registration starts at 4
                  else if (sectionIndex === 2) faqIndex = itemIndex + 11; // Other starts at 11
                  
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden cursor-pointer"
                    >
                      <button
                        onClick={() => setOpenFAQ(isOpen ? null : faqIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                      >
                        <h4 className="text-lg font-semibold text-primary tracking-tight pr-4">
                          {item.question}
                        </h4>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <p className="text-gray-200 leading-relaxed tracking-wide">
                                {typeof item.answer === "string" ? item.answer : item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={animateSection === "#contact" ? { opacity: 0, y: 30 } : false}
        animate={animateSection === "#contact" ? { opacity: 1, y: 0 } : {}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-0 relative z-10 scroll-mt-32 md:scroll-mt-40"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 text-center tracking-tight">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
          >
            <p className="text-lg text-gray-200 mb-6 text-center leading-relaxed tracking-wide">
              Have questions? Want to learn more? Get in touch with us!
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your message"
                className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300 shadow-lg shadow-primary/50"
              >
                Send Message
              </button>
            </form>
            <p className="text-gray-300 text-sm mt-4 text-center">
              Or email us directly at{" "}
              <a href="mailto:cortyxlabs@gmail.com" className="text-primary hover:underline">
                cortyxlabs@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Spacer between Contact and Footer */}
      <div className="h-24"></div>
    </main>
  );
}
