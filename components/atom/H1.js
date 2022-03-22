export default function H1({ children, className, variant }) {
    const addClassName = className ? ` ${className} ` : '';

    const variants = {
        'text1': `text-black font-bold `,
        'text2': `text-white font-bold`,
    }

    const chooseVariant = variants[variant] 

    return (
        <h1 className={`text-2xl  ${addClassName} ${chooseVariant}`}>{children}</h1>
    )
}
