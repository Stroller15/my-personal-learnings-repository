
const LearnProps = (props) => {
    console.log(props)
    const {name, title} = props;
// console.log(name, title)
    return (
        <>
            <h1>name: {name}</h1>
            <h1>title: {title}</h1>
        </>
        
    )
}

export default LearnProps;