const Customer = (props) => {
  const { firstName, lastName, phoneNumber, job } = props.data;

  return (
    <li>
      {firstName} {lastName} {phoneNumber} {job} {<a href={`mailto:${firstName}.${lastName}@example.com`}>Envoyer un message</a>}
    </li>
  );
};

export default Customer;