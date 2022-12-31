import React from "react"


export default function Card(props) {
    // console.log(props.data)

    return (
        <div className="card-container">
            <div className="card">

                <div className="card-img">
                    <img src={props.data.imageUrl} />
                </div>
                <div className="card-about">
                    <p className="card-location">{props.data.location}</p>
                    <a className="card-googleMapsUrl" href={props.data.googleMapsUrl} target="_blank">View on Google Maps</a>
                    <h2 className="card-title">{props.data.title}</h2>
                    <h5 className="card-date">{props.data.startDate}-{props.data.endDate}</h5>
                    <p className="card-description">{props.data.description}</p>
                </div>
            </div>
            <hr />
        </div>

    )
}