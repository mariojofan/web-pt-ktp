
export default function checkBox({ children, className  }) {
    const addClassName = className ? ` ${className} ` : '';

    return (
       <div className='flex'>
            <p>{children}</p>
       </div>
    )
}
