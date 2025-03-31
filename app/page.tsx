import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana, poppins } from "./ui/fonts";
import Image from "next/image";
import bg from "../public/header-drop.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Image
          src="/logo.png"
          width={383}
          height={183}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col  gap-6 rounded-lg bg-gray-50 px-6 py-12  md:w-2.5/5 md:px-20">
          <div className={styles.shape} />
          <p
            className={`text-xl text-cyan-800 md:text-2xl md:leading-normal ${poppins.className}`}
          >
            <strong>Diabetes management done right</strong>
          </p>
          <div>
            <p className="text-base text-gray-800 md:text-lg">
              Cloud-based web app for people with diabetes and pre-diabetes.
              Real-time monitoring platform for medical practitioners and
              patients.{" "}
            </p>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div
          className="flex items-center justify-center p-6 md:w-2.5/5 md:px-28 md:py-12"
          style={{
            backgroundImage: `url(${bg.src})`,
            width: "100%",
            height: "100%"
          }}
        >
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop-2.png"
            width={622}
            height={687}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile-2.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
