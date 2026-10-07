import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import FadeIn from "@/components/marketing/FadeIn";
import ContactForm from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Contact — PlaysWoo",
  description: "Get in touch with the PlaysWoo team for support or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-brand-surface to-background py-20 md:py-28">
        <div className="mx-auto max-w-xl px-6">
          <FadeIn className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg leading-8 text-brand-muted">
              Questions, feedback, or need support? Send us a message and
              we&apos;ll get back to you shortly.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-12">
            <div className="rounded-2xl border border-brand-border bg-background p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
