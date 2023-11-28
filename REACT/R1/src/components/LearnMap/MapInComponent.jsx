
const MapInComponent = () => {
    const names = ['shubham', 'prince', 'nikhil'];
  return (
    <div>
        <header>This is header</header>
        <ul>
            {
                names.map((name) => (
                    <li key={name}>name</li>
                ))
            }
        </ul>
    </div>
  )
}

export default MapInComponent