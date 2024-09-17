import "./App.css";

type nodoprops = { readonly nombre: string ; readonly creditos: number };
function MyNodo({ nombre, creditos }: nodoprops): JSX.Element {
  return (
    <>
      <h1>{nombre}</h1>
      <div> creditos: {creditos}</div>
    </>
  );
}

export default MyNodo;
