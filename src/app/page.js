import Login from "./components/Login";
import { compileEmailTemplate, sendMail } from "./lib/mailer/mail";
import { Button } from "@/components/ui/button";

export default async function Home() {
  /*  const send = async () => {
    "use server";
    await sendMail({
      to: "matienzonoreenma.patrice@gmail.com",
      name: "aj",
      subject: "Forgot Pass",
      body: `<h1>yabag</h1>`  compileEmailTemplate(
        "Test",
        "fb.com"
      ),
    });
  }; */
  return (
    <main className="">
      <section id="home">
        {/* <form>
          <Button formAction={send}>test</Button>
        </form> */}
        <Login />
      </section>
    </main>
  );
}
