import React, { useState } from "react";
import { Mail, Check } from "lucide-react";
import { signupForNewsletter } from "../services/newsletterService";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // ✅ new state for optional full name
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      await signupForNewsletter({
        email,
        name: name.trim() || undefined, // ✅ send name only if entered
      });
      setIsSubmitted(true);
      setEmail("");
      setName("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-600">
          You've been successfully subscribed to our newsletter.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-burgundy hover:text-burgundy-dark font-medium"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-burgundy to-burgundy-dark p-8 rounded-lg text-white">
      <div className="max-w-md mx-auto text-center">
        <Mail className="h-12 w-12 text-gold mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold mb-2">Stay Connected</h3>
        <p className="mb-6 text-burgundy-light">
          Subscribe to our newsletter for exclusive offers, events, and culinary updates.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ✅ Full Name (optional) */}
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name (optional)"
              className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold mb-3"
            />
          </div>

          {/* Email (required) */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-dark text-gray-900 font-semibold py-3 px-6 rounded-md transition-colors duration-200 transform hover:scale-105"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
