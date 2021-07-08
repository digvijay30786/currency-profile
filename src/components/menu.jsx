import React from "react";
import '../components/menu.css';
import Currency from '../components/currency';
export default function Menu()
{
    return <React.Fragment>
        <div className="menu">
        <div className="imgPart">
            <div className="imga"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="100%" height="100%" alt="image"/></div>
            <div><h3>TipWallets</h3></div>
        </div>
        <div className="list">
            <nav>Home</nav>
            <nav>Profile</nav>
            <nav>Settings</nav>
            <nav>About</nav>
            <nav>contact</nav>
            <nav className="sign">SignOut</nav>
        </div>
    </div>
    <Currency/>
    </React.Fragment>
}