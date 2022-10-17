import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { NavigationHelpersContext } from "@react-navigation/native";
import { StyleSheet, View,Text,Image } from "react-native"
import { useUserStore } from "../store/usuario"


const DrawerMenu = (props) => {
    const {sair} = useUserStore();
    const nome="Usuário"
   
    return(
        <DrawerContentScrollView {...props} style={styles.drawerNavigation}>
            <View style={styles.drawerUser}>
                <Text style={styles.text}>Olá {nome} </Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem label={()=><Text style={styles.text}>Sair</Text>}  onPress={sair} icon={ () => <Image source={require('../images/logout.png')} />}/>
        </DrawerContentScrollView>
    )
}
 const styles = StyleSheet.create({
    drawerNavigation:{
        backgroundColor:'rgba(173, 212, 208, 1)',
    },
    drawerUser:{
        width:'95%',
        height:100,
        borderBottomColor:'rgba(65, 158, 215, 1)',
        borderStyle:"solid",
        borderBottomWidth:2,
        justifyContent:'center',
        alignItems:"center",
        
     

    },
    text:{
        fontFamily:'AveriaLibre-Regular',
        color:'rgba(65, 158, 215, 1)',
        fontSize:20,

    }
    

 })
export default DrawerMenu;
