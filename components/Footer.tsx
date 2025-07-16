import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/70 text-center sm:text-left">
          © 2024 Whatbytes. All rights reserved.
        </p>

        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=61555641119330"
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/teamwhatbytes"
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/whatbytes/"
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
