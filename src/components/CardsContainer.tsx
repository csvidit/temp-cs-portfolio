import Card from "./Card";

const CardsContainer = (props: {children: any}) =>
{
    return(<div className="flex flex-row items-center space-x-10 overflow-x-auto mt-10 snap-x">{props.children}</div>)
};

export default CardsContainer;