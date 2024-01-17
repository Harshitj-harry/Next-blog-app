import Image from 'next/image';
import './contact.css'

const ContactPage = () => {
  return (
    <div className='contact'>
      <div className="cnt-imgcontainer">
          <Image src="/contact.png" alt="" fill className="cnt-img" />
      </div>
      <div className="cnt-formcontainer">
          <form action="" className="cnt-form">
              <input type="text" placeholder="Name and Surname" />
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number (Optional)" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button>Send</button>
            </form>
      </div>
    </div>
  );
}

export default ContactPage