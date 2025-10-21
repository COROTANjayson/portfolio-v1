// src/components/contact/ContactForm.tsx
import { contactSchema } from "./contact-schema";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honey: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🧠 Validate inputs
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      setErrorMsg(validation.error.issues[0].message);
      setStatus("error");
      return;
    }
    // 🐝 Honeypot check — ignore spam
    if (formData.honey !== "") {
      console.warn("Spam detected, ignoring submission.");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg(null);

      // 🚀 EmailJS config
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "", honey: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 relative">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      {/* 🐝 Honeypot field — hidden from users */}
      <div className="hidden">
        <input
          type="text"
          name="honey"
          value={formData.honey}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors disabled:opacity-70"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center">{errorMsg}</p>
      )}
    </form>
  );
};

export default ContactForm;
