const containerStyle = {
  marginLeft: "2%",
  marginTop: "1%",
};

export default function AppContainer({ children }) {
  return <div style={containerStyle}>{children}</div>;
}
