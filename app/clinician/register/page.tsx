import ClinicianRegister from "@/components/clinician/ClinicianRegister";

export const metadata = {
  title: "Request clinician access — PhysioFlow",
  description:
    "Send your registration details for approval and receive an access code.",
};

export default function ClinicianRegisterPage() {
  return <ClinicianRegister />;
}
