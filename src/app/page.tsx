import Image from "next/image";
import Homepage from "../components/Homepage";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="">
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}
export const metadata = {
  title: "TriggerX",
  description: "Next-Gen Blockchain Automation",
  openGraph: {
    title: "TriggerX",
    description: "Next-Gen Blockchain Automation",
    url: "https://trigger-x.vercel.app//",
    siteName: "TriggerX",
    // images: [
    //   {
    //     url: "https://ipfs.io/ipfs/QmeSP1QkWJk2FivenDPD64SYFysWs8E5yPMNqyK9P7Sf2b", // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://ipfs.io/ipfs/QmeSP1QkWJk2FivenDPD64SYFysWs8E5yPMNqyK9P7Sf2b", // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};
