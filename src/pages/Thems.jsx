import { createGlobalStyle} from "styled-components"


export const DarkMode = {
    body: "#000",
    a: "#fff",
    fontColor: "#fff",
    color:"#A6A6A6",
}
export const LightMode = {
    body: "#fff",
    a:"#000",
    fontColor: "#000",
    color:"#000",
}
export const closeMenu = {
    clipPath: "polygon(0 0,100% 0,100% 0,0 0)"
}
export const openMenu = {
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"
}
export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props=>props.theme.body};
        color:${props => props.theme.fontColor} ;
        transition: 0.5s ease;
    }
    a{
        color:${props=>props.theme.a} ;
    }
    .navbar .cart{
        color:${props => props.theme.body};

    }
    .navbar .logo{
        color:${props => props.theme.body};
    }
    .navbar{
        background-color:${props => props.theme.fontColor};

    }
    .navbar li a.active{
        color:${props=>props.theme.body} ;
    }
    .navbar .icon{
        color:${props => props.theme.body};
    }
    .navbar .menu{
        color:${props => props.theme.body};
    }
    .shop .navpage{
        background-color: ${props => props.theme.a};
        
    }
    .line .container ul{
        background-color: ${props=>props.theme.body};
    }
    .shop .navpage .container{
        background-color: ${props => props.theme.a};
    }
    .shop .navpage .container ul{
        background-color: ${props => props.theme.a};
    }
    .shop .navpage .container ul li{
        color:${props => props.theme.body}
    }
    .iconMode .mode{
        color:${props => props.theme.body};
        background-color:${props => props.theme.a};
    }
    .iconMode{
        background-color:${props => props.theme.a};
    }
    .instabar{
        background-color:${props => props.theme.fontColor} ;
    }
    .instabar h2 a{
        color:${props => props.theme.body} ;
    }
    .instabar .icon{
         background-color:${props => props.theme.body};
         color:${props => props.theme.fontColor}
    }
    .footer p,
    .footer a,
    .footer li{
        color:${props=>props.theme.color}
    }
    .navbar ul{
        background-color:${props => props.theme.fontColor};
        colo:${props => props.theme.fontColor};
    }
    @media only screen and (max-width: 676px){
        .navbar ul{
            clip-path:${props => props.theme.clipPath}
        }
        .navbar ul{
            background-color:${props => props.theme.fontColor}
        }
    }
`