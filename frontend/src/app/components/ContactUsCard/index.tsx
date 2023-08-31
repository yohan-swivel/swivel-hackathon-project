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
  dataScrollTo: string
}

interface ContactInfoCardProps {
  iconSrc: string;
  contactLabelText: string;
  contactTextValue: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = (props) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-[16px] text-center text-5xl text-white font-para-medium">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative w-[34px] h-[34px] overflow-hidden shrink-0"
            alt=""
            src={props.iconSrc}
          />
          <div className="relative tracking-[0.1em] font-semibold">
            {props.contactLabelText}
          </div>
        </div>
        <div className="relative text-lg font-medium text-left">
          {props.contactTextValue}
        </div>
      </div>
    </>
  );
};

const ContactUsCard: React.FC<ContactUsCardProps> = (props) => {
  return (
    <>
      <div
        className="pt-16 px-0 pb-2.5 items-start justify-start text-5xl"
        data-scroll-to={props.dataScrollTo}
      >
        <div className="bg-glass-bg w-full max-w-[1330px] flex flex-col p-8 box-border items-start justify-start gap-[64px]">
          <div className="flex [@media(min-width:1079px)]:flex-row flex-col items-start justify-start gap-[106px]">
            <ContactInfoCard
              iconSrc="/icoutlineemail.svg"
              contactLabelText="Email Us"
              contactTextValue={props.email}
            />
            <ContactInfoCard
              iconSrc="/icoutlinephoneenabled.svg"
              contactLabelText="Call Us"
              contactTextValue={props.contactNumber}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-[33px] h-[33px] overflow-hidden shrink-0"
                alt=""
                src="/mdilocation.svg"
              />
              <div className="relative tracking-[0.1em] font-semibold">
                Visit Us
              </div>
            </div>
            <div className="flex [@media(min-width:1079px)]:flex-row flex-col gap-8 text-start">
              {props.addresses &&
                props.addresses.map((address: AddressType) => (
                  <div>
                    <div className="tracking-[0.18em] font-semibold mb-5">
                      {address.country}
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-base">
                      <div className="flex-1 flex flex-col pt-0 pb-2.5 pr-2.5 pl-0 items-start justify-start">
                        <div className="relative leading-[30px] font-medium">
                          <p className="m-0">{address.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUsCard;
