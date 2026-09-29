'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm({ defaultPlan = '' }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    dispositivo: 'Smart TV Samsung',
    plan: defaultPlan || 'Plan 12 Meses (1 Pantalla)',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate swift processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-8 border border-green-500/30 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido Correctamente!</h3>
        <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
          Gracias, <strong>{formData.nombre}</strong>. Hemos recibido tu solicitud sobre el <strong>{formData.plan}</strong>.
          Uno de nuestros agentes técnicos se pondrá en contacto contigo en menos de 10 minutos a través de WhatsApp o a tu correo <strong>{formData.email}</strong> para facilitarte los detalles de activación.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            required
            placeholder="Ej. Carlos Martínez"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-spanish-red transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            Correo electrónico *
          </label>
          <input
            type="email"
            required
            placeholder="Ej. carlos@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-spanish-red transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            Número de WhatsApp / Teléfono
          </label>
          <input
            type="tel"
            placeholder="Ej. +34 612 345 678"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-spanish-red transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            Dispositivo principal
          </label>
          <select
            value={formData.dispositivo}
            onChange={(e) => setFormData({ ...formData, dispositivo: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-spanish-red transition-colors"
          >
            <option value="Smart TV Samsung">Smart TV Samsung</option>
            <option value="Smart TV LG">Smart TV LG</option>
            <option value="Amazon Fire TV Stick">Amazon Fire TV Stick</option>
            <option value="Android TV / Box / Google TV">Android TV / Box / Google TV</option>
            <option value="Apple TV">Apple TV</option>
            <option value="iPhone / iPad">iPhone / iPad</option>
            <option value="PC Windows / Mac">PC Windows / Mac</option>
            <option value="MAG Box">MAG Box</option>
            <option value="Otro dispositivo">Otro dispositivo</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
          Plan o servicio de interés
        </label>
        <select
          value={formData.plan}
          onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-spanish-red transition-colors"
        >
          <option value="Plan 3 Meses (29 €)">Plan 3 Meses (29,00 €)</option>
          <option value="Plan 6 Meses (39 €)">Plan 6 Meses (39,00 €)</option>
          <option value="Plan 12 Meses (49 €)">Plan 12 Meses — 1 Pantalla (49,00 €)</option>
          <option value="Plan Familiar 2 Pantallas (79 €)">Plan Familiar 2 Pantallas (79,00 €)</option>
          <option value="Plan Familiar 3 Pantallas (109 €)">Plan Familiar 3 Pantallas (109,00 €)</option>
          <option value="Plan Familiar 4 Pantallas (139 €)">Plan Familiar 4 Pantallas (139,00 €)</option>
          <option value="Consulta técnica / Duda">Consulta técnica / Duda previa</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
          Mensaje o consulta adicional
        </label>
        <textarea
          rows={4}
          placeholder="Escribe aquí si tienes alguna duda sobre la compatibilidad de tu aparato, aplicaciones recomendadas o cualquier consulta..."
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-spanish-red transition-colors resize-none"
        />
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <input type="checkbox" required id="consent" className="rounded bg-dark-900 border-white/20 text-spanish-red" />
        <label htmlFor="consent">
          He leído y acepto la <a href="/politica-de-privacidad" className="text-spanish-gold hover:underline">Política de Privacidad</a> y el tratamiento de mis datos para la gestión de mi consulta.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-spanish-red to-spanish-redBright hover:from-spanish-redBright hover:to-spanish-red shadow-glow-red hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
      >
        {loading ? (
          <span>Enviando mensaje...</span>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar solicitud de información</span>
          </>
        )}
      </button>
    </form>
  );
}
