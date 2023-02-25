const SkillsSectionTitle = (props: {children: string}) =>
{
    return(<div className="lg:border-b border-b-neutral-900 dark:border-b-neutral-200 lg:w-2/5">
    <h1 className="text-xl mt-10">{props.children}</h1>
  </div>)
};

export default SkillsSectionTitle;