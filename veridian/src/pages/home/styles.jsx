import zIndex from "@mui/material/styles/zIndex";

export const Styles = {
    yellowBackground: {
        color: '#FFFFFF',
        fontSize: '14px',
        backgroundColor: '#f9c300', // Corrected property name
        paddingX:'5px',
    },
    boxStyle : {
        width: "auto", // Full width of the container
        height: "100%", // Full viewport height (use 'vh' for more reliable full-height styling)
        display: "flex", // Using flexbox layout
        rowGap: '10px',
        flexDirection: "column", // Stack items vertically
        justifyContent: "center", // Center items vertically
        alignItems: "center", // Center items horizontally
        position: "relative", // Position relative to allow child elements like images or shadows to use absolute positioning
        zIndex: 5, // Layering order, makes sure this box appears above lower z-index elements
        backgroundColor: "transparent", // Ensures the background remains transparent
        textAlign: "center",
        height:'50vh',
        paddingX:'5%',
      },
      bigText : {
        fontFamily: "DM Sans, sans-serif",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "28px",
            color: "#FFFFFF", // Neutral color for supporting text
            marginBottom: "24px",
            lineHeight: "1", // Line height set to 1.5 for more space between text lines
      },
      knowMore : {
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 600,
            fontSize: "18px",
            color: "#FFFFFF",
            marginRight: "8px",
            
      }

};
