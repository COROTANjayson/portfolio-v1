import React from "react";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-gray-300 mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-400" />
                <span>corotanjaysonjake@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-3 text-blue-400" />
                <span>Cagayan de Oro City, Philippines</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
