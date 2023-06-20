import React, {useContext} from "react"
import { ThemeContext } from "../themeContext"

export default function Footer() {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`footer ${color}-theme-footer`}>
          <strong> Best Feet </strong>
        </div>
    )
}