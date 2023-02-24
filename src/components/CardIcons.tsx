import {BsGithub} from "react-icons/bs"
import {TbBrandNextjs} from "react-icons/tb"

const CardIcons = (props: {icons: Array<string>}) =>
{
    let iconsList = <div className="flex flex-row space-x-1 items-center"></div>;
    for (let i = 0; i < props.icons.length; i++) {
        const element = props.icons[i];
        switch(element)
        {
            case "github":
                iconsList.props.children+=<BsGithub/>
                break;
            case "nextjs":
                iconsList.props.children+=<TbBrandNextjs/>
                break;
        }
    }
    return iconsList;
};

export default CardIcons;