import { useState } from "react";

const ConnectorComponent = ({ name, options = {} }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [remarks, setRemarks] = useState("");
  const [selectedPins, setSelectedPins] = useState(null);

  const handleAddToCart = () => {
    console.log("Added to Cart:", {
      name,
      type: selectedType,
      pins: selectedPins,
      size: options.size || "N/A",
      quantity,
      remarks,
    });
  };

  return (
    <div className="space-y-4">
      {options.types && (
        <div>
          <label className="block text-sm font-medium">Type</label>
          <div className="flex gap-2 mt-2">
            {options.types.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 border rounded-md ${selectedType === type ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {options.pins && (
        <div>
          <label className="block text-sm font-medium">Pins</label>
          <div className="flex gap-2 mt-2">
            {options.pins.map((pin) => (
              <button
                key={pin}
                className={`px-4 py-2 border rounded-md ${selectedPins === pin ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedPins(pin)}
              >
                {pin}
              </button>
            ))}
          </div>
        </div>
      )}

      {options.size && (
        <div>
          <label className="block text-sm font-medium">Size</label>
          <div className="px-4 py-2 border rounded-md w-max mt-2">{options.size}</div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium">Quantity (pcs)</label>
        <div className="flex gap-2 mt-2">
          <button
            className="px-3 py-1 border rounded-md"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <span className="px-4 py-2 border rounded-md">{quantity}</span>
          <button
            className="px-3 py-1 border rounded-md"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Remarks</label>
        <textarea
          className="w-full p-2 border rounded-md mt-2"
          placeholder="Write here..."
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        ></textarea>
      </div>

      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export const QS8 = () => <ConnectorComponent name="QS8" options={{ types: ["Male", "Female", "Set"] }} />;
export const QS10 = () => <ConnectorComponent name="QS10" options={{ types: ["Male", "Female", "Set"] }} />;
export const BulletConnector = () => <ConnectorComponent name="Bullet Connector" options={{ types: ["Male", "Female", "Set"], size: "8 mm" }} />;
export const ChogoryConnector = () => <ConnectorComponent name="Chogory Connector" />;
export const TycoConnectors = () => <ConnectorComponent name="Tyco Connectors" options={{ pins: [1, 2, 3, 4, 5, 6], types: ["Male", "Female", "Set"], size: "8 mm" }} />;
