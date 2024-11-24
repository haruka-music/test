import Image from "next/image";
import HomeImage from "../public/HomeImage.jpg";

export default function Home() {
  return (
    <>
      <h1>Public</h1>

      <section>
        <figure>
          <Image src={HomeImage} width={800} height={400} alt="main" />
          <p>
            Well come to Haruka Website
            <br />
            Please take your time.
          </p>
        </figure>
      </section>
    </>
  );
}
