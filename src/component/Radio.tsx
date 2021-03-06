import * as React from "react"

interface IRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export default class Radio extends React.Component<IRadioProps> {
  render() {
    const {
      children,
      inputRef,
      ...props
    } = this.props

    return (
      <label className="radio">
        <input {...props} type="radio" />

        {children}
      </label>
    )
  }
}
