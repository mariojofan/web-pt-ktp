export default function Button({ className, children, variant }) {
    const addClassName = className ? ` ${className} ` : ''; // looping IF

    const variants = {
        'borderPrimary': `bg-primary-500 text-white`,
        'borderSecondary': `bg-secondary-400 text-Primary-500`,
        'borderthird': `border text-white`,
    }
    
    const chooseVariant = variants[variant] 

    return (
        <a href='#' className={`text-lg font-bold px-6 py-2.5 rounded  inline-block ${chooseVariant} ${addClassName}`}>{children}</a>
    )
}