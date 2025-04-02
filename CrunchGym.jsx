import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Flame } from "lucide-react";
import { motion } from "framer-motion";

function AnimatedCounter({ target, label }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;
    let duration = 1000;
    let incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center space-y-1">
      <div className="text-4xl font-extrabold text-yellow-400 drop-shadow-lg">{count}+</div>
      <div className="text-sm text-white">{label}</div>
    </div>
  );
}

export default function CrunchGym() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 space-y-16 text-white min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/mnt/data/Screenshot 2025-04-02 at 5.20.03 PM.png')" }}
    >
      {/* Logo & Header */}
      <header className="flex items-center justify-between max-w-6xl mx-auto pb-6 border-b border-yellow-400">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-3"
        >
          <Flame className="w-10 h-10 text-yellow-400 animate-pulse" />
          <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow-sm animate-bounce tracking-widest">
            CRUNCH ⚡
          </h1>
        </motion.div>
        <Button variant="outline" className="border-yellow-400 text-yellow-300">Sign In</Button>
      </header>

      {/* Hero Section */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto"
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-white p-10">
          <h2 className="text-6xl font-extrabold mb-4 leading-tight text-yellow-300 drop-shadow-lg">
            Unleash Your Inner Beast
          </h2>
          <p className="text-xl max-w-xl text-white">
            From powerlifting to pulse-pounding cardio, Crunch Gym is where goals
            become reality.
          </p>
          <Button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-md">
            Become a Member
          </Button>
        </div>
        <img
          src="/mnt/data/Screenshot 2025-04-02 at 5.19.42 PM.png"
          alt="Crunch Gym"
          className="w-full object-cover h-96 opacity-40"
        />
      </motion.div>

      {/* What We Do */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center space-y-4 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-yellow-400">What We Do</h2>
        <p className="text-lg text-white">
          We're not just a gym — we're a movement. Whether you're lifting heavy,
          chasing endurance, or sculpting your dream physique, Crunch Gym is your
          iron playground. With elite machines, expert trainers, and a community
          that pushes hard — every rep counts.
        </p>
      </motion.section>

      {/* Counter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-y border-yellow-400"
      >
        <AnimatedCounter target="1200" label="Happy Members" />
        <AnimatedCounter target="50" label="Machines & Stations" />
        <AnimatedCounter target="365" label="Open Days a Year" />
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl font-bold text-yellow-400">Membership</h2>
        <Card className="max-w-md mx-auto bg-black/70 border-yellow-400">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-yellow-300">Monthly Access</h3>
            <p className="text-lg text-white">Just $69.99/month</p>
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              Join Now
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Ratings Section */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center space-y-8"
      >
        <h2 className="text-4xl font-bold text-yellow-400">Our Members Love Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Crunch changed my life. I hit PRs I never thought were possible.",
            "The vibe here is insane. You feel the energy the moment you walk in.",
            "Clean, focused, intense. It’s my favorite place to be after work.",
          ].map((review, index) => (
            <Card key={index} className="bg-black/60 border-yellow-400">
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <p className="text-sm italic text-white">"{review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Gym Interior Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl overflow-hidden shadow-xl max-w-6xl mx-auto"
      >
        <img
          src="/mnt/data/Screenshot 2025-04-02 at 5.20.03 PM.png"
          alt="Gym Interior"
          className="w-full object-cover h-96"
        />
      </motion.div>
    </motion.div>
  );
}
