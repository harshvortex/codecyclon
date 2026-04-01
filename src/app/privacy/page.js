export const metadata = {
  title: "Privacy Policy",
  description: "Codecyclon Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="container section" style={{ maxWidth: '720px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last updated: April 1, 2026</p>

      <div style={prose}>
        <h2>1. Information We Collect</h2>
        <p>When you use our contact form, we collect your name, email address, phone number (optional), project type, budget range, and project details. We use this information solely to respond to your inquiry and provide a project quote.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Respond to your project inquiries</li>
          <li>Create and send project proposals</li>
          <li>Communicate about ongoing projects</li>
          <li>Send relevant updates about our services (only with your consent)</li>
        </ul>

        <h2>3. Data Storage & Security</h2>
        <p>Your data is stored securely and is not shared with third parties for marketing purposes. We implement appropriate security measures to protect your personal information.</p>

        <h2>4. Cookies</h2>
        <p>We use minimal cookies for theme preference storage (dark/light mode). No tracking cookies are used without your explicit consent.</p>

        <h2>5. Third-Party Services</h2>
        <p>We may use Google Analytics to understand website traffic patterns. This data is anonymized and used only for improving our website experience.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Withdraw consent for communications</li>
          <li>Request correction of inaccurate data</li>
        </ul>

        <h2>7. Contact Us</h2>
        <p>For privacy-related inquiries, contact us at <a href="mailto:codecyclon@gmail.com" style={{ color: 'var(--primary)' }}>codecyclon@gmail.com</a>.</p>
      </div>
    </div>
  );
}

const prose = {
  color: 'var(--text-secondary)',
  lineHeight: '1.8',
  fontSize: '0.95rem',
};
