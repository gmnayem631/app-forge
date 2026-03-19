import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thanks hero! You'll get super app updates soon 🦸‍♂️");
    // → replace with real toast / form submission later
  };

  return (
    <footer className="bg-base-300 text-base-content border-t border-base-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand / Hero tag */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-5xl sm:text-6xl drop-shadow-md">🦸‍♂️</span>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
                AppForge
              </h3>
              <p className="text-sm uppercase tracking-widest text-primary font-medium mt-1">
                Discover • Install • Rate
              </p>
            </div>
          </div>
          <p className="text-base-content/70 text-sm leading-relaxed max-w-xs">
            Your friendly neighborhood app store — finding the best mobile
            experiences, one hero at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-title text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                to="/"
                className="link link-hover hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/apps"
                className="link link-hover hover:text-primary transition-colors"
              >
                All Apps
              </Link>
            </li>
            <li>
              <Link
                to="/installation"
                className="link link-hover hover:text-primary transition-colors"
              >
                My Installations
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/gmnayem631"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover hover:text-primary transition-colors"
              >
                Contribute on GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Community */}
        <div>
          <h4 className="footer-title text-lg mb-4">Join the Heroes</h4>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="join w-full">
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered join-item flex-1 bg-base-100 focus:outline-none focus-within:ring-2 focus-within:ring-primary/40"
                required
              />
              <button
                type="submit"
                className="btn btn-primary join-item px-6 hover:scale-105 active:scale-95 transition-all"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-base-content/60">
              Weekly hero-curated apps + surprise drops
            </p>
          </form>
        </div>

        {/* Social + Legal */}
        <div>
          <h4 className="footer-title text-lg mb-4">Connect</h4>
          <div className="flex gap-6 text-2xl sm:text-3xl mb-8">
            <a
              href="https://www.linkedin.com/in/gulam-mustafa-nayem/"
              className="hover:text-primary hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gmnayem631"
              className="hover:text-primary hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>

          <div className="text-xs opacity-70 space-y-1.5">
            <p>© {new Date().getFullYear()} AppForge • All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
