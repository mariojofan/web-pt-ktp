export default function boxLayanan({ children }) {
    
    return (
        <div className={`bg-white px-4 py-4 w-full md:w-56 rounded-lg shadow-md hover:bg-secondary-500 hover:text-white hover:font-bold ${addClassName}`}>
        {children}
        </div>
    )
}
