const containerStyle = {
    marginLeft: "2%"
}

export default function AppContainer({children}) {
    return (
        <div style={containerStyle}>
            {children}
        </div>
    )
}