"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function StayInformed() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <Mail className="w-12 h-12 text-brand-light-blue mx-auto" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to receive the latest research insights, policy updates, and news on AI governance in Africa directly to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button
              type="submit"
              className="bg-brand-blue text-white hover:bg-brand-blue/90"
              disabled={submitted}
            >
              <Send className="w-4 h-4 mr-2" />
              {submitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
