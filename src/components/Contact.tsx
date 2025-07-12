import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
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
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-3 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => alert("Message sent! (This is a demo)")}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
