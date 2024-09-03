import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

const welcomeVideo = "/assets/video1.mp4";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto shadow-inner shadow-white md:shadow-none">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />

          <div className="tex-14-regular mt-10 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-blue-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      {/* <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      /> */}
      <video
        src={welcomeVideo}
        autoPlay
        muted
        // loop
        playsInline
        // type="video/mp4"
        className="welcomeVideo md:shadow-2xl  md:shadow-white "
      ></video>
    </div>
  );
}
