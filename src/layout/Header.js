import Image from "components/Image";
import Text from "components/Text";

function Header(props) {
    return (
      <header className="App-header">
        <Image src={props.logo} className="App-logo" alt="logo" />
        <Text label="Learn React"/>
      </header>
    )
}

export default Header;