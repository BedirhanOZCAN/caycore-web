import React, {
  use,
  useEffect,
  useState
} from "react";
import {
  //  useNCoreLocalization,
  NCoreProvider,
  useNCoreTheme,
  //  Text,
  //  Button
} from "ncore-web"; //! Bu şekilde süslü kullanım şunu demek oluyor ncore-web içinden süslü içindekileri al demek sadece gerekli olanları kullanmak için
import themes from "./themes"
import locales from "./locales";
import designTokens from "./themes/designTokens";
import useStyles from "../app/stylesheet";
import Navigation from "./navigation";
import {
  Footer,
  Header  // parça parça components içinden gerekli olanları çekmek için süslü var
} from "./components";
import { MENU } from "./constants";
import SideMenu from "./components/sideMenu";


const App = () => {

  const {
    colors
  } = useNCoreTheme();

  const [isMainFooterVisible, setIsMainFooterVisible] = useState(true);


  const classes = useStyles({
    theme: {
      aTagHoverColorKey: "primary",
      colors
    }
  }); //? önreğin buradan colors ama tema renkleri olan colors prop olarak gönderilip diğer taraftanda buradan gönderilen prop a şu rengi aktar denerek o renk kullandırtılabilir.

  // const tema = useNCoreTheme(); //! useNCoreTheme içindeki objeleri tema değişkenine aktardım

  // Object.keys(tema) //! bu şekilde de objeler içinde key value olarak dönebiliyoruz arraylerde foreach ile döndüğümüz gibi

  // const {
  //x  //!şeklinde bir değişken adı veremeyiz çünkü useNCoreTheme içindeki typelar ile eşleşmeli 
  //   activeTheme,
  //   switchTheme
  // } = useNCoreTheme(); // buradaki kullanım şöyle oluyor activeTheme adında bir değişken oluşturmuş oluyoruz aslında ve o useNCoreTheme içindeki activeTheme type'ına denk gelmiş oluyor yani şu an değeri default olarak useNCoreTheme içindeki değer olmuş oluyor


  // const {
  //   activeLocale,
  //   switchLocale,
  //   localize
  // } = useNCoreLocalization();

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])


  const onScroll = () => {
    setIsMainFooterVisible(window.scrollY < 10)
  }


  return <div
    className={classes.container}
  >
    {/* <Text
      variant="body"
    >
      Merhaba Çay Core!. {activeTheme} {activeLocale}
    </Text>
    <br />
    <br />
    <Text>
      {localize("test")}
    </Text>
    <br />
    <br />

    <Button
      size="medium"
      title="Hi"
      // spreadBehaviour="stretch" //! butonun yayılımı stretch: üstteki nesnenin içine yayılır. free: buton özgür kalır ve dıştan bir nesne ortalamaya çalışsa ortalanır baseline:  dıştan bir nesne ortalamaya çalışsa sola yapışık kalır
      onClick={() => {
        switchTheme(activeTheme === "light" ? "dark" : "light")
        switchLocale(activeLocale === "en" ? "tr" : "en")
      }}
    /> */}
    <Header
      menuData={MENU} //! MENU sabitini en dıştan çekip componente menu compenentine kadar ilettik props aktardık ya da parametre aktardık diyebiliriz
    />
    <SideMenu
      sideData={MENU}
    />
    <Navigation
      isMainFooterVisible={isMainFooterVisible}
    />
    <Footer
      isVisible={isMainFooterVisible}
      isSticky={true}
    />
  </div>
}

const ContextAPI = () => {    //!!! BUNU YAZMA SEBEBİMİZ App FONKSİYONU İÇİNDE KANCALARIMIZ YANİ HOOKSLARIMIZ OLDUĞU İÇİN VE AYNI FONKSİYON İÇİNDE HEM RENDER YAPMAYA ÇALIŞITĞIMIZ İÇİN HOOKSLAR HAZIR OLMADAN RENDER YAPMAYA ÇALIŞIYOR BU YÜZDEN ContextAPI fonksiyonu yazdık önce hookslar hazırlansın sonra App fonksiyonu render olsun diye
  return <NCoreProvider
    config={{ // ! config yani ncore un ayar dosyası gibi düşünebilirsin buraya kendi yazdığımız typography'leri verdik
      designTokens,
      themes,//: themes, //? sadece themes yazsaydıkta yine bizim oluşturduğumuz temayı NCore içine default olarak aktarmış olacaktık
      locales
    }}
  >
    <App />
  </NCoreProvider>

}
export default ContextAPI;