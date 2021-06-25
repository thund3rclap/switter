import React from "react";
import logo from "../../images/Instagram/Instagram_logo.svg";
import searchIcon from "../../images/Instagram/search.svg";
import Direct from "../../images/Instagram/direct.png";
import {
    Navigation,
    Container,
    Instalogo,
    Search,
    SearchImg,
    searchForm,
    SearchInput,
} from "./Instastyles.js";


export default function InstaNavBar(props) {
    return (
        <div style={Navigation}>
            <div style={Container}>
                <img src={logo} alt="instagramm-logo" style={Instalogo} />
                <div style={{ width: "30px" }}>
                    <img src={Direct} alt="direct" />
                </div>
                <div style={Search}>
                    <form style={searchForm}>
                        <input
                            onFocus={() => props.setProfileState(false)}
                            onBlur={() => props.setProfileState(true)}
                            type="text"
                            style={SearchInput}
                            onChange={(event) =>
                                props.searchSetValue(event.target.value)
                            }
                        />
                        <img
                            src={searchIcon}
                            alt="search-icon"
                            style={SearchImg}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
