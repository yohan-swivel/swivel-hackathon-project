import parse from "html-react-parser";
interface AddressType {
  id: number;
  country: string;
  address: string;
}

export interface ContactUsCardProps {
  id: number;
  email: string;
  contactNumber: string;
  addresses: Array<AddressType>;
  dataScrollTo: string;
}

interface ContactInfoCardProps {
  iconSrc: string;
  contactLabelText: string;
  contactTextValue: string;
  type: "email" | "phone";
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = (props) => {
  return (
    <div className="con_box">
      <div className="con_box_rw">
        <img alt="contact Icon" src={props.iconSrc} />
        <p>{props.contactLabelText}</p>
      </div>
      <a
        href={
          props.type === "email"
            ? `mailto:${props.contactTextValue}`
            : `tel:${props.contactTextValue}`
        }
      >
        <p>{props.contactTextValue}</p>
      </a>
    </div>
  );
};

const ContactUsCard: React.FC<ContactUsCardProps> = (props) => {
  return (
    <div className="section_footer" id={props.dataScrollTo}>
      <div className="cont_card">
        <div className="contact_row1">
          <ContactInfoCard
            iconSrc="/icoutlineemail.svg"
            contactLabelText="Email Us"
            contactTextValue={props.email}
            type="email"
          />
          <ContactInfoCard
            iconSrc="/icoutlinephoneenabled.svg"
            contactLabelText="Call Us"
            contactTextValue={props.contactNumber}
            type="phone"
          />
        </div>
        <div className="full_width">
          <div className="con_box_rw">
            <img alt="location" src="/mdilocation.svg" />
            <p>Our Locations</p>
          </div>
          <div className="location_grid">
            {props.addresses &&
              props.addresses.map((address: AddressType, index: number) => (
                <div key={index} className="location">
                  <h5>{address.country}</h5>
                  <p>{parse(address?.address)}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUsCard;
