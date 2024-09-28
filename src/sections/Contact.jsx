import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formref = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setform] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setform({ ...form, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_8zqn5lf',
                'template_va8dr7o',
                {
                    from_name: form.name,
                    to_name: 'Vishwaa',
                    from_email: form.email,
                    to_email: 'vishwaa.3511@gmail.com',
                    message: form.message
                },
                '_jhmzCUWBmFtPUTvV'
            );

            setLoading(false);
            alert('Your message has been sent!');

            setform({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!');
        }
    }

    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <div className='contact-container border border-neutral-300 p-8 rounded-lg shadow-lg'>
                    <h3 className='head-text'>Let's talk</h3>
                    <p className='text-lg text-neutral-600 mt-3'>
                        Whether you are looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                    </p>
                    <form ref={formref} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input 
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input border border-neutral-300 focus:border-black rounded-md p-3'
                                placeholder='Your name'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input 
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input border border-neutral-300 focus:border-black rounded-md p-3'
                                placeholder='example@gmail.com'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea 
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                className='field-input border border-neutral-300 focus:border-black rounded-md p-3'
                                placeholder="Hi, I'm interested in.."
                            />
                        </label>
                        <button className='field-btn bg-black text-white rounded-md p-3 flex justify-center items-center hover:bg-neutral-700 transition-all' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='/assets/arrow-up.png' alt='arrow-up' className='ml-2 w-4 h-4' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
