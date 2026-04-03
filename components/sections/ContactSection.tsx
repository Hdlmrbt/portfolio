'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon, Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { contact, socialLinks } from '@/lib/data';

interface FormState {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const contactInfoItems: { icon: LucideIcon; label: string; value: string; href: string | undefined }[] = [
  { icon: Mail,    label: 'Email',    value: contact.email,    href: `mailto:${contact.email}` },
  { icon: Phone,   label: 'Phone',    value: contact.phone,    href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: MapPin,  label: 'Location', value: contact.location, href: undefined },
];

const socialIcons: Record<string, LucideIcon> = {
  github:   Github,
  linkedin: Linkedin,
  mail:     Mail,
};

export function ContactSection() {
  const [form, setForm]               = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg]       = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setSubmitState('error');
      } else {
        setSubmitState('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setSubmitState('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white/70 text-sm text-[var(--text)] placeholder:text-[var(--text-3)] focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200 hover:border-pink-200';

  return (
    <section id="contact" className="section-padding bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let&apos;s work together"
          subtitle="Open to internships, collaborations, and full-time opportunities. Let&apos;s build something great."
        />

        <div className="grid lg:grid-cols-[380px,1fr] gap-10">

          {/* ── Left: Contact info + social ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Info */}
            <div className="glass border border-[var(--glass-border)] rounded-2xl p-6">
              <h3 className="text-base font-semibold text-[var(--text)] mb-5">Get in touch</h3>
              <div className="space-y-4">
                {contactInfoItems.map((item) => {
                  const Icon = item.icon;
                  const Inner = (
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                        <Icon size={15} className="text-pink-600" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-3)] font-medium">{item.label}</p>
                        <p className="text-sm font-medium text-[var(--text)] group-hover:text-pink-600 transition-colors">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                      {Inner}
                    </a>
                  ) : (
                    <div key={item.label}>{Inner}</div>
                  );
                })}
              </div>
            </div>

            {/* Social links */}
            <div className="glass border border-[var(--glass-border)] rounded-2xl p-6">
              <h3 className="text-base font-semibold text-[var(--text)] mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.icon];
                  return Icon ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.icon !== 'mail' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[var(--text-2)] hover:text-pink-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-beige-100 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                        <Icon size={14} />
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ) : null;
                })}
              </div>
            </div>

            {/* Availability badge */}
            <div className="rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-300 animate-pulse" />
                  <span className="text-sm font-semibold">Available for opportunities</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Seeking internships in AI/ML, data science, or full-stack roles. Open to remote and Morocco-based positions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass border border-[var(--glass-border)] rounded-2xl p-8">
              <h3 className="text-base font-semibold text-[var(--text)] mb-6">Send a message</h3>

              {submitState === 'success' ? (
                <motion.div
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={28} className="text-green-600" />
                  </div>
                  <p className="text-base font-semibold text-[var(--text)]">Message sent!</p>
                  <p className="text-sm text-[var(--text-3)] max-w-xs">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitState('idle')}
                    className="text-sm text-pink-600 hover:underline mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-2)] mb-1.5">
                        Name <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[var(--text-2)] mb-1.5">
                        Email <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-2)] mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What&apos;s this about?"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-2)] mb-1.5">
                      Message <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {submitState === 'error' && (
                    <motion.div
                      className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-3"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={15} />
                      {errorMsg}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={submitState === 'loading'}
                    icon={<Send size={16} />}
                  >
                    {submitState === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}