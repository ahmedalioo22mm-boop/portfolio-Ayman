
import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const showToast = (toast) => setToasts((prev) => [...prev, { id: Date.now(), ...toast }]);
  const hideToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return { toasts, showToast, hideToast };
}
