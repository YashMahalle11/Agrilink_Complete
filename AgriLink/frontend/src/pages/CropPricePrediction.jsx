import React from "react";

const CropPricePrediction = () => {
  return (
    <div className="w-full h-screen bg-white">
      <iframe
        src="http://127.0.0.1:5000"
        title="Crop Price Prediction"
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default CropPricePrediction;
