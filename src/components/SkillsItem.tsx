const SkillsItem = (props: {children: string}) =>
{
    return(<span className="px-4 font-light self-center text-center justify-center w-max"><p className="self-center text-center">{props.children}</p></span>)
};

export default SkillsItem;