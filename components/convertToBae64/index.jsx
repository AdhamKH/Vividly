"use client";
import React from "react";

const ConvertToBase64 = ({ imageUrl }) => {
  const [base64Image, setBase64Image] = React.useState("");

  React.useEffect(() => {
    // Function to fetch the image and convert it to Base64
    const fetchImageAndConvertToBase64 = async () => {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Create a FileReader to read the blob and convert it to Base64
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result;
          setBase64Image(base64Data);
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error fetching and converting image:", error);
      }
    };

    fetchImageAndConvertToBase64();
  }, [imageUrl]);

  return base64Image;
};

export default ConvertToBase64;
