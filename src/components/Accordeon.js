import { useState } from "react";

function Accordeon({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordeon">
      <div className="accordeon__title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && <div className="accordeon__detail">{children}</div>}
    </div>
  );
}

export default Accordeon;
