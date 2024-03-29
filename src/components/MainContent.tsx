const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-full flex flex-col bg-transparent justify-start p-5 lg:p-10 mt-10 text-neutral-900 dark:text-neutral-200">
      {props.children}
    </div>
  );
};

export default MainContainer;
