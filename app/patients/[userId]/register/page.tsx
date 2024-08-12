import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

const registerVideo = "/assets/video3.mp4";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen bg-dark-300 bg-opacity-90">
      {/* <Image
        src="/assets/images/register-img4.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      /> */}
      <video
        src={registerVideo}
        autoPlay
        muted
        loop
        playsInline
        // type="video/mp4"
        className="registerVideo"
      ></video>
      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <div className="tex-14-regular my-10 py-10 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
