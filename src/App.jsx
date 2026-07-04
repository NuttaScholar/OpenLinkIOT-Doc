import { policies } from "./policyData.js";

function getLanguage(pathname) {
  return pathname.includes("privacy-policy-th") ? "th" : "en";
}

export default function App({ pathname }) {
  const currentPath = pathname ?? (typeof window === "undefined" ? "/privacy-policy.html" : window.location.pathname);
  const lang = getLanguage(currentPath);
  const policy = policies[lang];

  return <PrivacyPolicyPage policy={policy} />;
}

function PrivacyPolicyPage({ policy }) {
  return (
    <div className="page">
      <header>
        <img className="app-icon" src="assets/images/icon.png" alt={policy.iconAlt} />
        <div>
          <p className="eyebrow">IOT_MobileApp / OpenLinkIoT Mobile App</p>
          <h1>{policy.title}</h1>
          <p className="subtitle">{policy.subtitle}</p>
        </div>
        <LanguageSwitch current={policy.lang} labels={policy.languageSwitch} />
      </header>

      <div className="layout">
        <nav aria-label={policy.navAria}>
          <p>{policy.navTitle}</p>
          {policy.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <article>
          <OverviewSection policy={policy} />
          <DataSection policy={policy} />
          <ListSection id="use" title={policy.sections.use.title} items={policy.sections.use.items} />
          <SharingSection policy={policy} />
          <TextSection id="storage" title={policy.sections.storage.title} paragraphs={policy.sections.storage.paragraphs} />
          <PermissionsSection policy={policy} />
          <ListSection id="choices" title={policy.sections.choices.title} items={policy.sections.choices.items} />
          <TextSection id="security" title={policy.sections.security.title} paragraphs={policy.sections.security.paragraphs} />
          <TextSection id="children" title={policy.sections.children.title} paragraphs={policy.sections.children.paragraphs} />
          <TextSection id="changes" title={policy.sections.changes.title} paragraphs={policy.sections.changes.paragraphs} />
          <ContactSection policy={policy} />
        </article>
      </div>

      <footer>
        <p>IOT_MobileApp Privacy Policy</p>
      </footer>
    </div>
  );
}

function LanguageSwitch({ current, labels }) {
  return (
    <div className="language-switch" aria-label={labels.aria}>
      <a href="privacy-policy.html" lang="en" aria-current={current === "en" ? "page" : undefined}>
        EN
      </a>
      <a href="privacy-policy-th.html" lang="th" aria-current={current === "th" ? "page" : undefined}>
        TH
      </a>
    </div>
  );
}

function OverviewSection({ policy }) {
  const overview = policy.sections.overview;

  return (
    <section id="overview">
      <h2>{overview.title}</h2>
      <p>
        <strong>{overview.updatedLabel}</strong> {overview.updated}
      </p>
      <p>{overview.body}</p>

      <div className="summary" aria-label={overview.summaryAria}>
        {overview.summary.map((item) => (
          <div className="summary-item" key={item.title}>
            <b>{item.title}</b>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <p className="notice">{overview.notice}</p>
    </section>
  );
}

function DataSection({ policy }) {
  const data = policy.sections.data;

  return (
    <section id="data">
      <h2>{data.title}</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {data.headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${data.headers[index]}`} data-label={data.mobileLabels[index]}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ListSection({ id, title, items }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function SharingSection({ policy }) {
  const sharing = policy.sections.sharing;

  return (
    <section id="sharing">
      <h2>{sharing.title}</h2>
      {sharing.blocks.map((block) => (
        <div key={block.title}>
          <h3>{block.title}</h3>
          <p>{block.body}</p>
        </div>
      ))}

      <div className="badge-list" aria-label={sharing.badgeAria}>
        {sharing.badges.map((badge) => (
          <span className="badge" key={badge}>
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}

function PermissionsSection({ policy }) {
  const permissions = policy.sections.permissions;

  return (
    <section id="permissions">
      <h2>{permissions.title}</h2>
      <ul>
        {permissions.items.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong> {item.text}
          </li>
        ))}
      </ul>
      <p>{permissions.note}</p>
    </section>
  );
}

function TextSection({ id, title, paragraphs }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{renderInlineStrong(paragraph)}</p>
      ))}
    </section>
  );
}

function ContactSection({ policy }) {
  const contact = policy.sections.contact;

  return (
    <section id="contact">
      <h2>{contact.title}</h2>
      <p>
        {contact.beforeLink}{" "}
        <a href="https://github.com/NuttaDev/IOT_MobileApp/issues">https://github.com/NuttaDev/IOT_MobileApp/issues</a>
      </p>
    </section>
  );
}

function renderInlineStrong(text) {
  const parts = text.split(/(<strong>.*?<\/strong>)/g);

  return parts.map((part) => {
    const match = part.match(/^<strong>(.*?)<\/strong>$/);
    if (match) {
      return <strong key={part}>{match[1]}</strong>;
    }
    return part;
  });
}
