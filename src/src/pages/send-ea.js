export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, productName, licenseKey } = req.body

  try {
    // Using Fetch (no nodemailer needed for now)
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: 'service_2bd44zh',
        template_id: 'template_ccjsueg',
        user_id: 'vTgQI6P-SBGPfzNop',
        template_params: {
          to_email: email,
          product_name: productName,
          license_key: licenseKey
        }
      })
    })

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent!' })
    } else {
      return res.status(500).json({ error: 'Failed to send email' })
    }
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Server error' })
  }
}