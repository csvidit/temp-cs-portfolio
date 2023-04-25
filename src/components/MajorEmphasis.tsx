const MajorEmphasis = (props: { children: string | React.ReactNode }) => {
    return (
      <em className="inline-block bg-sky-400 text-sky-950 not-italic font-medium px-1 rounded-lg">{props.children}</em>
    );
  };
  
  export default MajorEmphasis;