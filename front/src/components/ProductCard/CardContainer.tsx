
interface CardContainerProps {
    children: React.ReactNode
}

const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-2 gap-5 my-12 sm:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    )
}

export default CardContainer