import styles from "./MainContainer.module.css"

const MainContainer = (props: { children: any }) => {
  return (
    <div className={"w-screen h-full flex flex-col space-y-6 justify-center "+styles.main_container+" "+styles.main_background}>{props.children}</div>
  );
};

export default MainContainer;
