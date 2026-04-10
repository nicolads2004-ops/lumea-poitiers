interface LeadBody {
  name: string
  email: string
  phone: string
  timing?: string
  companyName?: string
  projectType?: 'vitrine' | 'ecommerce' | 'refonte' | 'autre'
  budget?: string
  message?: string
}

const projectTypeLabels: Record<string, string> = {
  vitrine: 'Site vitrine',
  ecommerce: 'Site e-commerce',
  refonte: 'Refonte de site',
  autre: 'Autre'
}

const TIMING_MAP: Record<string, { label: string; color: string; priority: string }> = {
  'immediat': { label: 'Immédiat (haute priorité)', color: '#EF4444', priority: 'HAUTE PRIORITÉ' },
  '3-6mois': { label: 'Dans 3 à 6 mois', color: '#F59E0B', priority: 'PRIORITÉ MOYENNE' },
  '+1an': { label: 'Dans plus d\'un an', color: '#6B7280', priority: 'NURTURE' }
}

export default defineEventHandler(async (event) => {
  const body = await readBody<LeadBody>(event)

  // Validation
  if (!body.name || !body.email || !body.phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Champs obligatoires manquants : name, email, phone'
    })
  }

  if (!body.phone?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Téléphone obligatoire.' })
  }

  if (!body.timing) {
    throw createError({ statusCode: 400, statusMessage: 'Timing obligatoire.' })
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(body.email?.trim() || '')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Adresse email invalide.'
    })
  }

  const timingInfo = TIMING_MAP[body.timing] || { label: body.timing, color: '#6B7280', priority: '' }

  const { default: nodemailer } = await import('nodemailer')

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })

  const projectLabel = body.projectType ? projectTypeLabels[body.projectType] ?? body.projectType : 'Non précisé'

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 24px; border-radius: 8px;">
      <div style="background: #030712; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
        <h1 style="color: #0EA5E9; margin: 0; font-size: 24px;">LUMEA</h1>
        <p style="color: #94a3b8; margin: 4px 0 0;">Nouveau lead entrant</p>
        <div style="display:inline-block;margin-top:12px;padding:8px 16px;border-radius:6px;background:${timingInfo.color};color:#fff;font-weight:bold;font-size:13px;">
          ${timingInfo.priority} — ${timingInfo.label}
        </div>
      </div>

      <div style="background: #fff; border-radius: 8px; padding: 24px; border: 1px solid #e2e8f0;">
        <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Contact</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Nom</td>
            <td style="padding: 8px 0; color: #0f172a;">${body.name}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${body.email}" style="color: #0EA5E9;">${body.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Téléphone</td>
            <td style="padding: 8px 0;"><a href="tel:${body.phone}" style="color: #0EA5E9;">${body.phone}</a></td>
          </tr>
          ${body.companyName ? `
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Entreprise</td>
            <td style="padding: 8px 0; color: #0f172a;">${body.companyName}</td>
          </tr>` : ''}
        </table>
      </div>

      <div style="background: #fff; border-radius: 8px; padding: 24px; border: 1px solid #e2e8f0; margin-top: 16px;">
        <h2 style="color: #0f172a; font-size: 18px; margin-top: 0;">Projet</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: 600;">Timing</td>
            <td style="padding: 8px 0;">
              <span style="background:${timingInfo.color}1a;color:${timingInfo.color};padding:2px 10px;border-radius:12px;font-size:14px;font-weight:600;">${timingInfo.label}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Type de projet</td>
            <td style="padding: 8px 0;">
              <span style="background: #e0f2fe; color: #0369a1; padding: 2px 10px; border-radius: 12px; font-size: 14px;">${projectLabel}</span>
            </td>
          </tr>
          ${body.budget ? `
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Budget</td>
            <td style="padding: 8px 0; color: #0f172a;">${body.budget}</td>
          </tr>` : ''}
          ${body.message ? `
          <tr>
            <td colspan="2" style="padding-top: 12px; color: #64748b; font-weight: 600;">Message</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px 12px; background: #f8fafc; border-radius: 6px; color: #0f172a; line-height: 1.6;">${body.message.replace(/\n/g, '<br>')}</td>
          </tr>` : ''}
        </table>
      </div>

      <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 24px;">
        Lead reçu via lumea.poitiers.digital — ${new Date().toLocaleDateString('fr-FR', { dateStyle: 'full' })} à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
      </p>
    </div>
  `

  await transporter.sendMail({
    from: `"LUMEA Leads" <${process.env.GMAIL_USER}>`,
    to: 'contact@poitiers.digital',
    cc: ['matthieu@shark-graphik.fr', 'nicolads2004@gmail.com'],
    replyTo: body.email,
    subject: `[LUMEA] Nouveau lead — ${body.name}${body.companyName ? ` (${body.companyName})` : ''} — ${projectLabel}`,
    html: htmlBody
  })

  return { success: true }
})
