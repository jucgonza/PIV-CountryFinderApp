const Header = ({title, description}) => {
    return (
        <div>
            <span className="text-2xl font-bold">{title}</span>
            <span className="ms-4">{description}</span>
        </div>
    )
}

export default Header
