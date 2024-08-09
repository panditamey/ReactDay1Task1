import PropTypes from 'prop-types';

const Image = (props ) => {
    return <img src={props.path} alt={props.title} />;
}
const AnimalDetails = (props) => {
    let { name, count, isEndangered ,photo } = props.item;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Count: {count}</p>
            <p>Endangered: {isEndangered ? "Yes" : "No"}</p>
            <Image path={photo} title={name} />
        </div>
    );
}

const Animal = (props) => {
    let { children, list } = props;

    const getList = list.map((element, index) => (
        <AnimalDetails key={index} item={element} />
    ));

    return (
        <>
            {children}
            <ul>
                {getList}
            </ul>
        </>
    );
}

export default Animal;

Image.propTypes = 
{
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

AnimalDetails.propTypes =
{
    item : PropTypes.object.isRequired
}

Animal.propTypes =
{
    children : PropTypes.element.isRequired,
    list : PropTypes.array
}