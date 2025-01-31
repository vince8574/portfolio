import phone from '../assets/svg/contact_phone.svg';

export function Contact() {
    return (
        <div className="flex flex-col gap-4 p-8 rounded-[15px] border border-solid border-white w-full md:w-1/2 lg:w-2/5">
            <h2 className="text-center font-poppins font-bold text-2xl">Contact</h2>
            <div className="flex flex-col gap-4">
                <h3>Vincent Gaillard</h3>
                <span><img src={phone}/>+33681931168</span>
                <p className="font-poppins">
                    Vous pouvez me contacter par mail à l'adresse suivante : <a href="mailto:vgaillard85@gmail.com">vgaillard85@gmail.com</a></p>
            </div>
        </div>
    );
}
export default Contact;