import { type LucideIcon, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { contact, socialLinks } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  github:   Github,
  linkedin: Linkedin,
  mail:     Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1215] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-semibold gradient-text mb-1">
              Houda Lamrabet
            </p>
            <p className="text-sm text-white/50">
              Data & AI Engineer · {contact.location}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return Icon ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon !== 'mail' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-pink-400/60 hover:text-pink-400 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ) : null;
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/35">
          <p>© {year} Houda Lamrabet. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-pink-400 fill-pink-400" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
