import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const {state} = useLocation();


  return (
    <div className="container">
      <h1>Thank You, {state.name}!</h1>
      {state && (
        <>
        <p>You're now registered for <strong>{state.course}</strong>.</p>
        <p>We'll email to <strong>{state.email}</strong>.</p>
        </>
      )}
      
    </div>
  );
}
