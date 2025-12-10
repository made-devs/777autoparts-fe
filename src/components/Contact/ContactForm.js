'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SENT

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING');
    // Simulasi kirim data
    setTimeout(() => setStatus('SENT'), 2000);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 p-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-black italic uppercase text-white">
          Transmission <span className="text-voltage">Form.</span>
        </h2>
        <span className="text-[10px] font-mono text-neutral-500 border border-neutral-700 px-2 py-1 rounded-sm">
          STATUS: {status}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Identity & Frequency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-voltage">
              Agent ID (Name)
            </label>
            <input
              type="text"
              required
              className="w-full bg-neutral-950 border border-neutral-700 text-white font-mono text-sm px-4 py-3 outline-none focus:border-voltage focus:bg-neutral-900 transition-all"
              placeholder="ENTER NAME"
            />
          </div>
          <div className="group">
            <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-voltage">
              Return Freq (Email)
            </label>
            <input
              type="email"
              required
              className="w-full bg-neutral-950 border border-neutral-700 text-white font-mono text-sm px-4 py-3 outline-none focus:border-voltage focus:bg-neutral-900 transition-all"
              placeholder="ENTER EMAIL"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="group">
          <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-voltage">
            Subject Protocol
          </label>
          <select className="w-full bg-neutral-950 border border-neutral-700 text-white font-mono text-sm px-4 py-3 outline-none focus:border-voltage focus:bg-neutral-900 transition-all appearance-none uppercase cursor-pointer">
            <option>Product Inquiry</option>
            <option>Order Status</option>
            <option>Technical Support</option>
            <option>Partnership</option>
          </select>
        </div>

        {/* Message */}
        <div className="group">
          <label className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-voltage">
            Payload Data (Message)
          </label>
          <textarea
            rows="5"
            required
            className="w-full bg-neutral-950 border border-neutral-700 text-white font-mono text-sm px-4 py-3 outline-none focus:border-voltage focus:bg-neutral-900 transition-all resize-none"
            placeholder="TYPE MESSAGE HERE..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'SENT' || status === 'SENDING'}
          className="w-full bg-voltage text-black font-bold uppercase py-4 tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed clip-path-button relative overflow-hidden group"
        >
          <span className="relative z-10">
            {status === 'SENT' ? 'TRANSMISSION COMPLETE' : 'INITIATE UPLINK'}
          </span>
          {/* Glitch hover effect overlay */}
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
        </button>
      </form>
    </div>
  );
}
