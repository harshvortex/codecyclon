export const metadata = {
  title: "Terms of Service",
  description: "Codecyclon Terms of Service — terms and conditions for using our web and app development services.",
};

export default function TermsPage() {
  return (
    <div className="container section" style={{ maxWidth: '720px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last updated: April 1, 2026</p>

      <div style={prose}>
        <h2>1. Services</h2>
        <p>Codecyclon provides web development, app development, e-commerce, landing page design, SEO, digital marketing, and ongoing maintenance services. All project scopes, timelines, and deliverables are agreed upon in a written proposal before work begins.</p>

        <h2>2. Pricing & Payment</h2>
        <p>All prices listed on our website are indicative starting prices in Indian Rupees (₹). Final pricing depends on project scope and complexity. A detailed quote will be provided after the discovery call. Standard payment terms:</p>
        <ul>
          <li>50% upfront before work begins</li>
          <li>50% upon project completion and approval</li>
          <li>Monthly services are billed at the start of each billing cycle</li>
        </ul>

        <h2>3. Revisions & Scope</h2>
        <p>Each plan includes a specified number of revision rounds. Additional revisions beyond the included rounds may incur extra charges. Changes that significantly alter the agreed project scope will be quoted separately.</p>

        <h2>4. Intellectual Property</h2>
        <p>Upon full payment, all custom-designed assets, code, and deliverables become the property of the client. We retain the right to showcase completed work in our portfolio unless otherwise agreed in writing.</p>

        <h2>5. Confidentiality</h2>
        <p>We treat all project information as confidential. We will not disclose business-sensitive information shared during the project without the client&apos;s written consent.</p>

        <h2>6. Cancellation & Refunds</h2>
        <p>Clients may cancel a project at any time. Work completed up to the cancellation date will be billed. The upfront payment is non-refundable once work has commenced. Monthly services can be cancelled with 30 days&apos; notice.</p>

        <h2>7. Liability</h2>
        <p>Codecyclon&apos;s total liability for any project shall not exceed the total amount paid by the client for that project. We are not liable for indirect, incidental, or consequential damages.</p>

        <h2>8. Changes to Terms</h2>
        <p>We reserve the right to update these terms. Clients will be notified of significant changes via email.</p>

        <h2>9. Contact</h2>
        <p>For questions about these terms, contact us at <a href="mailto:codecyclon@gmail.com" style={{ color: 'var(--primary)' }}>codecyclon@gmail.com</a>.</p>
      </div>
    </div>
  );
}

const prose = {
  color: 'var(--text-secondary)',
  lineHeight: '1.8',
  fontSize: '0.95rem',
};
