const imgLogo = "/assets/ad5f3.png";

export default function PrivacyPage() {
  const sections = [
    ["1. INTRODUCTION", `Zenith Studios ("we", "our", "us") respects your privacy and is committed to protecting your personal information.\n\nThis Privacy Policy explains how we collect, use, store, process, and protect personal information when you visit our website, contact us, request a quotation, or engage our services.\n\nBy using our website or submitting information to us, you acknowledge this Privacy Policy.`],
    ["2. INFORMATION WE COLLECT", "We may collect the following categories of information:\n\nA. Personal Information\n• Full name\n• Email address\n• Phone number\n• Business or company name\n• Billing and business address\n\nB. Project Information\n• Project descriptions and requirements\n• Branding materials, logos, and design assets\n• Website content and development requirements\n• Files and documents voluntarily shared with us\n• Project communication and feedback\n\nC. Technical Information\nDepending on the website's configuration, we may collect:\n• IP address\n• Browser type and version\n• Device and operating system information\n• Website usage and interaction data\n• Cookies and similar technologies"],
    ["3. HOW WE USE YOUR INFORMATION", "We use collected information for legitimate business and service-related purposes, including:\n\n• Responding to enquiries and quotation requests.\n• Understanding project requirements.\n• Providing design, development, and branding services.\n• Communicating project updates and delivery information.\n• Processing payments and maintaining business records.\n• Providing technical support and maintenance.\n• Improving website performance and user experience.\n• Preventing fraudulent, unauthorised, or unlawful activities.\n• Meeting applicable legal and regulatory obligations.\n\nWe do not intentionally collect personal information beyond what is reasonably necessary for these purposes."],
    ["4. DATA PROCESSING & LEGAL BASIS", "We process personal data in accordance with applicable Indian data protection laws.\n\nWhere required, we obtain consent before processing personal data. Information may also be processed where permitted by applicable law.\n\nWe aim to ensure that personal information is processed for specific, lawful, and clearly communicated purposes."],
    ["5. COOKIES & TRACKING TECHNOLOGIES", "Our website may use cookies and similar technologies to:\n\n• Maintain website functionality.\n• Improve browsing experiences.\n• Understand website traffic and performance.\n• Remember user preferences.\n\nThird-party services, such as analytics providers, may use their own cookies or tracking technologies if integrated into our website.\n\nYou can manage or disable cookies through your browser settings. Disabling certain cookies may affect website functionality.\n\nWhere legally required, we will obtain appropriate consent before using non-essential tracking technologies."],
    ["6. SHARING OF INFORMATION", "Zenith Studios does not sell or rent personal information to third parties.\n\nWe may share necessary information with trusted service providers for specific business purposes, including:\n\n• Website hosting providers.\n• Cloud storage and infrastructure providers.\n• Payment processing services.\n• Email and communication platforms.\n• Domain and security service providers.\n• Analytics and performance tools.\n\nSuch providers may process information only as necessary for their respective services and subject to applicable contractual and legal obligations.\n\nWe may also disclose information when required by law, a valid legal process, or a competent government authority."],
    ["7. DATA STORAGE & SECURITY", "We take reasonable technical and organisational measures to protect personal information against:\n\n• Unauthorised access.\n• Accidental loss or destruction.\n• Unauthorised alteration.\n• Disclosure or misuse.\n\nDepending on the services used, information may be stored on secure servers or third-party cloud infrastructure.\n\nAlthough we take reasonable precautions, no internet transmission or electronic storage system can be guaranteed to be completely secure."],
    ["8. DATA RETENTION & DELETION", "We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, including:\n\n• Completing active projects.\n• Maintaining client relationships.\n• Resolving disputes.\n• Meeting legal, accounting, and regulatory requirements.\n\nWhen personal information is no longer required, we will take appropriate steps to delete or anonymise it, subject to applicable legal retention requirements."],
    ["9. YOUR PRIVACY RIGHTS", "Subject to applicable Indian law, individuals may have rights relating to their personal information, including:\n\n• Requesting information about personal data being processed.\n• Requesting correction of inaccurate or incomplete information.\n• Requesting erasure of personal information where applicable.\n• Withdrawing previously provided consent.\n• Raising privacy-related grievances.\n• Nominating another individual to exercise applicable rights in certain circumstances.\n\nRequests can be submitted through our official contact email.\n\nWe may request reasonable information to verify your identity before processing a request."],
    ["10. THIRD-PARTY WEBSITES & SERVICES", "Our website may contain links to external websites, platforms, or services.\n\nZenith Studios does not control the privacy practices, policies, or security of third-party websites.\n\nWe encourage visitors to review the privacy policies of external services before providing personal information."],
    ["11. CLIENT CONFIDENTIALITY", "We respect the confidentiality of client information, including:\n\n• Business documents.\n• Project files and design assets.\n• Login credentials and access information.\n• Unreleased products and business strategies.\n• Private communications and project discussions.\n\nWe do not intentionally disclose confidential client information to unauthorised parties.\n\nClients should avoid sharing passwords or unnecessary sensitive information through unsecured communication channels."],
    ["12. CHILDREN'S PRIVACY", "Our website and services are not intentionally directed towards children.\n\nWe do not knowingly collect children's personal data without the legally required consent of their parent or lawful guardian.\n\nIf we become aware that personal information has been collected in violation of applicable laws, we will take appropriate steps to address it."],
    ["13. INTERNATIONAL DATA TRANSFERS", "Some third-party service providers may store or process information on servers located outside India.\n\nWhere personal information is transferred internationally, we will take steps to comply with applicable Indian data protection requirements and restrictions."],
    ["14. CHANGES TO THIS PRIVACY POLICY", "Zenith Studios reserves the right to update or modify this Privacy Policy when necessary.\n\nChanges will be published on this page with an updated revision date.\n\nWe encourage visitors and clients to review this page periodically."],
    ["15. CONTACT & PRIVACY GRIEVANCES", "For privacy-related questions, requests, concerns, or complaints, please contact us:\n\nZENITH STUDIOS\n\nEmail: ram14112006@gmail.com\nBusiness Address: ***********\nLocation: [Chennai, Tamil Nadu, India]\nWe will review and respond to privacy-related requests within the applicable legal timelines."],
  ] as const;

  return (
    <main className="terms-page">
      <header className="terms-header">
        <a href="#top" aria-label="Return to Zenith Studios home">
          <img src={imgLogo} alt="Zenith Studios" />
        </a>
      </header>

      <article className="terms-content">
        <p className="terms-kicker"># ZENITH STUDIOS</p>
        <h1>Privacy Policy</h1>
        <div className="terms-dates">
          <p><strong>Effective Date:</strong> [19/11/2026]</p>
          <p><strong>Last Updated:</strong> [19/11/2026]</p>
        </div>

        {sections.map(([title, text]) => (
          <section key={title}>
            <h2>{title}</h2>
            {text.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
