
export const InfoFooter = ({phoneNumber, email, instagran}) => (
  <div className="w-full p-6 flex gap-6">
    <div className="flex flex-col">
        <p className="font-sans font-bold">Telefone</p>
        <p className="font-sans font-normal">{phoneNumber}</p>
    </div>
    <div className="flex flex-col">
        <p className="font-sans font-bold">Email</p>
        <p className="font-sans font-normal">{email}</p>
    </div>
    <div className="flex flex-col">
        <p className="font-sans font-bold">Instagran</p>
        <p className="font-sans font-normal">{instagran}</p>
    </div>
  </div>
);
