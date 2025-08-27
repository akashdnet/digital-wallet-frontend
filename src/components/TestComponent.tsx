const TestComponent = ({ name }: { name: string }) => {
  return <div className="w-full flex justify-center items-center">
    <h1 className="text-center text-3xl font-bold ">This is {name} page.</h1>
  </div>
};

export default TestComponent;
