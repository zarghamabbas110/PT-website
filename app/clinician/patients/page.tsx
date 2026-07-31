import PatientManager from "@/components/clinician/PatientManager";

export const metadata = {
  title: "My patients — PhysioFlow",
  description: "Create patient logins and assign exercise programmes.",
};

export default function PatientsPage() {
  return <PatientManager />;
}
