export default function Button({ children, className, variant}) {
    const addClassName = className ? `${className}` : '';

    const variants = {
        'button1': `bg-white text-primary-500`,
        'button2': `bg-primary-500 text-white`,
        'button3': `w-44 border rounded-full text-white`,
        'button4': `w-44 rounded-full bg-primary-500 text-white`,
    }

    const chooseVariant = variants[variant];

    return (
       <>
        <button className={`mx-auto lg:mx-0 hover:underline font-bold rounded-lg my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${addClassName} ${chooseVariant}`}>
            {children}
        </button>
       </>
    )
}
