const WorkCard = (props: {children: any}) => {
  return (
    <div className="w-full flex flex-col space-y-1 backdrop-blur-md rounded-xl p-2 lg:p-4 m-2">
    {props.children}
    </div>
  );
};

export default WorkCard;