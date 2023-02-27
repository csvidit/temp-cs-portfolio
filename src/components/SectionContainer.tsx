const SectionContainer = (props: {children: any, id: string}) => {
  return (
    <div id={props.id} className="flex flex-col lg:flex-row justify-between lg:items-center bg-neutral-900 dark:bg-neutral-200 dark:bg-opacity-10 bg-opacity-10 rounded-xl m-2 p-4 mt-10">{props.children}</div>
  );
};

export default SectionContainer;