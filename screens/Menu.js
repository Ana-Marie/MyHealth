import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"

const Menu = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={() => { props.navigation.pop() }} />
        </DrawerContentScrollView>
    )
}
export default Menu;
