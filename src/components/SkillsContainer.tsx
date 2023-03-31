const SkillsContainer = (props: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 items-center">
      {props.children}
    </div>
  );
};

export default SkillsContainer