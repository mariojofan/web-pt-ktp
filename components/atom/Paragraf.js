export default function Paragraf({ children, className, variant }) {
    const addClassName = className ? `${className}` : '';

    const variants = {
        'paragrafHero': `leading-normal text-base mb-8 text-white`,
        'title': `text-primary-500`,
        'paragrafSection1': `text-fourth-700`,
    }

    const chooseVariant = variants[variant]

    return (
       <p className={`${addClassName} ${chooseVariant}`}>{children}</p>
    )
}
