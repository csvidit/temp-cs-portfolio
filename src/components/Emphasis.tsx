const Emphasis = (props: { children: string | React.ReactNode }) => {
  return (
    <em className="inline-flex bg-lime-400 text-lime-950 selection:bg-lime-950 selection:text-lime-400 not-italic px-1 rounded-lg">{props.children}</em>
  );
};

export default Emphasis;