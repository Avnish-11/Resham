import  { useEffect } from 'react';

function CongratsPage() {
  useEffect(() => {
    alert("🎉 Thank you for visiting the page!");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-semibold text-green-700">🎉 Thank you for visiting the page!</h1>
    </div>
  );
}

export default CongratsPage;
