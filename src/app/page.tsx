import { Hero } from "@/components/home/Hero";
import { Specialties } from "@/components/home/Specialties";
import { DermatologyFeature } from "@/components/home/DermatologyFeature";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Authority } from "@/components/home/Authority";
import { Doctors } from "@/components/home/Doctors";
import { Technology } from "@/components/home/Technology";
import { ClinicTour } from "@/components/home/ClinicTour";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { Offers } from "@/components/home/Offers";
import { Insurance } from "@/components/home/Insurance";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Doctors />
      <Specialties />
      <DermatologyFeature />
      <BeforeAfter />
      <WhyChoose />
      <Authority />
      <Technology />
      <ClinicTour />
      <Testimonials />
      <FAQ />
      <Offers />
      <Insurance />
      <FinalCTA />
    </main>
  );
}
