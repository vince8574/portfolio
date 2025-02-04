import phone from '../assets/svg/contact_phone.svg';
import mail from '../assets/svg/mail.svg';
import linkedin from '../assets/svg/linkedin.svg';
import github from '../assets/svg/github.svg';
import Card from './card';
import { motion } from 'framer-motion';

export function Contact() {
    return (
        <div className="flex flex-col items-center gap-0">
            {/* Section Contact */}
            <h2 className="uppercase m-auto font-poppins font-bold text-2xl lg:text-[30px] mt-32">Contact</h2>
            <div className="my-8 flex flex-col lg:flex-row items-center mt-32">
                {/* Contenu de contact à gauche */}
                <motion.div
                    className="relative flex flex-col rounded-[15px] p-8 gap-4 w-full lg:max-w-[50%] h-auto"
                    style={{ border: "1px solid transparent" }}
                    
                >
                    {/* Animation de la bordure */}
                    <motion.div
                        className="absolute inset-0 rounded-[15px] border border-white"
                        initial={{
                            clipPath: "polygon(100% 50%, 100% 50%, 100% 50%, 100% 50%)",
                        }}
                        style={{ pointerEvents: "none" }}
                        animate={{
                            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
                        }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    ></motion.div>

                    <div className="flex flex-col gap-4 p-8">
                        <h2 className="font-poppins font-bold text-2xl lg:text-[38px] mb-4">
                            Vincent Gaillard
                        </h2>
                        <div className="flex items-center gap-2">
                            <img src={phone} alt="Phone" className="w-6 h-6" />
                            <span className="font-poppins text-xl lg:text-[28px]">+33681931168</span>
                        </div>
                        <a href="mailto:vgaillard85@gmail.com" className="flex items-center gap-2">
                            <img src={mail} alt="Mail" className="w-6 h-6" />
                            <span className="font-poppins text-xl lg:text-[28px]">vgaillard85@gmail.com</span>
                        </a>
                        <div className='flex flex-row justify-center gap-4'>
                            <a href="https://www.linkedin.com/in/vincent-gaillard-164776287" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" className='h-[100px]' />
                            </a>
                            <a href="https://github.com/vince8574" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" className='h-[100px]' />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Ligne animée */}
                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    {/* Ligne horizontale (grands écrans) */}
                    <motion.div
                        className="hidden lg:block bg-white border-t border-white"
                        style={{ height: "1px", width: "420px" }}
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
                    ></motion.div>

                    {/* Ligne verticale (petits écrans) */}
                    <motion.div
                        className="block lg:hidden bg-white border-l border-white"
                        style={{ width: "1px", height: "64px" }}
                        initial={{ scaleY: 0, transformOrigin: "top" }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
                    ></motion.div>
                </motion.div>

                
                <motion.div
                    className="flex justify-center w-full lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Card />
                </motion.div>
            </div>
            
        </div>
    );
}

export default Contact;