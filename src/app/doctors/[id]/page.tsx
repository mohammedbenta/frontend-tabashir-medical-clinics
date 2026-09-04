import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DoctorProfile } from "@/components/DoctorProfile";
import { doctors, getDoctor } from "@/data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return doctors.map((doctor) => ({ id: doctor.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const doctor = getDoctor(id);
  if (!doctor) return {};
  return {
    title: doctor.name.ar,
    description: doctor.credibility.ar,
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doctor = getDoctor(id);
  if (!doctor) notFound();

  return <DoctorProfile doctor={doctor} />;
}
