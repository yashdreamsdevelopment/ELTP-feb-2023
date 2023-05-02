import Event from "../Event/Event";


const EventList = () => {
    const events = [
        { title: "Birthday", date: "14/03/2023", address: { city: "London", country: "England" }, imgUrl: "https://thumbs.dreamstime.com/b/happy-birthday-cupcake-celebration-message-160558421.jpg" },
        { title: "Biry", date: "14/03/2023", address: { city: "London", country: "England" }, imgUrl: "https://thumbs.dreamstime.com/b/happy-birthday-cupcake-celebration-message-160558421.jpg" },
        { title: "Birthday", date: "14/03/2023", address: { city: "London", country: "England" }, imgUrl: "https://thumbs.dreamstime.com/b/happy-birthday-cupcake-celebration-message-160558421.jpg" },
    ]

    return (
        <>
            <Event {...events[0]} />

            <Event {...events[1]}/>

            <Event {...events[2]}/>
        </>
    )
}

export default EventList;