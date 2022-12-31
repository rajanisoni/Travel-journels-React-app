import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"
import './App.css';


// console.log(data)

const eachCard = data.map(function (elem) {
    return (
        <Card
            key={elem.id}
            data={elem}
        />)
})


export default function () {
    return (
        <div className="container">
            <Navbar />
            {eachCard}
        </div>
    )
}