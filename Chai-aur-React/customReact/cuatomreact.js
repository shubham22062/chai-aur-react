// create elememnt
const reactElement = React.createElement(
    'a',
    {
        href:'https://google.com',target:'_blank'
    },
    'click me to visit'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
//baeble inject the react element (transpiler)