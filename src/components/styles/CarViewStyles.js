export const cardStyles = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 8px 16px rgba(0,0,0,0.3)",
  },
};

export const modalStyles = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: 1000,
  maxHeight: "90vh",
  background:
    "linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 0.9))",
  border: "2px solid rgba(0,0,0,0.12)",
  boxShadow: "0px 16px 24px rgba(0,0,0,0.3)",
  padding: 16,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  borderRadius: 16,
};

export const instructionsContainerStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  color: "#333",
  fontSize: 16,
  padding: "10px",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: 8,
};

export const imageContainerStyles = {
  width: "100%",
  height: "auto",
  maxHeight: "85vh",
  marginTop: "40px",
};

export const imageStyles = {
  width: "100%",
  height: 200,
  objectFit: "cover",
  borderRadius: "16px 16px 0 0",
};

export const previewImageStyles = {
  width: "100%",
  height: "auto",
  maxHeight: "85vh",
  objectFit: "contain",
  borderRadius: 16,
};
