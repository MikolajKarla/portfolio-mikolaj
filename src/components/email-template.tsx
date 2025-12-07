import React from 'react'

interface EmailTemplateProps {
    firstName: string;
    email: string;
    company?: string;
    message: string;
}

function EmailTemplate({ firstName, email, message, company }: EmailTemplateProps) {
  const hasCompany = typeof company === 'string' && company.trim().length > 0
  const normalizedMessage = (message && message.length > 0) ? message : 'Brak wiadomości'
  const messageLines = normalizedMessage.split(/\n/)

  return (
    <div>
        <p><strong>Imię:</strong> {firstName || "Brak"}</p>
        <p><strong>Email:</strong> {email || "Brak"}</p>
        <p><strong>Firma:</strong> {hasCompany ? company : 'Brak'}</p>
        <p><strong>Wiadomość:</strong><br />
          {messageLines.map((line, index) => (
            <React.Fragment key={`${line}-${index}`}>
              {line}
              {index < messageLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

    </div>
  )
}

export default EmailTemplate