import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DepartmentView } from "@/components/department/DepartmentView";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { departmentIds, getDepartment } from "@/data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return departmentIds.map((department) => ({ department }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ department: string }>;
}): Promise<Metadata> {
  const { department: id } = await params;
  const department = getDepartment(id);
  if (!department) return {};
  return {
    title: department.name.ar,
    description: department.description.ar,
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department: id } = await params;
  const department = getDepartment(id);
  if (!department) notFound();

  return (
    <>
      <DepartmentView department={department} />
      <AppointmentCTA specialty={department.id} />
    </>
  );
}
