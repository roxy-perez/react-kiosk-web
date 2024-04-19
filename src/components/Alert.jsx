export default function Alert({ children }) {
  return (
    <div className="text-center my-2 font-bold bg-orange-crayola text-ghost-white p-3 uppercase rounded-md">
      {children}
    </div>
  );
}
