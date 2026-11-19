const imgLogo = "/assets/ad5f3.png";

export default function TermsPage() {
  const sections = [
    ["1. INTRODUCTION", `Welcome to Zenith Studios ("we", "our", "us"). Zenith Studios provides creative, branding, UI/UX design, website development, and digital solutions to individuals and businesses.\n\nBy accessing our website, engaging our services, or entering into a project agreement with us, you ("Client", "you", "your") agree to these Terms & Conditions.\n\nThese terms are governed by the applicable laws of India.`],
    ["2. SERVICES OFFERED", "Zenith Studios provides the following services:\n\n• UI/UX Design – User interface and user experience design.\n• Full Stack Development – Frontend and backend web application development.\n• Landing Pages – Design and development of conversion-focused landing pages.\n• Brand Design & Mockups – Branding, visual identity, and creative mockups.\n• Support & Maintenance – Website updates, technical support, and performance maintenance.\n\nSpecific deliverables, timelines, pricing, and project requirements will be defined in an individual quotation, proposal, or signed Client Service Agreement."],
    ["3. PROJECT AGREEMENTS & APPROVAL", "Every project may require a separate written agreement or approved quotation.\n\nThe project will commence once:\n\n• The scope of work has been mutually agreed upon.\n• The quotation has been accepted.\n• The required advance payment has been received.\n\nAny changes to the agreed scope must be approved by both parties and may result in additional charges or revised deadlines."],
    ["4. PAYMENTS & BILLING", "• All project fees will be communicated before the commencement of work.\n• An advance payment may be required to initiate a project.\n• Remaining payments must be made according to the agreed payment schedule.\n• Additional features, revisions outside the agreed scope, and new requirements may incur additional charges.\n• Applicable taxes, including GST where required, will be charged separately or included as specified in the quotation.\n• Delayed payments may result in a temporary suspension of project work or delivery after reasonable notice."],
    ["5. REVISIONS & PROJECT CHANGES", "• The number of included revisions will be specified in the project proposal.\n• Revisions must remain within the originally agreed scope.\n• Major design changes, additional functionality, or changes requested after approval may be treated as additional work.\n• Any additional charges and timeline adjustments will be communicated before proceeding."],
    ["6. INTELLECTUAL PROPERTY & OWNERSHIP", "All original designs, graphics, source code, branding materials, and other creative work developed by Zenith Studios remain the intellectual property of Zenith Studios until the agreed project payment has been received in full.\n\nUpon full payment, ownership or usage rights for the specifically agreed deliverables will transfer to the Client as stated in the project agreement.\n\nThe following are excluded unless separately agreed:\n\n• Pre-existing tools, frameworks, libraries, and reusable components.\n• Third-party software, fonts, stock images, and licensed assets.\n• Open-source software, which remains subject to its respective licence.\n• Internal templates, workflows, and proprietary development methods.\n\nClients are responsible for obtaining appropriate rights to materials they provide to us."],
    ["7. CLIENT RESPONSIBILITIES", "Clients agree to:\n\n• Provide accurate project information and requirements.\n• Supply necessary content, images, logos, and other assets.\n• Provide timely feedback and approvals.\n• Ensure they have legal rights to all materials supplied.\n• Make payments according to the agreed schedule.\n\nDelays in providing information, content, or approvals may affect the project delivery timeline."],
    ["8. CANCELLATION & REFUNDS", "• Either party may request project termination through written communication.\n• If a Client cancels a project, charges may be calculated based on the work completed, expenses incurred, and contractual commitments up to the cancellation date.\n• Payments for completed milestones and approved deliverables are generally non-refundable.\n• Any eligible refund will be assessed against the agreed project terms and applicable Indian consumer protection laws.\n• Zenith Studios reserves the right to suspend or terminate services in cases of non-payment, misuse, unlawful requests, or material breach of the agreement, subject to applicable law."],
    ["9. PROJECT DELIVERY & THIRD-PARTY SERVICES", "Delivery timelines are estimates based on the agreed scope and availability of required information.\n\nZenith Studios is not responsible for interruptions or failures caused by third-party hosting providers, domain registrars, APIs, plugins, payment gateways, or external software services.\n\nThird-party subscriptions, hosting, domains, and licensing fees are the Client's responsibility unless otherwise agreed."],
    ["10. SUPPORT & MAINTENANCE", "Support and maintenance services are limited to the package or scope agreed upon with the Client.\n\nUnless specifically included, ongoing maintenance, hosting, security monitoring, content updates, and feature enhancements are not part of the original development cost.\n\nZenith Studios does not guarantee uninterrupted operation of third-party platforms or services."],
    ["11. CONFIDENTIALITY & DATA PROTECTION", "Both parties agree to protect confidential business information, credentials, project documents, and other sensitive information shared during the engagement.\n\nZenith Studios will handle personal information in accordance with applicable Indian data protection and privacy laws, including the Digital Personal Data Protection Act, 2023, and applicable rules as they come into force.\n\nClient information will not knowingly be disclosed to unauthorised parties except where required for service delivery or by law."],
    ["12. LIMITATION OF LIABILITY", "Zenith Studios will exercise reasonable professional care while providing its services.\n\nTo the extent permitted by applicable law, Zenith Studios will not be responsible for indirect or consequential losses, including loss of profits, business opportunities, or revenue arising from the use of delivered services.\n\nNothing in these terms excludes liability that cannot legally be excluded under applicable Indian law, including applicable consumer rights."],
    ["13. PORTFOLIO & PROJECT SHOWCASE", "Zenith Studios may showcase completed projects, designs, and deliverables in its professional portfolio, website, or social media for promotional purposes, unless the Client and Zenith Studios agree otherwise in writing.\n\nConfidential information and restricted materials will not be publicly disclosed without appropriate permission."],
    ["14. WEBSITE USAGE & PROHIBITED ACTIVITIES", "Visitors and Clients must not:\n\n• Use our website for unlawful activities.\n• Attempt unauthorised access to our systems.\n• Copy or reproduce protected website content without permission.\n• Distribute malicious software or harmful content.\n• Misrepresent their identity or project requirements.\n\nZenith Studios reserves the right to restrict access in cases of misuse, subject to applicable law."],
    ["15. GOVERNING LAW & DISPUTE RESOLUTION", "These Terms & Conditions shall be governed by the laws of India.\n\nAny disputes arising from these terms or services shall first be addressed through good-faith discussions between the parties.\n\nIf an amicable resolution cannot be reached, the dispute may be referred to the competent courts having jurisdiction in [City, State], India, subject to applicable law."],
    ["16. CHANGES TO THESE TERMS", "Zenith Studios reserves the right to update these Terms & Conditions when necessary.\n\nUpdated terms will be published on our website with a revised Last Updated date. Changes will not retrospectively alter existing contractual rights unless mutually agreed or required by law."],
    ["17. CONTACT INFORMATION", "For questions, project enquiries, or concerns regarding these Terms & Conditions, please contact:\n\nZENITH STUDIOS\n\nEmail: ram14112006@gmail.com\nBusiness Address: ***********\nLocation: [Chennai, Tamil Nadu, India]\n\nWe will respond to enquiries within a reasonable timeframe and in accordance with applicable Indian law."], 
        ]as const;

  return (
    <main className="terms-page">
      <header className="terms-header">
        <a href="#top" aria-label="Return to Zenith Studios home">
          <img src={imgLogo} alt="Zenith Studios" />
        </a>
      </header>

      <article className="terms-content">
        <p className="terms-kicker"># ZENITH STUDIOS</p>
        <h1>Terms &amp; Conditions</h1>
        <div className="terms-dates">
          <p><strong>Effective Date:</strong> [19/11/2026]</p>
          <p><strong>Last Updated:</strong> [19/11/2026]</p>
        </div>

        {sections.map(([title, text]) => (
          <section key={title}>
            <h2>{title}</h2>
            {text.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <p className="terms-ending">© [2026] Zenith Studios. All Rights Reserved.</p>
      </article>

      <footer className="terms-footer">
        <a href="#top">Home</a>
        <a href="#terms">Terms of Service</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="https://www.instagram.com/zenithstudios_/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <span>© 2026 Zenith Studios. All Rights Reserved.</span>
      </footer>
    </main>
  );
}
