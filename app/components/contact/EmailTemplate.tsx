interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phone,
}) => {
  return (
    <div>
      <h1>Vous avez une nouvelle demande d'information:</h1>
      <ul>
        <li>Nom: {name}</li>
        <li>Email: {email}</li>
        <li>Num téléphone: {phone}</li>
      </ul>
    </div>
  );
};

export default EmailTemplate;
