import Login from "./components/Login";
import { compileEmailTemplate, sendMail } from "./lib/mailer/mail";
import { Button } from "@/components/ui/button";

export default async function Home() {
  /*  const send = async () => {
    "use server";
    await sendMail({
      to: "mackycalabia@gmail.com",
      name: "aj",
      subject: "Forgot Pass",
      body:  `<h1>yabag</h1>`  compileEmailTemplate("Test", "youtube"),
    });
  }; */
  return (
    <main className="">
      <section id="home">
        <Login />
      </section>
    </main>
  );
}
