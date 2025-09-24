const UserProfile = (props) => {
  return (
    <div 
      style={{ 
        border: "1px solid gray", 
        padding: "15px", 
        margin: "15px", 
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h2 
        style={{ 
          color: "blue", 
          fontSize: "24px", 
          marginBottom: "10px" 
        }}
      >
        {props.name}
      </h2>
      
      <p style={{ fontSize: "18px", margin: "5px 0" }}>
        Age: <span style={{ fontWeight: "bold", color: "green" }}>{props.age}</span>
      </p>
      
      <p style={{ fontSize: "16px", margin: "5px 0", color: "gray" }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;