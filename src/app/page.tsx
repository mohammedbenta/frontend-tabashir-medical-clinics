import { Hero } from "@/components/home/Hero";
import { Departments } from "@/components/home/Departments";
import { WhyTabashir } from "@/components/home/WhyTabashir";
import { Doctors } from "@/components/home/Doctors";
import { Testimonials } from "@/components/home/Testimonials";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Doctors />
      <Departments />
      <WhyTabashir />
      <Testimonials />
      <AppointmentCTA />
    </main>
  );
}
