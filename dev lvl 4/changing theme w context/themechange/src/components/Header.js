import React, {useContext} from "react"
import { ThemeContext } from "../themeContext"

export default function Header() {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`navbar ${color}-theme-navbar`}>
          <a className={`${color}-theme-link`} href='1'>Home</a>
          <a className={`${color}-theme-link`} href='2'>About</a>
          <a className={`${color}-theme-link`} href='3'>Contact</a>
        </div>
    )
}